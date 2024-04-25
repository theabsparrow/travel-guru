import { Link, useNavigate } from "react-router-dom";
import Navbar2 from "../components/navbar2/Navbar2"
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { authContex } from "../components/authProvider/AuthProvider";
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {
    const {creatUser,setUser} = useContext(authContex)
    const [error, setError] = useState(null)
    const navigateLogin = useNavigate()


    const handleCreatUser =(e) => {
        e.preventDefault();
            const firstName = e.target.firstName.value;
            const lastName = e.target.lastName.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.confirmPassword.value;
            const checkTerms = e.target.checkbox.checked;
            console.log({firstName,lastName,email,password,confirmPassword,checkTerms})

            creatUser(email, password)
            .then( (result) => {
                setUser(result.user)
                sendEmailVerification(result.user)
                .then( () => {
                    alert ("please verify your email at first then login again")
                })
            })
            navigateLogin('/login')

            .catch( (error) => {
                setError(error.message)
            })

    }
    return (
        <div className="h-screen">
            <div>
                <Navbar2></Navbar2>
            </div>
            <div className="px-2 md:px-6 lg:px-[80px] mt-24 lg:mt-8 flex justify-center">
                <div className="w-[90vw] lg:w-[30vw] ">
                    {/* form starts */}
                    <form onSubmit={handleCreatUser} className="card-body border-[1px] border-[#ABABAB] px-13 rounded-xl">
                        <h1 className="text-2xl font-bold" >Sign Up</h1>
                        <div className="form-control">
                            <input name="firstName" type="text" placeholder="first name" className="text-black border-b-[1px] pb-1 outline-none" required />
                        </div>
                        <div className="form-control mt-3">
                            <input name="lastName" type="text" placeholder="last name" className="text-black border-b-[2px] pb-1 outline-none" required />
                        </div>
                        <div className="form-control mt-3">
                            <input name="email" type="email" placeholder=" email" className="text-black border-b-[2px] pb-1 outline-none" required />
                        </div>
                        <div className="form-control mt-3">
                            <input name="password" type="password" placeholder="password" className="border-b-[2px] outline-none text-black pb-1" required />
                        </div>
                        <div className="form-control mt-3">
                            <input name="confirmPassword" type="password" placeholder="confirm password" className="border-b-[2px] outline-none text-black pb-1" required />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="checkbox" id="checkbox" /> please accept our terms and condition
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn bg-[#f9a51a] font-medium">Sign Up</button>
                        </div>
                        <div className="text-center">
                            <h1>Already have an account? <Link to='/login' className="text-[#f9a51a] font-medium ">Login </Link> </h1>
                        </div>
                    </form>
                    <div className="mt-5 md:mt-8 lg:mt-3 px-10">
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

export default SignUp;