import React from 'react';
import { FaImages } from "react-icons/fa"
import { BiCloudUpload } from "react-icons/bi"
import { AiFillLock } from "react-icons/ai"

const About = () => {
      return (
            <div>
                  <section className="pb-20 bg-gray-300 -mt-24">
                        <div className="container mx-auto px-4">
                              <div className="flex flex-wrap">
                                    <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div className="px-4 py-5 flex-auto">
                                                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full cursor-pointer">
                                                            <FaImages className='text-2xl' color="#4CAF50" />
                                                      </div>
                                                      <h6 className="text-xl font-semibold">Showcase Your Memories</h6>
                                                      <p className="mt-2 mb-4 text-gray-600">
                                                            Capture your most cherished moments and organize them into personalized albums. With our responsive design, your photos look amazing on any device.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="w-full md:w-4/12 px-4 text-center">
                                          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div className="px-4 py-5 flex-auto">
                                                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full cursor-pointer">
                                                            <BiCloudUpload className='text-2xl' color="#2196F3" />
                                                      </div>
                                                      <h6 className="text-xl font-semibold">
                                                            Seamless Photo Uploads
                                                      </h6>
                                                      <p className="mt-2 mb-4 text-gray-600">
                                                            Upload photos in seconds and share your memories with friends and family. Our platform ensures every photo shines, no matter the screen size.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                                <div className="px-4 py-5 flex-auto">
                                                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full cursor-pointer">
                                                            <AiFillLock className='text-2xl' color="#FF5722" />
                                                      </div>
                                                      <h6 className="text-xl font-semibold">
                                                            Your Memories, Secure
                                                      </h6>
                                                      <p className="mt-2 mb-4 text-gray-600">
                                                            Your albums are stored securely, so you never have to worry about losing your special moments. Relive them anytime, anywhere.
                                                      </p>
                                                </div>
                                          </div>
                                    </div>
                              </div>


                              <div className="flex flex-wrap items-center my-32">
                                    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                          <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                                Why Choose Us?
                                          </h3>
                                          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                                We believe that great experiences begin with strong relationships. When you choose to work with us, you’re not just getting a service, you’re gaining a reliable partner.
                                          </p>
                                          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                                Our team is committed to delivering exceptional results with personalized attention and unwavering support. We take the time to understand your goals and provide tailored solutions that make a real impact. With our focus on quality, efficiency, and long-term collaboration, we ensure that every step of the journey is seamless and enjoyable. Trust us to bring your vision to life, with professionalism and care at every turn.
                                          </p>
                                    </div>

                                    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg ">
                                                <img
                                                      alt="..."
                                                      src="/images/why_us.jpg"
                                                      className="w-full align-middle rounded-lg h-full"
                                                />
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </section>

                  <section className="relative py-20" id="about">
                        <div
                              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                              style={{ height: "80px" }}
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
                                          className="text-white fill-current"
                                          points="2560 0 2560 100 0 100"
                                    ></polygon>
                              </svg>
                        </div>

                        <div className="container mx-auto px-4">
                              <div className="items-center flex flex-wrap">
                                    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                                          <img
                                                alt="..."
                                                className="max-w-full rounded-lg shadow-lg"
                                                src="/images/diff.jpg"
                                          />
                                    </div>
                                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                                          <div className="md:pr-12 ">
                                                <h3 className="text-3xl font-semibold">
                                                      Experience the Difference
                                                </h3>
                                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                                      At the heart of our work is a passion for creating meaningful experiences. We strive to go beyond expectations, offering not only high-quality services but also a truly collaborative and supportive environment.
                                                </p>
                                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                                From the moment you reach out to us, you’ll notice our commitment to understanding your needs and delivering solutions that are both innovative and effective. Our goal is to make your journey as smooth and enjoyable as possible, ensuring that every interaction is a positive one. With us, you’ll find more than just a service, you’ll find a partner who cares about your success.
                                                </p>
                                                
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default About;