import React from "react";

export function FeatureList({ children }) {
  return (
    <>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </>
  );
}

export function Column({ title, children, size = 4 }) {
  return (
    <>
      <div className={`col col--${size}`}>
        <h3>{title}</h3>
        {children}
      </div>
    </>
  );
}

export function Feature({ image, title, subtitle, url }) {
  return (
    <>
      <h4> </h4>
      <a className="avatar" href={url}>
        <img
          className="avatar__photo"
          src={
            require(`@site/static/docs/assets/welcome-pages/${image}`).default
          }
        />
        <div className="avatar__intro">
          <div className="avatar__name">{title}</div>
          <small className="avatar__subtitle">{subtitle}</small>
        </div>
      </a>
    </>
  );
}

export function Contact({}) {
  return (
    <>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col col--2">
            <div className="avatar">
              <img
                className="avatar__photo"
                src={
                  require("@site/static/docs/assets/home/twitter.png").default
                }
              />
              <div className="avatar__intro">
                <div className="avatar__name">Twitter</div>
                <small className="avatar__subtitle">
                  <a href="https://twitter.com/0xDripVerse">@0xDripVerse</a>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ReleaseHeader() {
  return (
    <>
      <p>
        All notable changes to this project will be documented in this file.
        <br />
        The format is based on{" "}
        <a
          href="https://keepachangelog.com/en/1.0.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Keep a Changelog
        </a>
        , and this project adheres to{" "}
        <a
          href="https://keepachangelog.com/en/1.0.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Semantic Versioning
        </a>
        .
      </p>
    </>
  );
}

export const VideoCard = ({ url }) => {
  return <video className="video__card" loop autoPlay muted src={url} />;
};

export function CardShelf({ children }) {
  return (
    <>
      <div class="card-shelf">{children}</div>
    </>
  );
}

export function CardItem({ image, title }) {
  return (
    <>
      <div class="card-container">
        <div
          class="card bg"
          style={{
            background: `url(${image})`,
          }}
        >
          <div class="inner-content">
            <div class="inner-text">
              <p>{title}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
