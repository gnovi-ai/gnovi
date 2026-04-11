// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 Gnovi Contributors

import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Getting Started",
      items: ["getting-started/quickstart"],
    },
    {
      type: "category",
      label: "Architecture",
      items: ["architecture/overview"],
    },
  ],
};

export default sidebars;
