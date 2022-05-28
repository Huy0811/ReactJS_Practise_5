import React from "react";
import "./ColorList.css";

type ColorListProps = {
  handleChange: (event: React.MouseEvent<HTMLInputElement>) => void;
};

const ColorList = (props: ColorListProps) => {
  return (
    <div className="container">
      <div className="colorList1">
        <input
          type="radio"
          name="selectColor"
          value="aqua"
          onClick={props.handleChange}
        />
      </div>
      <div className="colorList2">
        <input
          type="radio"
          name="selectColor"
          value="blueviolet"
          onClick={props.handleChange}
        />
      </div>
      <div className="colorList3">
        <input
          type="radio"
          name="selectColor"
          value="palevioletred"
          onClick={props.handleChange}
        />
      </div>
    </div>
  );
};

export default ColorList;
