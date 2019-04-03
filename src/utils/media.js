import { css } from "styled-components";

export const mediaSizes = {
  wideScreen: 1440,
  tablet: 900,
  phone: 700,
  smallPhone: 400,
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
