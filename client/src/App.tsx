
import "./App.css";

function App() {

  return (
    <main className="h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-[45%] h-full p-8 sm:p-14 md:p-18">
        <p className="text-sm font-bold">Untitled UI</p>
        
        <div className="mt-10">
          <h1 className="text-2xl font-bold">Log in</h1>
          <p className="text-[10px] text-gray-500 mt-1">Welcome back! Please enter your details.</p>

          <form action="">
            <div className="mt-4">
              <label htmlFor="email" className="text-[10px] text-gray-600 font-semibold block">Email</label>
              <input type="email" name="email" placeholder="Enter your email" className="text-[10px] text-gray-900 border border-gray-300 px-2 py-1.5 mt-1.5 rounded-sm w-full" />
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="text-[10px] text-gray-600 font-semibold block">Password</label>
              <input type="password" name="password" placeholder="........" className="text-[10px] text-gray-900 border border-gray-300 px-2 py-1.5 mt-1.5 rounded-sm w-full placeholder:text-2xl" />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="inline-flex items-center">
                {/* Checkbox */}
                <label className="flex items-center cursor-pointer relative">
                  <input type="checkbox" className="peer size-2.5 cursor-pointer transition-all appearance-none rounded-xs shadow hover:shadow-md border border-slate-300 checked:bg-purple-600 checked:border-purple-600" id="check" />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-2" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </label>
                <label className="cursor-pointer text-[9px] text-gray-600 font-semibold ml-1.5" htmlFor="check">
                  Remember for 30 days
                </label>
              </div>
              <a href="" className="cursor-pointer text-[9px] text-[#7f56da] font-bold">Forgot Password</a>
            </div>

            {/* Sign In Button */}
            <div className="mt-3">
              <input type="button" value="Sign in" className="bg-[#7f56da] text-white text-[10px] font-semibold px-2 py-1.5 w-full rounded-sm cursor-pointer shadow-md" />
            </div>

            {/* Sign In with google */}
            <div className="mt-3 flex justify-center font-bold px-2 py-1.5 w-full border border-gray-300 rounded-sm cursor-pointer shadow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" id="google">
                <path fill="#4285F4" d="M23.761 12.273c0-.819-.067-1.634-.207-2.441H12.237v4.62h6.48a5.55 5.55 0 0 1-2.395 3.646v3.001h3.868c2.265-2.085 3.571-5.174 3.571-8.826z"></path>
                <path fill="#34A853" d="M12.237 24c3.238 0 5.966-1.062 7.953-2.898l-3.868-3.001c-1.077.73-2.462 1.147-4.085 1.147-3.129 0-5.786-2.109-6.736-4.952H1.518v3.092A11.993 11.993 0 0 0 12.237 24z"></path>
                <path fill="#FBBC04" d="M5.502 14.297a7.192 7.192 0 0 1 0-4.593V6.612H1.518a12.001 12.001 0 0 0 0 10.778l3.984-3.093z"></path>
                <path fill="#EA4335" d="M12.237 4.752a6.518 6.518 0 0 1 4.602 1.799l3.427-3.424A11.545 11.545 0 0 0 12.237.001c-4.535 0-8.684 2.56-10.72 6.611l3.984 3.092c.95-2.843 3.608-4.952 6.736-4.952z"></path>
              </svg>
              <input type="button" value="Sign in with Google" className=" text-gray-700 text-[10px] ml-2.5" />
            </div>
          </form>
          <div className="mt-4.5 text-center">
            <p className="text-[9px] text-gray-500 font-semibold tracking-tight">Don't have an account? <a href="" className="text-[#7f56da] font-bold"> Sign up</a></p>
          </div>
        </div>
      </div>
      {/* Right Side - Placeholder */}
      <div className="w-[55%] bg-[#f5f5f5]">
        
      </div>

    </main>
  );
}

export default App;



{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" id="google">
  <path fill="#4285F4" d="M23.761 12.273c0-.819-.067-1.634-.207-2.441H12.237v4.62h6.48a5.55 5.55 0 0 1-2.395 3.646v3.001h3.868c2.265-2.085 3.571-5.174 3.571-8.826z"></path>
  <path fill="#34A853" d="M12.237 24c3.238 0 5.966-1.062 7.953-2.898l-3.868-3.001c-1.077.73-2.462 1.147-4.085 1.147-3.129 0-5.786-2.109-6.736-4.952H1.518v3.092A11.993 11.993 0 0 0 12.237 24z"></path>
  <path fill="#FBBC04" d="M5.502 14.297a7.192 7.192 0 0 1 0-4.593V6.612H1.518a12.001 12.001 0 0 0 0 10.778l3.984-3.093z"></path>
  <path fill="#EA4335" d="M12.237 4.752a6.518 6.518 0 0 1 4.602 1.799l3.427-3.424A11.545 11.545 0 0 0 12.237.001c-4.535 0-8.684 2.56-10.72 6.611l3.984 3.092c.95-2.843 3.608-4.952 6.736-4.952z"></path>
</svg> */}
