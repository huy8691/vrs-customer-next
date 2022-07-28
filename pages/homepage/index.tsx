import React, { useEffect } from "react";
import SectionNewProducts from "./parts/sectionNewProducts";
import SectionSellingProducts from "./parts/sectionSellingProducts";
import SectionPreOrderProducts from "./parts/sectionPreOrderProducts"
import SectionFlashSellProducts from "./parts/sectionFlashSellProducts";
import SectionCategoryProduct from "./parts/sectionCategoryProduct"
const HomePage: React.FC = (props) => {
  return (
    <div className="container">
      <SectionFlashSellProducts/>
      <SectionNewProducts data={props.data} />
      <SectionSellingProducts/>
      <SectionPreOrderProducts/>
      <SectionCategoryProduct/>
    </div>
  );
};

export default HomePage;



