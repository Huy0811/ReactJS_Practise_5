import React from "react";

type ParentProp = {
  children: React.ReactNode;
};

const Parent = (props: ParentProp) => {
  return <h2>{props.children}</h2>;
};

export default Parent;
