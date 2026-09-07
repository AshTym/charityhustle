---
name: GitHub HTML upload filtering
description: Why source entry HTML uses a load-event module import and Vite injects the production script tag.
---

Keep module script tags out of source HTML when uploading this project through the GitHub connector. Use the source load-event import for development and the build-only Vite HTML transform for production bundling.

**Why:** The GitHub connector’s Cloudflare layer consistently rejects any blob containing a module script element, regardless of filename, Base64 wrapping, casing, or request endpoint.

**How to apply:** Preserve the existing source-loader and build-transform pairing in both web artifacts. If either side changes, verify the development preview loads and the production output contains the hashed module script before updating GitHub.