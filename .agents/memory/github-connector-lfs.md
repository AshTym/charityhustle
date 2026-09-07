---
name: GitHub connector and LFS
description: How to preserve Git LFS pointers when synchronizing through the GitHub connector.
---

When mirroring a tracked tree through GitHub's Git Data API, read each entry from its indexed Git blob rather than from the working-tree file.

**Why:** Git LFS replaces pointer files with full media in the working tree. Uploading working-tree bytes sends an oversized asset and creates a blob that does not match the tracked Git object.

**How to apply:** Resolve tracked entries and their blob IDs from Git, then use the blob object content for connector uploads. This preserves LFS pointers and keeps the remote tree hash-compatible with the local index.