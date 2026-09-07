import { spawnSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const siteRoot = path.resolve(scriptDir, '..');
const workspaceRoot = path.resolve(siteRoot, '..', '..');
const deckRoot = path.join(workspaceRoot, 'artifacts', 'charity-hustle-deck');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    cwd: options.cwd ?? workspaceRoot,
    env: { ...process.env, ...options.env },
    stdio: 'inherit',
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run('pnpm', ['exec', 'vite', 'build', '--config', 'vite.config.ts'], {
  cwd: siteRoot,
});

run('pnpm', ['--filter', '@workspace/charity-hustle-deck', 'run', 'build'], {
  env: {
    PORT: process.env.SLIDEDECK_BUILD_PORT ?? '25093',
    BASE_PATH: '/slidedeck/',
  },
});

const destination = path.join(siteRoot, 'dist', 'public', 'slidedeck');
rmSync(destination, { recursive: true, force: true });
mkdirSync(destination, { recursive: true });
cpSync(path.join(deckRoot, 'dist', 'public'), destination, { recursive: true });

console.log('Embedded Charity Hustle slide deck at /slidedeck/.');