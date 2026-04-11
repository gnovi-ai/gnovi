// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 Gnovi Contributors

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  title: "Gnovi",
  tagline: "Knowledge Intelligence Platform",
  url: "https://docs.gnovi.ai",
  baseUrl: "/",
  organizationName: "gnovi-ai",
  projectName: "gnovi",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/gnovi-ai/gnovi/tree/main/docs/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Gnovi",
      items: [
        { type: "docSidebar", sidebarId: "docs", position: "left", label: "Docs" },
        { to: "/blog", label: "Blog", position: "left" },
        { href: "https://github.com/gnovi-ai/gnovi", label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Gnovi Contributors. AGPL-3.0.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
