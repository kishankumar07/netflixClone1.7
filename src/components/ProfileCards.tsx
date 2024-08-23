import React from "react"
import { Profile } from "../utils/profileDetails"

interface ProfileCardsProps{
    item:Profile
}

const ProfileCards:React.FC<ProfileCardsProps> = ({item}) => {
  return (
    <div>
         <div className="flex flex-col items-center p-3">
                  <img className="size-28 rounded-md" src={item.image} alt="" />
                 <p className=" max-w-28 text-center truncate mt-2">{item.name}</p>
              </div>
    </div>
  )
}

export default ProfileCards
