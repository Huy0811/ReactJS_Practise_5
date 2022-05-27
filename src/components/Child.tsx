import React from "react";

type ChildProp = {
  names: {
    name: string;
    style: React.CSSProperties;
  }[];
};

const Child = (props: ChildProp) => {
  return (
    <div>
      {props.names.map((item) => (
        <button style={item.style}>{item.name}</button>
      ))}
    </div>
  );
};

export default Child;
