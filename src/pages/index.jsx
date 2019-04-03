import React from "react";
import { useComingSoonData } from "~utils/use-coming-soon-data";

export default () => {
  const jsonData = useComingSoonData();

  return <div>Hello World! {jsonData.edges[0].node.title}</div>;
};
