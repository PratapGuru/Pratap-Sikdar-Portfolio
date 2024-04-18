import React from "react";

function SectionTitle(props) {
  return (
    <div className="flex items-center space-x-10 py-10">
      <h1 className="text-3xl text-lightGrey">{props.title}</h1>
      <div className="flex-1 h-[1px] bg-accentColorTwo"></div>
    </div>
  );
}

export default SectionTitle;
