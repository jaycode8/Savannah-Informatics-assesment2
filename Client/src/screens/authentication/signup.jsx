import React from "react";

const Signup = () => {
      return (
            <div className="bg-gray-50">
                  <div className="flex flex-row items-center py-8 pt-24 pb-16 sm:pt-8 mx-auto md:h-screen lg:py-0 w-full">

                  <div className="w-11/12 sm:w-3/4 lg:w-1/2 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mx-auto">

                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                          Create an account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" action="#">
                                          <div>
                                                <label
                                                      for="email"
                                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                      Your email
                                                </label>
                                                <input
                                                      type="email"
                                                      name="email"
                                                      id="email"
                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                      placeholder="name@company.com"
                                                      required=""
                                                />
                                          </div>
                                          <div>
                                                <label
                                                      for="password"
                                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                      Password
                                                </label>
                                                <input
                                                      type="password"
                                                      name="password"
                                                      id="password"
                                                      placeholder="••••••••"
                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                      required=""
                                                />
                                          </div>
                                          <div>
                                                <label
                                                      for="confirm-password"
                                                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                      Confirm password
                                                </label>
                                                <input
                                                      type="confirm-password"
                                                      name="confirm-password"
                                                      id="confirm-password"
                                                      placeholder="••••••••"
                                                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                      required=""
                                                />
                                          </div>
                                          <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                      <input
                                                            id="terms"
                                                            aria-describedby="terms"
                                                            type="checkbox"
                                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                            required=""
                                                      />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                      <label
                                                            for="terms"
                                                            className="font-light text-gray-500 dark:text-gray-300"
                                                      >
                                                            I accept the{" "}
                                                            <a
                                                                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                                  href="#"
                                                            >
                                                                  Terms and Conditions
                                                            </a>
                                                      </label>
                                                </div>
                                          </div>
                                          <button
                                                type="submit"
                                                className="bg-gray-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                          >
                                                Create an account
                                          </button>
                                          <hr className="mt-6 border-b-1 border-gray-400" />            
                                          <div className="rounded-t mb-0 px-0 py-2">
                                                <span className="text-gray-600 text-sm font-bold mb-2">OR</span>
                                                <div className="btn-wrapper text-center">
                                                      <button
                                                            className="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                                                            type="button"
                                                            style={{ transition: "all .15s ease" }}
                                                      >
                                                            <img
                                                                  alt="..."
                                                                  className="w-5 mr-1"
                                                                  src="src/assets/google.svg"
                                                            />
                                                            Sign up with Google
                                                      </button>
                                                </div>
                                                
                                          </div>
                                          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Already have an account?{" "}
                                                <a
                                                      href="/signin"
                                                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                                >
                                                      Login here
                                                </a>
                                          </p>
                                    </form>
                              </div>
                        </div>
                        <div className="w-1/2 h-full hidden lg:block">
                              <img src="/images/auth.jpg" className="object-cover w-full h-full"/>
                        </div>
                  </div>
            </div>
      );
};

export default Signup;
