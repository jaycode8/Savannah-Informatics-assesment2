import { useState } from 'react';
import { BsPlus } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";

const Albums = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);

      const toggleModal = () => {
            setIsModalOpen(!isModalOpen);
      };
      const handleClick = () =>{
            location.href = "/album/1"
      }
      return (
            <div className="relative overflow-x-auto sm:rounded-lg m-2 sm:m-10 my-14 lg:m-28">
                  <div id="default-modal" tabIndex="-1" aria-hidden={!isModalOpen} className={`${isModalOpen ? "flex" : "hidden"} bg-[rgba(0,0,0,0.5)] overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen`}>
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
                              <div className=" relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                New Album
                                          </h3>
                                          <LiaTimesSolid onClick={toggleModal} type="button" className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" />
                                    </div>
                                    <form className="my-4 p-5 mx-auto">
                                          <div className="relative z-0 w-full mb-5 group">
                                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                          </div>
                                          <div className="relative z-0 w-full mb-5 group">
                                                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                          </div>
                                          <div className="relative z-0 w-full mb-5 group">
                                                <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                          </div>
                                          <div className="grid md:grid-cols-2 md:gap-6">
                                                <div className="relative z-0 w-full mb-5 group">
                                                      <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                      <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-5 group">
                                                      <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                      <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                                </div>
                                          </div>
                                          <div className="grid md:grid-cols-2 md:gap-6">
                                                <div className="relative z-0 w-full mb-5 group">
                                                      <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                      <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                                </div>
                                                <div className="relative z-0 w-full mb-5 group">
                                                      <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                                      <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                                                </div>
                                          </div>
                                          <div className="flex items-center justify-center w-full">
                                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                            </svg>
                                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                      </div>
                                                      <input id="dropzone-file" type="file" className="hidden" />
                                                </label>
                                          </div>
                                          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 rounded-sm mt-2 text-sm w-full sm:w-auto px-8 py-2 text-center">Submit</button>
                                    </form>

                              </div>
                        </div>
                  </div>
                  <h1 className='text-2xl uppercase mb-4 text-center font-bold'>List of Albums</h1>

                  <button onClick={toggleModal} type="button" className="absolute top-0 right-0 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 rounded-md text-sm px-4 gap-2 py-2 text-center inline-flex items-center justify-between me-2">
                        <BsPlus className='text-white text-xl' />
                        NEW
                  </button>
                  <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs uppercase bg-gray-700 text-white">
                              <tr>
                                    <th scope="col" className="px-6 py-3">
                                          Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                          Action
                                    </th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr className="bg-white border-b hover:bg-gray-200 hover:cursor-pointer" onClick={()=> handleClick()}>
                                    <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Apple MacBook Pro 17"
                                    </td>
                                    <td className="px-6 py-4">
                                          Silver
                                    </td>
                                    <td className="px-6 py-4">
                                          Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                          $2999
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Microsoft Surface Pro
                                    </th>
                                    <td className="px-6 py-4">
                                          White
                                    </td>
                                    <td className="px-6 py-4">
                                          Laptop PC
                                    </td>
                                    <td className="px-6 py-4">
                                          $1999
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Magic Mouse 2
                                    </th>
                                    <td className="px-6 py-4">
                                          Black
                                    </td>
                                    <td className="px-6 py-4">
                                          Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                          $99
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Apple Watch
                                    </th>
                                    <td className="px-6 py-4">
                                          Black
                                    </td>
                                    <td className="px-6 py-4">
                                          Watches
                                    </td>
                                    <td className="px-6 py-4">
                                          $199
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Apple iMac
                                    </th>
                                    <td className="px-6 py-4">
                                          Silver
                                    </td>
                                    <td className="px-6 py-4">
                                          PC
                                    </td>
                                    <td className="px-6 py-4">
                                          $2999
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Apple AirPods
                                    </th>
                                    <td className="px-6 py-4">
                                          White
                                    </td>
                                    <td className="px-6 py-4">
                                          Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                          $399
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          iPad Pro
                                    </th>
                                    <td className="px-6 py-4">
                                          Gold
                                    </td>
                                    <td className="px-6 py-4">
                                          Tablet
                                    </td>
                                    <td className="px-6 py-4">
                                          $699
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Magic Keyboard
                                    </th>
                                    <td className="px-6 py-4">
                                          Black
                                    </td>
                                    <td className="px-6 py-4">
                                          Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                          $99
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          Smart Folio iPad Air
                                    </th>
                                    <td className="px-6 py-4">
                                          Blue
                                    </td>
                                    <td className="px-6 py-4">
                                          Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                          $79
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                              <tr className="bg-white border-b hover:bg-gray-50">

                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                          AirTag
                                    </th>
                                    <td className="px-6 py-4">
                                          Silver
                                    </td>
                                    <td className="px-6 py-4">
                                          Accessories
                                    </td>
                                    <td className="px-6 py-4">
                                          $29
                                    </td>
                                    <td className="px-6 py-4">
                                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                              </tr>
                        </tbody>
                  </table>
                  <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold">1-10</span> of <span className="font-semibold">1000</span></span>
                        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                              <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                              </li>
                              <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                              </li>
                              <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                              </li>
                              <li>
                                    <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-70">3</a>
                              </li>
                              <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                              </li>
                              <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                              </li>
                              <li>
                                    <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                              </li>
                        </ul>
                  </nav>
            </div>

      );
}

export default Albums;