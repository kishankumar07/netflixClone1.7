import React from "react"
import { Profile } from "../utils/profileDetails"

interface ProfileCardsProps{
    item:Profile,
    onTilePress: (userProfile:{ name:string,asset:string })=> void
}

const ProfileCards:React.FC<ProfileCardsProps> = ({item,onTilePress}) => {
  return (
    <div>
         <div className="flex flex-col justify-center items-center ml-10 p-4 md:ml-12 cursor-pointer">
                  <img className=" size-20 md:size-28 rounded-md" src={item.image}  onClick={()=>{onTilePress({ name:item.name,asset:item.image })}}/>
                 <p className=" max-w-28 text-center truncate mt-2">{item.name}</p>
              </div>
    </div>
  )
}

export default ProfileCards
