---
name: Non-destructive uniqueness changes
description: Safe handling of new uniqueness rules on database tables that already contain records.
---

When adding a uniqueness rule to a populated table, represent it as an explicit unique index that the schema synchronizer can introspect without proposing data truncation.

**Why:** The schema push tool may conservatively prompt to truncate a non-empty table when adding a column-level unique constraint, even when existing nullable values would not conflict.

**How to apply:** Preserve existing rows, add the nullable column and unique index additively, then model the same named unique index in the Drizzle table definition and confirm a subsequent schema push reports no changes.