import { FaPlay } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import HeroCards from "./HeroCards";
import { useEffect, useState } from "react";
import { imageBaseUrl,makeApiCallToEndPoint } from "../services/axios";
import { endPoints } from "../services/requests";



export interface Movie {
  name: string;
  imagePath: string;
  id: number;
  date: string;
  videoIsThere: boolean;
  description: string;
}

export interface ApiMovie{
  id:number,
  original_title:string,
  backdrop_path:string,
  release_date:string,
  video:boolean,
  overview:string
}

const Hero = () => {
  const [coverMovie, setCoverMovie] = useState<Movie>();
  const [popMoviesList,setPopMoviesList] = useState<Movie[]>();

  useEffect(() => {
    const apiRequest = async () => {
      try {
       const apiCall = await makeApiCallToEndPoint(endPoints.popularMovies);
          console.log('apiCall result :',apiCall)
          const index = Math.floor(
            Math.random() * apiCall.length
          );
          const requiredCoverMovie = apiCall[index];
          const results:ApiMovie[] = apiCall;
          const allPopMovies:Movie[] = results.map((item)=>{
            return {
                      id:item.id,
                      name:item.original_title,
                      imagePath:item.backdrop_path,
                      date:item.release_date,
                      videoIsThere:item.video,
                      description:item.overview,
                  }
          })
          // console.log(allPopMovies);
          setPopMoviesList(allPopMovies)//To store all popular movies in the popMoviesList state

          const coverMovewDetails: Movie = {
            name: requiredCoverMovie.original_title,
            imagePath: requiredCoverMovie.backdrop_path,
            id: requiredCoverMovie.id,
            date: requiredCoverMovie.release_date,
            videoIsThere: requiredCoverMovie.video,
            description: truncateDescription(requiredCoverMovie.overview,200),
          };
          setCoverMovie(coverMovewDetails);//To sotre only one random movie from the array of all popular movies
          // console.log(coverMovewDetails)
        }
       catch (err) {
        if(err instanceof Error){
          console.error('Failed to fetch popular movies:',err.message)
        }else{
          console.error('Unknown error occured : ',err);
        }
      }
    };
    apiRequest();
  }, []);

    // To truncate the description if it is more than 200 characters
  const truncateDescription = (inputText:string,limit:number)=>{
      return inputText.length > limit ? inputText.substring(0,limit) + '...' : inputText;
  }
   

  return (
    <>
      <div className="relative  w-full h-[400px] md:h-[900px] ">
        {/* cover image */}

        <img
          src={`${imageBaseUrl}${coverMovie?.imagePath}`}
          alt=""
          className="w-full h-full object-cover "
        />

        {/* Faded bottom */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

        {/* title and description with play button and more info */}

        <div className="absolute top-1/2 md:top-1/3 max-w-3xl ml-7">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-50 mb-3 lg:mb-5">
            {coverMovie?.name}
          </h1>
          <p className="text-slate-50 mb-3 text-sm md:text-lg lg:text-xl lg:mb-5 ">
            {coverMovie?.description}
          </p>
 
          {/* The two buttons play and More info */}
          <div className="flex gap-3 ">
            <button className="flex gap-2 items-center rounded  font-bold bg-slate-50 hover:bg-slate-200 outline-slate-50 px-2 py-2 text-xs md:text-sm lg:text-lg md:px-4 md:py-2">
              {" "}
              <FaPlay className="text-xs md:text-sm lg:text-lg" /> Play
            </button>

            <button className="flex items-center gap-1 px-4 py-2 rounded bg-gray-600 text-zinc-300 font-bold hover:bg-gray-500 hover:text-zinc-100 text-xs md:text-sm lg:text-lg">
              {" "}
              <FaCircleInfo className="text-inherit" />
              More Info
            </button>
          </div>
        </div>

        {/* Hero's card */}
        <div className="absolute bottom-5 ml-5 hidden md:block">
          <HeroCards movies={popMoviesList} imageUrl={imageBaseUrl} isHeroSection={true}/>
        </div>
      </div>
    </>
  );
};

export default Hero;
