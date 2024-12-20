import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
      return (
            <footer className="relative bg-gray-300 pt-8 pb-6" id="contacts">
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
                                    className="text-gray-300 fill-current"
                                    points="2560 0 2560 100 0 100"
                              ></polygon>
                        </svg>
                  </div>
                  <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                              <div className="w-full lg:w-6/12 px-4">
                                    <h4 className="text-xl lg:text-3xl font-semibold">
                                          Let's keep in touch!
                                    </h4>
                                    <h5 className="lg:text-lg mt-0 mb-2 text-gray-700">
                                          Follow us on social media for the latest updates, exclusive offers, and behind the scenes insights. Join the conversation, share your experiences, and be part of our journey. Let’s connect on:
                                    </h5>
                                    <div className="mt-6 flex gap-6">
                                          
                                          <a
                                                href="https://facebook.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-lg text-[#1877F2] hover:text-[#166fe5] transition-colors"
                                          >
                                                <FaFacebookF size={24}/>
                                          </a>
                                          <a
                                                href="https://instagram.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-lg text-[#E4405F] hover:text-[#d52d5e] transition-colors"
                                          >
                                                <FaInstagram size={24} />
                                          </a>
                                          <a
                                                href="https://twitter.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-lg text-[#1DA1F2] hover:text-[#1991db] transition-colors"
                                          >
                                                <FaTwitter size={24} />
                                          </a>
                                          <a
                                                href="https://linkedin.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center w-12 h-12 rounded-full bg-white shadow-lg text-[#0077B5] hover:text-[#005f8c] transition-colors"
                                          >
                                                <FaLinkedinIn size={24} />
                                          </a>
                                    </div>
                              </div>
                              <div className="w-full pt-8 lg:pt-0 lg:w-6/12 px-4">
                                    <div className="flex flex-wrap items-top mb-6">
                                          <div className="w-full lg:w-4/12 px-4 ml-auto">
                                                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                                                      Useful Links
                                                </span>
                                                <ul className="list-unstyled">
                                                      <li>
                                                            <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                                                  to="/">Home
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                                                  to="/users">Users
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                                                  href="/albums">Albums
                                                            </Link>
                                                      </li>

                                                </ul>
                                          </div>
                                          <div className="w-full lg:w-4/12 px-4">
                                                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                                                      Other Resources
                                                </span>
                                                <ul className="list-unstyled">
                                                      <li>
                                                            <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                                                  href="#">Terms & Conditions
                                                            </Link>
                                                      </li>
                                                      <li>
                                                            <Link className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                                                  href="#">Privacy Policy
                                                            </Link>
                                                      </li>
                                                </ul>

                                          </div>
                                    </div>
                              </div>
                        </div>
                        <hr className="my-6 border-gray-400" />
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-gray-600 font-semibold py-1">
                                          Copyright © {new Date().getFullYear()}{" "}
                                          <a
                                                href="/"
                                                className="text-gray-600 hover:text-gray-900"
                                          >
                                                PixKeep
                                          </a>.
                                    </div>
                              </div>
                        </div>
                  </div>
            </footer>
      );
}