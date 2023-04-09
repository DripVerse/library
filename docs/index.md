---
id: welcome
title: Welcome to DripVerse Library
hide_table_of_contents: true
---
import {FeatureList, Column, Feature, Contact} from "@site/components/featurelist"

Welcome! This is the starting point for all the documentation in DripVerse.

<div className="container">
  <div className="row">
    <div className="col col--6">
      <a href="/papers/litepaper">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/guide.jpg").default} alt="Litepaper" />
          </div>
          <div className="card__body">
            <h3>DripVerse Litepaper</h3>
            Learn what DripVerse is, how it works, and why you should build on it.
          </div>
        </div>
      </a>
    </div>
    <div className="col col--6">
      <a href="/guide/quickstart">
        <div className="card">
          <div className="card__image">
            <img src={require("@site/static/docs/assets/welcome-pages/quickstart.jpg").default} alt="Quick Start" />
          </div>
          <div className="card__body">
            <h3>Quick Start</h3>
            Can't wait to jump to integrate DripVerse? Us, too.
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

<hr class="subsection" />

<h1 class="text-center big-title" > Discover Library by Topic </h1>

<FeatureList>
  <Column title="Developer Documentation" size="6">
    <Feature url="/guide/quickstart" title="Quickstart" subtitle="Integrate your first Utility" image="quickstart.jpg" />
  </Column>
  <Column title="Developer Tools" size="6">
    <Feature url="/sdk/js/introduction" title="JavaScript SDK" subtitle="Build your JavaScript Project" image="smartcontract-js.png" />
    <Feature url="/cli/drip/introduction" title="Drip CLI" subtitle="Use DripVerse Protocol from your Terminal" image="cli.png" />
  </Column>
</FeatureList>

<Contact />
