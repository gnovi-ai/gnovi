// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 Gnovi Contributors

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  transpilePackages: ["@gnovi/ui"],
};

export default nextConfig;
