import { Link } from "react-router-dom";
import Navbar2 from "../components/navbar2/Navbar2"
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { authContex } from "../components/authProvider/AuthProvider";

const Login = () => {
    const { loginUser, setUser } = useContext(authContex);
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((result) => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message)
            })

    }
    return (
        <div className="h-screen">
            <div>
                <Navbar2></Navbar2>
            </div>
            <div className="px-2 md:px-6 lg:px-[80px] mt-24 lg:mt-16 flex justify-center">
                <div className="w-[90vw] lg:w-[30vw] ">
                    {/* form starts */}
                    <form onSubmit={handleLogin} className="card-body border-[1px] border-[#ABABAB] px-13 rounded-xl">
                        <h1 className="text-2xl font-bold mb-8" >Login</h1>
                        <div className="form-control">
                            <input name="email" type="email" placeholder="username or email" className="text-black font-medium border-b-[2px] pb-2 outline-none" required />
                        </div>
                        <div className="form-control mt-6">
                            <input name="password" type="password" placeholder="password" className="border-b-[2px] outline-none text-black font-medium pb-2" required />
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="space-x-1">
                                <input type="checkbox" name="check" id="check" />
                                <span>Remember Me</span>
                            </label>

                            <label className="label">
                                <Link to='/' className="text-[#f9a51a]">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn bg-[#f9a51a] font-medium">Login</button>
                        </div>
                        <div className="text-center">
                            <h1>Didn't have an account? <Link to='/signUp' className="text-[#f9a51a] font-medium ">Creat an account</Link> </h1>
                        </div>
                    </form>
                    <div className=" mt-5 px-10">
                        <div className="flex items-center gap-4">
                            <div className="border-b-[1px] border-[#ABABAB] h-[1px] w-full">

                            </div>
                            <div>
                                <h1 className="font-medium">Or</h1>
                            </div>
                            <div className="border-b-[1px] border-[#ABABAB] h-[1px] w-full">

                            </div>
                        </div>
                        <div className="mt-3">
                            <div>
                                <button className="text-black flex items-center gap-16 px-3 font-medium border-[1px] py-2 border-[#ABABAB] rounded-full w-full hover:bg-[#f9a51a] hover:text-white"><FaFacebook className="text-3xl text-blue-600"></FaFacebook>  Login with Facebook</button>
                            </div>
                            <div className="mt-4">
                                <button className="text-black flex items-center gap-16 px-3 font-medium border-[1px] py-2 border-[#ABABAB] rounded-full w-full hover:bg-[#f9a51a] hover:text-white"><FcGoogle className="text-3xl text-blue-600"></FcGoogle>  Login with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;