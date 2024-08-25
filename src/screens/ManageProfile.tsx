import { useNavigate } from 'react-router-dom'
import ProfileCards from '../components/ProfileCards'
import profile from '../utils/profileDetails'

const ManageProfile = () => {

    const navigate = useNavigate();
  // function to store the selected user details :(name of user and avatar image of user ) to the local Storage

  const handleClick = (payLoad:{name:string,asset:string}):void=>{
        localStorage.setItem('selectedProfile',JSON.stringify(payLoad));
        navigate('/home')
  }


  return (
    <div className="min-h-screen bg-zinc-900 text-gray-400 flex flex-col justify-center items-center">
      {/* Text of whose watching */}
        <div className="mt-3 text-center">
            <h1 className="text-3xl md:text-5xl md:mb-4 text-slate-50">{"Who's Wacthing?"}</h1>
        </div>

        {/* profiles container */}
        <div className=" flex flex-wrap md:max-w-7xl  gap-7 justify-start p-20 pt-5">

          {/* profile cards */}
          {profile.map((item,index)=>(
              <ProfileCards item={item} key={index} onTilePress={handleClick}/>
          ))}
        </div>
          {/* button at bottom to manage profile */}
        <div className='mb-6'>
          <button className=" border px-5 py-2 border-slate-400">Manage Profiles</button>
        </div>
        
    </div>
  )
}

export default ManageProfile
