import React from "react";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";
import About from "./About";

const Landing = () => {
      return (
            <main>
                  <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
                        style={{
                              minHeight: "75vh"
                        }}>
                        <div className="absolute top-0 w-full h-full bg-center bg-cover"
                              style={{
                                    backgroundImage: "url('/images/home.jpg')"
                              }}>
                              <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                        </div>
                        <div className="container relative mx-auto">
                              <div className="items-center flex flex-wrap">
                                    <div className="w-full px-4 ml-auto mr-auto text-center">
                                          <div className="pr-12">
                                                <h1 className="text-white font-semibold text-2xl sm:text-5xl">
                                                      Create, Share, and Cherish Memories.
                                                </h1>
                                                <p className="mt-4 sm:text-lg text-gray-300">
                                                      Welcome to the ultimate platform for capturing and sharing your cherished memories! Here, you can create personalized albums, upload photos that look stunning on any device, and organize your favorite moments effortlessly. 
                                                      Whether you're preserving family milestones, travel adventures, or everyday snapshots, our user-friendly site makes it simple to showcase your memories with style and ease.
                                                </p>
                                          </div>
                                    </div>

                              </div>
                        </div>
                        <div
                              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                              style={{ height: "70px" }}
                        >
                              <svg
                                    className="absolute bottom-0 overflow-hidden"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                              >
                                    <polygon
                                          className="text-gray-300 fill-current"
                                          points="2560 0 2560 100 0 100"
                                    ></polygon>
                              </svg>
                        </div>
                  </div>
                  <About />
            </main>
      );
}

export default Landing;