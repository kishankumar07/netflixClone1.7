import { MdArrowBackIos } from "react-icons/md";
import ReactPlayer from "react-player"
import { useLocation, useNavigate } from "react-router-dom"
import { videoData } from "../components/HeroCards";


const VideoPlayer = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const videoDetails:videoData = location.state?.videoDetails;
  console.log('video data : ',videoDetails)

  if(!videoDetails){
    return <div>No vide details available</div>
  }

  const handleClickButton = ()=>{
        navigate(-1);
  }

  return (
    <div className="bg-zinc-800 h-screen flex flex-col justify-center items-center">
        <div className="w-4/5 h-5/6 relative">
              <ReactPlayer url={`https://www.youtube.com/watch?v=${videoDetails.key}`} width='100%' height='100%'/>
              <MdArrowBackIos onClick={()=>{handleClickButton()}} className="text-white size-16 absolute top-2 -left-12 cursor-pointer"/>
        </div>

        <div className="w-4/5 justify-between flex p-4 text-white">
            <p>Date : {videoDetails.published_at.slice(0,10).split('-').reverse().join('/')}</p>
            <p>{videoDetails.name}</p>
            <p>Video Type : {videoDetails.type}</p>
        </div>
       
    </div>
  )
}

export default VideoPlayer
