// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 Gnovi Contributors

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  onBrokenLinks: "throw",
  title: "Gnovi",
  tagline: "Knowledge Intelligence Platform",
  url: "https://docs.gnovi.ai",
  baseUrl: "/",
  organizationName: "gnovi-ai",
  projectName: "gnovi",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

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
        { href: "https://discord.gg/DnJZaAk7RX", label: "Discord", position: "right" },
        { href: "https://github.com/gnovi-ai/gnovi", label: "GitHub", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Getting Started", to: "/docs/getting-started/quickstart" },
            { label: "Architecture", to: "/docs/architecture/overview" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Discord", href: "https://discord.gg/DnJZaAk7RX" },
            { label: "GitHub Discussions", href: "https://github.com/gnovi-ai/gnovi/discussions" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Blog", to: "/blog" },
            { label: "GitHub", href: "https://github.com/gnovi-ai/gnovi" },
            { label: "gnovi.ai", href: "https://gnovi.ai" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gnovi Contributors. AGPL-3.0.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
