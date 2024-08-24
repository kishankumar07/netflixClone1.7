import { IoIosArrowDown, IoMdGlobe } from "react-icons/io"

const Footer = () => {
  return (

    <div className="bg-inherit text-gray-400 p-4 flex flex-col items-center">

            <div className="w-full bg-gray-700 h-px mb-4 "></div>

            <p className="mb-4 text-center md:mr-[500px]">Questions? Call 000-800-040-1843</p>

        <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-16 text-center">

        <div className="space-y-2">
               
                <ul className="space-y-1">
                    <li className="hover:underline cursor-pointer">FAQ</li>
                    <li className="hover:underline cursor-pointer">Investor Relations</li>
                    <li className="hover:underline cursor-pointer">Privacy</li>
                    <li className="hover:underline cursor-pointer">Speed test</li>
                </ul>
          </div>
       
          <div className="space-y-2">
               
                <ul className="space-y-1">
                    <li className="hover:underline cursor-pointer">FAQ</li>
                    <li className="hover:underline cursor-pointer">Jobs</li>
                    <li className="hover:underline cursor-pointer">Cookie Preferences</li>
                    <li className="hover:underline cursor-pointer">Legal Notices</li>
                </ul>
          </div>
          <div className="space-y-2">
            <ul className="space-y-1">
                <li className="hover:underline cursor-pointer">Account</li>
                <li className="hover:underline cursor-pointer">Ways to Watch</li>
                <li className="hover:underline cursor-pointer">Corporate Information</li>
                <li className="hover:underline cursor-pointer">Only on Netflix</li>
            </ul>
          </div>
          <div className="space-y-2">
            <ul className="space-y-1">
                <li className="hover:underline cursor-pointer">Media Center</li>
                <li className="hover:underline cursor-pointer">Terms of Use</li>
                <li className="hover:underline cursor-pointer">Contact Us</li>
            </ul>
          </div>
          
        </div>
        <div className="mt-6 md:mr-[650px] ">
            <button className="bg-zinc-800 text-white rounded p-2 border flex items-center gap-1"> <IoMdGlobe/> English <IoIosArrowDown/> </button>
            <p className="mt-2">Netflix India</p>
        </div>
       

    </div>
  )
}

export default Footer
