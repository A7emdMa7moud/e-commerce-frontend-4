import React from "react";

function PageTitle({ title }) {
  return (
    <p className="text-3xl lg:text-5xl font-extrabold capitalize pt-4 text-main tracking-wider">
      {title}
    </p>
  );
}
export default PageTitle;
