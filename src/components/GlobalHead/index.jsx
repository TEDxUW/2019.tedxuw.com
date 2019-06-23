import React from "react";
import { Helmet } from "react-helmet";
import ImgLogo from "~static/img/tedx_logo.svg";

const GlobalHead = () => (
  <Helmet defer={false}>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no"
    />
    <meta
      name="description"
      content="TEDxUW is Waterloo's largest annual TEDx event, happening this fall at the University of Waterloo."
    />

    {/* apple */}
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#E62B1E" />
    <meta name="apple-mobile-web-app-title" content="TEDxUW" />

    {/* opengraph */}
    <meta
      property="og:description"
      content="TEDxUW is Waterloo's largest annual TEDx event, happening this fall at the University of Waterloo."
    />
    <meta property="og:title" content="TEDxUW" />
    <meta property="og:type" content="website" />

    <title>TEDxUW</title>
    <link rel="shortcut icon" href={ImgLogo} />
  </Helmet>
);

export default GlobalHead;
