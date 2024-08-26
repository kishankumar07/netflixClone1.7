
import { instance } from "../services/axios"
import { API_KEY } from "../services/requests"
import { ApiMovie, Movie } from "./Hero"
import { useNavigate } from "react-router-dom"

interface HeroMoviesList {
    movies:Movie[] | undefined | ApiMovie[],
    imageUrl?:string,
    isHeroSection?:boolean
    title?:string
}

export interface videoData{
    name:string,
    key:string,
    site:string,
    type:string,
    published_at:string,
    id:string
}


const HeroCards = ({movies,imageUrl,isHeroSection,title}:HeroMoviesList) => {
    const navigate = useNavigate()

  

  const handleCardClick = async(movieId:number)=>{
        try{
          await instance.get(`movie/${movieId}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
            const videoDetails:videoData = response.data.results[0];
            navigate('/video-player',{state:{videoDetails}})
        })
        }catch(err){
          console.log('error at heroCards videoId generation:',err)
        }
  }

    
  return (
        <>
            
                <h1 className="text-white mt-7 font-bold text-lg md:text-2xl mb-6 ">{title || "Netflix Originals"} </h1>
                <div className="flex gap-4 pl-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                  {
                    movies?.map((item)=>(

                     <div onClick={()=>{handleCardClick(item.id)}} key={item.id} className={`${isHeroSection ? ('w-48'+' '+'h-60') : ('w-64'+" "+'h-48')} rounded-md snap-center bg-gray-800 flex-shrink-0 cursor-pointer`}>
                        <img src={`${imageUrl}${isHeroSection === true ? (item as Movie)?.imagePath : (item as ApiMovie)?.backdrop_path}`} alt={(item as Movie)?.name || (item as ApiMovie).original_title} className="w-full h-full object-cover rounded-md"/>
                     </div>
  
                    )) 
                  }
                     
                </div>
            
        </>
  )
}

export default HeroCards
