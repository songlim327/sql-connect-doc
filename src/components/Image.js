import React from "react";
import { Image as SemiImage } from "@douyinfe/semi-ui";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function Image(props) {
  const { path } = props;

  // Generate alt
  const generateAlt = () => {
    let splitPath = path.split("/");
    return splitPath[splitPath.length - 1];
  };

  return <SemiImage src={useBaseUrl(path)} alt={generateAlt()} />;
}
