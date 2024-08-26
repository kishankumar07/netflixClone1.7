import { useEffect, useState } from "react"
import HeroCards from "./HeroCards"
import { imageBaseUrl, makeApiCallToEndPoint } from "../services/axios";
import { endPoints } from "../services/requests";
import { ApiMovie } from "./Hero";

const MiddleSection = () => {

  const [trendingMovies,setTrendingMovies] = useState<ApiMovie[] | undefined>();
  const [tvShows,setTvShows] = useState<ApiMovie[] | undefined>();
  const [topRatedMovies,setTopRatedMovies] = useState<ApiMovie[] | undefined>();
  const [upcomingMovies,setUpcomingMovies] = useState<ApiMovie[] | undefined>();

  useEffect(()=>{
      const apiRequest = async()=>{
        try{
          const [trending,tvShows,topRated,upcoming] = await Promise.all([
            makeApiCallToEndPoint(endPoints.trendingMovies),
            makeApiCallToEndPoint(endPoints.tvShows),
            makeApiCallToEndPoint(endPoints.topRatedMovies),
            makeApiCallToEndPoint(endPoints.upcomingMovies),
        ])

        setTrendingMovies(trending);
        setTvShows(tvShows);
        setTopRatedMovies(topRated);
        setUpcomingMovies(upcoming);

        }catch(error){
          console.error('error at the apirequest from MiddleSection useEffect:',error)
        }
      }
      apiRequest()
  },[])

  return (
    <div className="bg-inherit pl-5 pt-4">
        <HeroCards movies={trendingMovies} imageUrl={imageBaseUrl} title="Trending"/>
        <HeroCards movies={topRatedMovies} imageUrl={imageBaseUrl} title="Popular Movies"/>
        <HeroCards movies={tvShows} imageUrl={imageBaseUrl} title="TV Shows"/>
        <HeroCards movies={upcomingMovies} imageUrl={imageBaseUrl} title="Upcoming Movies"/>
    </div>
  )
}

export default MiddleSection
