import { FaPlay } from "react-icons/fa"
import { FaCircleInfo } from "react-icons/fa6"
import HeroCards from "./HeroCards"

const Hero = () => {
  return (
    <>
        <div className="relative  w-full h-[400px] md:h-[800px] ">
            {/* cover image */}
            
                <img src="https://images.ottplay.com/images/rashmika-mission-majnu-490.jpeg?impolicy=ottplay-20210210&width=1200&height=675" alt="" className="w-full h-full object-cover "/>
            


             {/* Faded bottom */}
             <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

             {/* title and description with play button and more info */}

            <div className="absolute top-1/2 md:top-1/3 max-w-3xl ml-7">
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-slate-50 mb-3">Twisters</h1>
                <p className="text-slate-50 mb-3 text-sm md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem odit accusamus repellat, quia voluptatum accusantium! Magnam totam tempore incidunt!</p>

                {/* The two buttons play and More info */}
                <div className="flex gap-3">
                    <button className="flex gap-2 items-center rounded  font-bold bg-slate-50 hover:bg-slate-200 outline-slate-50 px-2 py-2 text-xs md:text-sm lg:text-lg md:px-4 md:py-2"> <FaPlay className="text-xs md:text-sm lg:text-lg"/> Play</button>

                    <button className="flex items-center gap-1 px-4 py-2 rounded bg-gray-600 text-zinc-300 font-bold hover:bg-gray-500 hover:text-zinc-100 text-xs md:text-sm lg:text-lg"> <FaCircleInfo className="text-inherit"/>More Info</button>
                </div>
              
            </div>

            {/* Hero's card */}
            <div className="absolute bottom-5 ml-5 hidden md:block">
              <HeroCards/>
            </div>
        </div>
    </>
  )
} 

export default Hero
