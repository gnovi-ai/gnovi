// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 Gnovi Contributors

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [".next/", "node_modules/"],
  },
);
