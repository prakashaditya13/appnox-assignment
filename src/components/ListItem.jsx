import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ data }) => {
  return (
    <div className="__list__item border-b pt-6 max-sm:pt-4">
      <Link to={`/search/${data.resultName.split(" ").join("-")}`}>
        <h4 className="font-medium text-3xl max-sm:text-2xl text-[#111111] opacity-[16%] py-4 max-sm:py-2 hover:opacity-[100%] transition-all hover:scale-[1.08] w-fit cursor-pointer">
          {data.resultName}
        </h4>
      </Link>
    </div>
  );
};

export default ListItem;
