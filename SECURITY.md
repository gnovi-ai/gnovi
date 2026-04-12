<!-- SPDX-License-Identifier: AGPL-3.0-only -->
<!-- Copyright (c) 2026 Gnovi Contributors -->

# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| latest  | :white_check_mark: |

## Reporting a Vulnerability

**Do not open a public GitHub issue for security vulnerabilities.**

You can report vulnerabilities through either channel:

1. **GitHub Private Vulnerability Reporting** (preferred): Go to the
   [Security tab](https://github.com/gnovi-ai/gnovi/security/advisories/new)
   and click "Report a vulnerability." This creates a private advisory where we
   can collaborate on a fix before public disclosure.

2. **Email:** Send details to **security@gnovi.ai**.

Include:

- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Response Timeline

- **Acknowledgment:** within 48 hours
- **Initial assessment:** within 1 week
- **Fix timeline:** depends on severity, typically 1-4 weeks

## Scope

Security issues include (but are not limited to):

- Prompt injection vulnerabilities
- Cross-tenant data leakage
- Authentication/authorization bypass
- Memory poisoning attacks
- MCP tool injection

Issues that are NOT security vulnerabilities:

- Bugs that don't have security implications
- Feature requests
- Performance issues

## Safe Harbor

We support safe harbor for security research conducted in good faith. If you
discover and report a vulnerability in accordance with this policy, we will:

- Not pursue legal action against you
- Work with you to understand and resolve the issue promptly
- Credit you in the advisory (unless you prefer to remain anonymous)

We ask that you:

- Make a good faith effort to avoid privacy violations, data destruction, and
  service disruption
- Only interact with accounts you own or with explicit permission
- Not publicly disclose the vulnerability until we've had a reasonable time to
  address it
