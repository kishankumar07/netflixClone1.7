import netflixLogo from '../assets/images/netflix-logo.png'
import { FaSearch,FaBell } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import profileImage1 from '../assets/images/profileImage1.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

  //Defining an expected shape of profile variable, can be string or object

  interface Profile {
    name:string,
    asset:string
  }


const Navbar = () => {

    const [profile,setProfile] = useState <Profile|string> 
    (profileImage1);
    const navigate = useNavigate();

    useEffect(()=>{
        const getLocalStorageItem =()=>{
           const localItem = localStorage.getItem('selectedProfile');
           console.log('when useEffect first runs:')
          //  console.log(localItem) 
          setProfile(localItem ? JSON.parse(localItem): profileImage1 );
        }  
        getLocalStorageItem() 
    },[]) 


    // When pressed on the avatar on Main page will navigates to the profiles page
    const handleClickToProfile = ()=>{
        navigate('/profiles')
    }

    // conditional rendering based on whether data obtained from localStorage
    const navImageProfile = typeof profile === 'string' ? profileImage1 : profile.asset
   
  // These are the items that will be the nav-items displayed and for easiness wrapped inside an array
const navListItems = [{id:1,title:'Home'},{id:2,title:'TV Shows'},{id:3,title:'Movies'},{id:4,title:'News & Popular'},{id:5,title:'My List'},{id:6,title:'Browse by Language'}]

  return (
    <div className='bg-transparent text-slate-300 flex justify-around  w-full pt-3 absolute z-20 top-0'>
        <div className='flex gap-7 items-center'>
             {/* netflix logo */}
              <div>
                   <img src={netflixLogo} alt="" className='w-20 md:w-44 lg:w-52'/>
             </div>

              {/* navbar items list */}
              <div className=' hidden lg:block text-lg text-nowrap'>
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
            <FaSearch className='text-sm lg:text-xl'/>
            <p className='text-sm lg:text-xl'>Children</p>
            <FaBell className='text-sm lg:text-xl'/>
            <div className='flex items-center'>
            <img onClick={()=>{handleClickToProfile()}} src={navImageProfile} alt="" className='size-8 rounded-lg lg:size-10 cursor-pointer'/>
              
               <IoMdArrowDropdown className='text-2xl'/>
            </div>
           
        </div>

    </div>
  )
}

export default Navbar
