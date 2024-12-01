import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const api_url = import.meta.env.VITE_API_URL;

const Signin = () => {
    const [actor, setActor] = useState({
        username: "",
        password: "",
    });
    const [res, setRes] = useState({});
    const handleChange = ({ currentTarget: input }) => {
        setActor({ ...actor, [input.name]: input.value });
    };
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post(`${api_url}/auth`, actor);
            setRes(res.data);
            localStorage.setItem("access_token", res.data.data.access_token);
            if (res.data.success) {
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            }
        } catch (error) {
            if (error.response) {
                setRes(error.response.data);
            }
        }
    };
    return (
        <div className="bg-gray-50">
            <div className={`${res.message ? "block" : "hidden"} absolute top-4 right-4`}>
                <div id="alert-3" className={`flex items-center p-4 mb-4 ${res.success ? "text-green-800 dark:text-green-400" : "text-red-800 dark:text-red-400"}  rounded-lg bg-green-50 dark:bg-gray-800 `} role="alert">
                    <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <div className="ms-3 text-sm font-medium">{res.message}</div>
                    <button type="button" className={`ms-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:hover:bg-gray-700 ${res.success ? "bg-green-50 text-green-500 dark:text-green-400 hover:bg-green-200" : "bg-red-50 text-red-500 dark:text-red-400 hover:bg-red-200"}`} data-dismiss-target="#alert-3" aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-row items-center py-8 pt-24 pb-16 sm:pt-8 mx-auto md:h-screen lg:py-0 w-full">
                <div className="w-1/2 h-full hidden lg:block">
                    <img src="/images/auth.jpg" className="object-cover w-full h-full" />
                </div>
                <div className="w-11/12 sm:w-3/4 lg:w-1/2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 mx-auto">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Login</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    User Name
                                </label>
                                <input type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none" placeholder="janedoe@gmail.com" required onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 outline-none" required onChange={handleChange} />
                            </div>
                            <button type="submit" className="bg-gray-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                Log In
                            </button>
                            <hr className="mt-6 border-b-1 border-gray-400" />
                            <div className="rounded-t mb-0 px-0 py-2">
                                <span className="text-gray-600 text-sm font-bold mb-2">OR</span>
                                <div className="btn-wrapper text-center">
                                    <button className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style={{ transition: "all .15s ease" }}>
                                        <img alt="..." className="w-5 mr-1" src="src/assets/google.svg" />
                                        Sign in with Google
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm font-light text-gray-500">
                                Don't have an account?{" "}
                                <a href="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Register here
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
