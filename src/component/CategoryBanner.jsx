import React from "react";

const CategoryBanner = (props) => {
  return (
    <section className=" bg-image-full">
      <img
        className="img-fluid"
        src={require("../assets/images/croissant_banner.jpg")}
        alt="croissant banner"
      />
    </section>
  );
};

export default CategoryBanner;
