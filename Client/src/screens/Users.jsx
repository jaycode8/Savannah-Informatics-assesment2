import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

      const handleClick = () =>{
            location.href = "/user/1"
      }

      return (
            <div className="relative overflow-x-auto sm:rounded-lg m-2 sm:m-10 my-14 lg:m-28">
                  <h1 className='text-2xl uppercase mb-4 text-center font-bold'>List of Users</h1>

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

export default Users