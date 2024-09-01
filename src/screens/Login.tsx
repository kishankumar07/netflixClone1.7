import { useState } from "react";
import bannerBackgroundImage from "../assets/images/netflix-logo.png";
import { signup,login } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()
  const [signinState,setSigninState] = useState('Sign In')
  const [name,setName]= useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loading,setLoading] = useState(false)

  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      setLoading(true);
      if(signinState === 'Sign In'){
          await login(email,password);
          navigate('/')
      }else{
        await signup(name,email,password)
        setSigninState('Sign In')
      }
      setLoading(false)
      // navigate('/')
  }



  return (

    loading ? 
      <div className="h-screen  flex justify-center w-full bg-black items-center">
        <img src="../../netflix-spinner.gif" alt="" className="w-60"/>
        
      </div>
      :

    <div className="relative h-screen w-screen">
      <img
        src="../../bannerBackgroundImage.jpg"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute top-3 left-32">
        <img
          src={bannerBackgroundImage}
          alt=""
          className="w-40 h-12"
        />
      </div>

      {/* This part is for the input container */}
      <div className="absolute inset-0 flex justify-center items-center m-7">
        <div className="h-auto w-full max-w-md p-16 bg-black bg-opacity-80 flex flex-col rounded-md">
          <h1 className="text-white text-3xl mb-5 font-bold">{signinState}</h1>

          {/* form element */}
          <div>
            <form>
                 {/* Conditional check for sign in / sign up state */}
            {signinState === 'Sign Up' ? 
             <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Your name" className="login-fields" /> : <></>}
           

            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" className="login-fields" placeholder="Email" />
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password" className="login-fields !mb-7" />
            <button className="hover:!bg-red-600 login-fields w-full !bg-red-700 !text-white !mb-3" onClick={(e)=>{handleSubmit(e)}} type="submit">
              {signinState}
            </button>
            </form>
         </div>

          <div className="text-white text-[14px] flex justify-between mb-14">
            <div className="flex gap-1">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <span>Need Help?</span>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-500">{signinState === 'Sign In'?'New to Netflix?' : 'Already have account?'}</p>
            <span onClick={()=>{setSigninState(`${signinState === 'Sign In' ? 'Sign Up' : 'Sign In'}`)}} className="text-white cursor-pointer">{signinState === 'Sign In' ?'Sign Up':'Sign In'} now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
