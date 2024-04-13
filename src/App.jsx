import { Link } from "react-router-dom";
import { CrossIcon } from "./assets/icons";
import Chip from "./components/Chip";
import ListItem from "./components/ListItem";
import { ChipData, SearchResultData } from "./constant";

function App() {
  return (
    <div className="__search__container__main pb-10">
      {/* Closing Header Section */}
      <div className="__cross__section__header__main py-4 px-20 max-sm:px-4 max-sm:border-b max-sm:shadow-innerHeader">
        <div className="__cross__icon__section flex justify-end">
          <Link to="#">
            <img
              src={CrossIcon}
              alt="cross_icon"
              className="w-[20px] h-[20px] max-sm:w-[15px] max-sm:h-[15px]"
            />
          </Link>
        </div>
      </div>

      {/* Search Input Field Section */}
      <div className="__input__field__section py-4 px-20 max-sm:px-4">
        <input
          type="text"
          placeholder="Cerca"
          name="_searchText"
          className="w-full text-6xl max-sm:text-4xl text-[#111111] font-medium border-b-[3px] px-1 min-h-[100px] max-sm:min-h-[60px] placeholder:text-6xl max-sm:placeholder:text-4xl placeholder:font-medium placeholder:text-[#111111] placeholder:opacity-[16%] outline-none focus:border-[#111111]"
        />
      </div>

      {/* tag chips section */}

      <div className="__tag__chips__section pt-2 px-20 max-sm:px-4">
        <div className="__chips__container__ flex gap-[8px] max-sm:flex-wrap">
          {ChipData?.map((_data, index) => {
            return <Chip key={index} data={_data} />;
          })}
        </div>
      </div>

      {/* Suggestion Section */}
      <div className="__search__suggestion__section px-20 max-sm:px-4 pt-20 max-sm:pt-10">
        <div className="__heading">
          <h5 className="font-semibold text-[16px] max-sm:text-sm uppercase">
            Suggerimenti
          </h5>
        </div>

        <div className="__result__section__List__view">
          <div className="__list__view__container pt-2">
            {SearchResultData?.map((_result, index) => {
              return <ListItem key={index} data={_result} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
