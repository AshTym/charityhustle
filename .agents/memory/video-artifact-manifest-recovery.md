---
name: Video artifact manifest recovery
description: How to preserve managed preview routing when delegated video work reduces the artifact manifest.
---

After delegated video implementation, verify that the artifact manifest still contains its preview path and managed web service, not only the video kind and aspect ratio.

**Why:** A delegated build can correctly persist the aspect ratio while replacing the manifest with a minimal two-line file, which silently removes the managed workflow.

**How to apply:** Restore mutable preview and service metadata through the validated artifact-manifest replacement flow. Do not re-add omitted immutable IDs through that flow; the registry already retains them and rejects the apparent change.