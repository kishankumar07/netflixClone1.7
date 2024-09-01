import netflixLogo from '../assets/images/netflix-logo.png'
import { FaSearch,FaBell,FaPowerOff } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import profileImage1 from '../assets/images/profileImage1.png'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../firebase'
import { AuthContext } from '../store/firebaseContext'
import { VscAccount } from "react-icons/vsc";

  //Defining an expected shape of profile variable, can be string or object

  interface Profile {
    name:string,
    asset:string
  }


const Navbar = () => {
    const authContext = useContext(AuthContext);
    if(!authContext){
      throw new Error('provide a value')
    }
    const {setUser} = authContext;
    const [profile,setProfile] = useState <Profile|string> 
    (profileImage1);
    const navigate = useNavigate();

    useEffect(()=>{
        const getLocalStorageItem =()=>{
           const localItem = localStorage.getItem('selectedProfile');
          //  console.log('when useEffect first runs:')
          //  console.log(localItem) 
          setProfile(localItem ? JSON.parse(localItem): profileImage1 );
        }  
        getLocalStorageItem() 
    },[]) 


    // When pressed on the avatar on Main page will navigates to the profiles page
    const handleClickToProfile = ()=>{
        navigate('/profiles')
    }

    const handleLogoutClick = async()=>{
        await logout();
        if(setUser) setUser(null)
        navigate('/login')
    }

    // conditional rendering based on whether data obtained from localStorage
    const navImageProfile = typeof profile === 'string' ? profileImage1 : profile.asset
   
  // These are the items that will be the nav-items displayed and for easiness wrapped inside an array
const navListItems = [{id:1,title:'Home'},{id:2,title:'TV Shows'},{id:3,title:'Movies'},{id:4,title:'News & Popular'},{id:5,title:'My List'},{id:6,title:'Browse by Language'}]

  return (
    <div className='bg-transparent text-slate-300 flex justify-around  w-full pt-6 absolute z-20 top-0'>
        <div className='flex gap-7 items-center'>
             {/* netflix logo */}
              <div>
                   <img src={netflixLogo} alt="" className='w-20 md:w-44 lg:w-40 xl:w-56'/>
             </div>

              {/* navbar items list */}
              <div className=' hidden lg:block xl:text-lg text-md text-nowrap'>
                <ul className='flex gap-4'>
                    {
                      navListItems.map((item)=>(
                          <li key={item.id}>{item.title}</li>
                      ))
                    }                  
                </ul>
              </div>
        </div>
        

        {/* Navbar right items */}
        <div className='flex gap-3 items-center '>
            <FaSearch className='text-sm  md:text-lg'/>
            <FaBell className='text-sm md:text-xl'/>
            <p className='text-sm md:text-lg'>{typeof profile === 'string' ? 'Kishan' : profile.name}</p>
            

            {/* nav profile part */}
            <div className='flex items-center relative'>
            <img  src={navImageProfile} alt="" className='size-8 rounded-lg lg:size-10 cursor-pointer'/>
              
               <IoMdArrowDropdown className='text-2xl'/>
               <div className='nav-profile-icon cursor-pointer flex flex-col items-start border'>
                    <p onClick={()=>{handleClickToProfile()}} className='mb-3 flex items-center gap-2 hover:underline'> <VscAccount/> Other User</p>
                    <p onClick={()=>{handleLogoutClick()}} className='flex gap-2 justify-center items-center hover:underline'> <FaPowerOff /> Sign out</p>
               </div>
            </div>
            {/* end of nav-profile part */}
           
        </div>

    </div>
  )
}

export default Navbar
