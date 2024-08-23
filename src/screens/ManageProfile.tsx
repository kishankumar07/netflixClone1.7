import ProfileCards from '../components/ProfileCards'
import profile from '../utils/profileDetails'

const ManageProfile = () => {
  return (
    <div className="h-dvh bg-zinc-900 text-gray-400 flex flex-col justify-center items-center">
      {/* Text of whose watching */}
        <div className=" text-center">
            <h1 className="text-5xl text-slate-50">Who's watching?</h1>
        </div>

        {/* profiles container */}
        <div className=" flex flex-wrap max-w-6xl  gap-7 justify-start p-20 pt-5">

          {/* profile cards */}
          {profile.map((item,index)=>(
              <ProfileCards item={item} key={index}/>
          ))}
        </div>
          {/* button at bottom to manage profile */}
        <div>
          <button className="border px-5 py-2 border-slate-400">Manage Profiles</button>
        </div>
        
    </div>
  )
}

export default ManageProfile
