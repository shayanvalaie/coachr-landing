# Task 6 — landing dependency and backup cleanup

Date: November 1, 2026. Branch `codex/launch-06-dependencies-20261101`.
Baseline: preserved dirty snapshot `c732499`. No website publication occurred.

- Cleanup commit `552f556`: remove four obsolete numbered manifest/lock/legal
  backups. Canonical legal copy is unchanged. `DUPLICATE_ARTIFACTS.json` records
  every removed path and backup/canonical SHA-256; originals remain in the owner
  checkout and baseline Git snapshot.
- Dependency commit `49237a9`: Vite 6.4.3 -> 6.4.5 (same major/minor security
  patch), transitive source-map-js 1.2.1 -> 1.2.2. Canonical application code and
  privacy/terms text were not changed.

Actual final checks, Node v20.20.0 / npm 10.8.2:

```text
npm ci --ignore-scripts
exit 0
npm run build
Vite v6.4.5; 35 modules; build succeeded
npm audit --json
0 vulnerabilities
git diff --check
exit 0
```

`launch-evidence/` contains before (2 high findings) and after (0) audit JSON.
Build output is local only. Publishing the existing legal updates remains owned
by task 4 and requires the coordinated backend/mobile privacy rollout. This task
is not evidence that the live website or API changed.

Primary upstream release:
https://github.com/vitejs/vite/releases/tag/v6.4.5
