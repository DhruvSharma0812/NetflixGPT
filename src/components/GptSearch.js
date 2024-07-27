import { Background } from "../utils/constants";
import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gray-200 -z-20">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src= {Background}
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-65"></div>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};
export default GPTSearch;