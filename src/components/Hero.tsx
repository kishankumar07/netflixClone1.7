import { FaPlay } from "react-icons/fa"
import { FaCircleInfo } from "react-icons/fa6"
import HeroCards from "./HeroCards"

const Hero = () => {
  return (
    <div className="h-full relative ">
        <div className="relative  w-full h-full">
            {/* cover image */}
            
                <img src="https://images.ottplay.com/images/rashmika-mission-majnu-490.jpeg?impolicy=ottplay-20210210&width=1200&height=675" alt="" className="w-full h-full object-cover"/>
            


             {/* Faded bottom */}
             <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

             {/* title and description with play button and more info */}

            <div className="absolute top-1/3 max-w-3xl ml-7">
                <h1 className="text-6xl font-bold text-slate-50 mb-3">Twisters</h1>
                <p className="text-slate-50 mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorem odit accusamus repellat, quia voluptatum accusantium! Magnam totam tempore incidunt!</p>

                {/* The two buttons play and More info */}
                <div className="flex gap-3">
                    <button className="flex gap-2 items-center rounded  font-bold bg-slate-50  outline-slate-50 px-4 py-2"> <FaPlay/> Play</button>
                    <button className="flex items-center gap-1 px-4 py-2 rounded bg-gray-500 text-zinc-300 font-bold"> <FaCircleInfo className="text-zinc-300"/>More Info</button>
                </div>
              
            </div>

            {/* Hero's card */}
            <HeroCards/>
           
        </div>
    </div>
  )
} 

export default Hero
