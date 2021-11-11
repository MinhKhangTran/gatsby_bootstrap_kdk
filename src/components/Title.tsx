import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-capitalize text-decoration-underline text-center section_title">
      {title}
    </h2>
  );
};

export default Title;
