// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 Gnovi Contributors

import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout description={siteConfig.tagline}>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "calc(100vh - 60px - 200px)",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>{siteConfig.title}</h1>
        <p style={{ fontSize: "1.5rem", opacity: 0.8 }}>{siteConfig.tagline}</p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          <Link className="button button--primary button--lg" to="/docs/getting-started/quickstart">
            Get Started
          </Link>
          <Link
            className="button button--secondary button--lg"
            href="https://github.com/gnovi-ai/gnovi"
          >
            GitHub
          </Link>
        </div>
      </main>
    </Layout>
  );
}
