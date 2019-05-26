import { css } from "styled-components";

export const mediaSizes = {
  large: 1440,
  medium: 1024,
  tablet: 768,
  largeMobile: 425,
  mobile: 375,
  smallMobile: 320,
};

// Iterate through the sizes and create a media query for each size
export const mediaQueryFor = Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
