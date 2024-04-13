import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import {
  ListImg1,
  ListImg2,
  ListImg3,
  ListImg4,
  ListImg5,
  ListImg6,
  ListImg7,
  ListImg8,
  ListImg9,
  ListImg10,
  ListImg11,
  ListImg12,
} from "./assets/images";
import { EyeIcon } from "./assets/icons";

const SearchResultList = [
  {
    id: 0,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg1,
    view: "3,359",
  },
  {
    id: 1,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg2,
    view: "3,359",
  },
  {
    id: 2,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg3,
    view: "3,359",
  },
  {
    id: 3,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg4,
    view: "3,359",
  },
  {
    id: 4,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg5,
    view: "3,359",
  },
  {
    id: 5,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg6,
    view: "3,359",
  },
  {
    id: 6,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg7,
    view: "3,359",
  },
  {
    id: 7,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg8,
    view: "3,359",
  },
  {
    id: 8,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg9,
    view: "3,359",
  },
  {
    id: 9,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg10,
    view: "3,359",
  },
  {
    id: 10,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg11,
    view: "3,359",
  },
  {
    id: 11,
    title: "Asta",
    subtitle: "Arte Moderna e Contemporanea",
    timeline: "Milano, 21-22 Dicembre 2021",
    description: "Spilla in argento e oro a forma di rana stilizzata.",
    img: ListImg12,
    view: "3,359",
  },
];

const SearchResult = () => {
  const { resultName } = useParams();

  useEffect(() => {}, [resultName]);

  return (
    <div className="__result__container__main flex">
      {/* Sidenav Bar Section */}
      <SideNav />
      <div className="w-full">
        {/* Navbar section */}
        <Navbar />
        {/* Result Content Section */}
        <div className="__result__content__section__main px-12">
          <div className="__result__title__section py-[150px] text-center font-semibold font-serif text-6xl max-sm:text-2xl max-sm:pt-[80px] max-sm:pb-[10px]">
            <h1 className="text-[#111111]">{resultName}</h1>
          </div>

          <div className="__total__result__count__section flex items-center gap-4 max-sm:justify-center">
            <h4 className="font-semibold text-3xl max-sm:text-sm text-[#111111] font-serif">
              Risultati
            </h4>
            <div className="border py-2 px-4 rounded-[25px] max-sm:py-1 max-sm:px-2">
              <span className="font-medium font-serif text-xl max-sm:text-sm">
                1.364
              </span>
            </div>
          </div>
        </div>

        <div className="__result__List__section pt-[50px] px-12 max-sm:px-4 flex flex-wrap gap-12 gap-y-20 pb-20">
          {SearchResultList?.map((listItem, index) => {
            return (
              <div key={index} className="__list__card max-sm:w-full transition transform duration-1000 hover:scale-[1.07] hover:cursor-pointer">
                <div className="__avatar__section w-fit max-sm:w-full relative">
                  <img
                    src={listItem?.img}
                    alt=""
                    className="w-[300px] h-[300px] max-sm:w-full"
                  />
                  <div className="view__count border-none flex items-center gap-[8px] py-1 px-[12px] w-fit rounded-[25px] bg-[#11111180] absolute top-2 left-2">
                    <img
                      src={EyeIcon}
                      alt="eyeIcon"
                      className="w-[18px] h-[12px]"
                    />
                    <span className="font-semibold text-[#fff] text-[14px]">
                      {listItem?.view}
                    </span>
                  </div>
                </div>

                <p className="text-[14px] font-medium text-[#111111] pt-6">
                  {listItem?.description}
                </p>
                <div className="pt-12 max-sm:pt-6">
                  <h4 className="font-normal text-[14px]">{listItem?.title}</h4>
                  <p className="text-[14px] font-semibold text-[#111111]">
                    {listItem?.subtitle}
                  </p>
                  <p className="text-[14px] font-semibold text-[#111111]">
                    {listItem?.timeline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
