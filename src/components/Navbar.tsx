import netflixLogo from '../assets/images/netflix-logo.png'
import { FaSearch,FaBell } from 'react-icons/fa'
import { IoMdArrowDropdown } from 'react-icons/io'
import profileImage1 from '../assets/images/profileImage1.png'

const Navbar = () => {

const navListItems = [{id:1,title:'Home'},{id:2,title:'TV Shows'},{id:3,title:'Movies'},{id:4,title:'News & Popular'},{id:5,title:'My List'},{id:6,title:'Browse by Language'}]

  return (
    <div className='bg-transparent text-slate-300 flex justify-around  w-full pt-3 absolute z-20 top-0'>
        <div className='flex gap-7 items-center'>
             {/* netflix logo */}
              <div>
                   <img src={netflixLogo} alt="" className='w-28'/>
             </div>

              {/* navbar items list */}
              <div className=' hidden md:block text-sm '>
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
        <div className='flex gap-3 items-center'>
            <FaSearch/>
            <p>Children</p>
            <FaBell/>
            <div className='flex items-center'>
               <img src={profileImage1} alt="" className='size-10 rounded-lg'/>
               <IoMdArrowDropdown className='text-3xl'/>
            </div>
           
        </div>

    </div>
  )
}

export default Navbar
