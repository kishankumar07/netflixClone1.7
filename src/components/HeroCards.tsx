
import { ApiMovie, Movie } from "./Hero"

interface HeroMoviesList {
    movies:Movie[] | undefined | ApiMovie[],
    imageUrl?:string,
    isHeroSection?:boolean
    title?:string
}


const HeroCards = ({movies,imageUrl,isHeroSection,title}:HeroMoviesList) => {
    
  return (
        <>
            
                <h1 className="text-white mt-7 font-bold text-lg md:text-2xl mb-6 ">{title || "Netflix Originals"} </h1>
                <div className="flex gap-4 pl-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
                  {
                    movies?.map((item)=>(

                     <div key={item.id} className={`${isHeroSection ? ('w-48'+' '+'h-60') : ('w-64'+" "+'h-48')} rounded-md snap-center bg-gray-800 flex-shrink-0 cursor-pointer`}>
                        <img src={`${imageUrl}${isHeroSection === true ? (item as Movie)?.imagePath : (item as ApiMovie)?.backdrop_path}`} alt={(item as Movie)?.name || (item as ApiMovie).original_title} className="w-full h-full object-cover rounded-md"/>
                     </div>
  
                    )) 
                  }
                     
                </div>
            
        </>
  )
}

export default HeroCards
