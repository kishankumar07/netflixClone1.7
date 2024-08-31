import bannerBackgroundImage from "../assets/images/netflix-logo.png";
const Login = () => {
  return (
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
          className="w-40 h-12
                "
        />
      </div>

      {/* This part is for the input container */}
      <div className="absolute inset-0 flex justify-center items-center ">
        <div className="h-auto w-full max-w-md p-16 bg-black bg-opacity-80 flex flex-col rounded-md">
          <h1 className="text-white text-3xl mb-5 font-bold">Sign Up</h1>
          <div>
            <input type="text" placeholder="Your name" className="login-fields" />
            <input type="text" className="login-fields" placeholder="Email" />
            <input placeholder="Password" type="text" className="login-fields !mb-7" />
            <button className="hover:!bg-red-600 login-fields w-full !bg-red-700 !text-white !mb-3">
              Sign Up
            </button>
          </div>
          <div className="text-white text-[12px] flex justify-between mb-14">
            <div className="flex gap-1">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <span>Need Help?</span>
          </div>
          <div className="flex gap-2">
            <p className="text-gray-500">Already have account?</p>
            <span className="text-white cursor-pointer">Sign In now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
