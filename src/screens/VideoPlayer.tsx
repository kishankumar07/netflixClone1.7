import { IoArrowBackCircleSharp } from "react-icons/io5"
import ReactPlayer from "react-player"


const VideoPlayer = () => {



  return (
    <div className="bg-zinc-800 h-screen flex flex-col justify-center items-center">
        <div className="w-4/5 h-5/6 relative">
              <ReactPlayer url='https://www.youtube.com/watch?v=I3IyUUXTu1c' width='100%' height='100%'/>
              <IoArrowBackCircleSharp className="text-white size-16 absolute top-2 -left-16 cursor-pointer"/>
        </div>

        <div className="w-4/5 justify-between flex p-4 text-white">
            <p>Name</p>
            <p>Type</p>
            <p>Date</p>
        </div>
       
    </div>
  )
}

export default VideoPlayer
