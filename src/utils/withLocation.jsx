import React from "react";
import { Location } from "@reach/router";
import queryString from "query-string";

/**
 * A HOC to allow a component to access query parameters, location and navigation.
 * @param ComponentToWrap the component you want to give access to query params
 */
const withLocation = ComponentToWrap => props => (
  <Location>
    {({ location, navigate }) => (
      <ComponentToWrap
        {...props}
        location={location}
        navigate={navigate}
        search={location.search ? queryString.parse(location.search) : {}}
      />
    )}
  </Location>
);

export default withLocation;
