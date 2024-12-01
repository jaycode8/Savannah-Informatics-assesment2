import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
const api_url = import.meta.env.VITE_API_URL;

const Albums = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleClick = (album_id) => {
        location.href = `/album/${album_id}`;
    };
    const token = localStorage.getItem("access_token");

    const fetchAlbums = async () => {
        try {
            const albums_list = await axios.get(`${api_url}/albums`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAlbums(albums_list.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAlbums();
    }, []);

    const totalPages = Math.ceil(albums.length / rowsPerPage);

    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const currentAlbums = albums.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="relative overflow-x-auto sm:rounded-lg m-2 sm:m-10 my-14 lg:m-28">
            <div id="default-modal" tabIndex="-1" aria-hidden={!isModalOpen} className={`${isModalOpen ? "flex" : "hidden"} bg-[rgba(0,0,0,0.5)] overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-screen`}>
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className=" relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">New Album</h3>
                            <LiaTimesSolid onClick={toggleModal} type="button" className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" />
                        </div>
                        <form className="my-4 p-5 mx-auto">
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label
                                    for="floating_email"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Email address
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label
                                    for="floating_password"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label
                                    for="floating_repeat_password"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Confirm password
                                </label>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label
                                        for="floating_first_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        First name
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label
                                        for="floating_last_name"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Last name
                                    </label>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-5 group">
                                    <input
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        name="floating_phone"
                                        id="floating_phone"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        for="floating_phone"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Phone number (123-456-7890)
                                    </label>
                                </div>
                                <div className="relative z-0 w-full mb-5 group">
                                    <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label
                                        for="floating_company"
                                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Company (Ex. Google)
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 rounded-sm mt-2 text-sm w-full sm:w-auto px-8 py-2 text-center">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl uppercase mb-4 text-center font-bold">List of Albums</h1>

            <button onClick={toggleModal} type="button" className="absolute top-0 right-0 text-white bg-[#121212] rounded-md text-sm px-4 gap-2 py-2 text-center inline-flex items-center justify-between me-2">
                <BsPlus className="text-white text-xl" />
                NEW
            </button>
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs uppercase bg-gray-700 text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Album title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Owner
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Created At
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentAlbums.map((album) => (
                        <tr className="bg-white border-b hover:bg-gray-200 hover:cursor-pointer" onClick={() => handleClick(`${album._id}`)}>
                            <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                {album.title}
                            </td>
                            <td className="px-6 py-4">{ album.user.username }</td>
                            <td className="px-6 py-4">{new Date(album.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
                <span className="text-sm font-normal text-gray-500">
                    Showing{" "}
                    <span className="font-semibold">
                        {startIndex + 1}-{Math.min(endIndex, albums.length)}
                    </span>{" "}
                    of <span className="font-semibold">{albums.length}</span>
                </span>
                <ul className="inline-flex -space-x-px text-sm h-8">
                    <li>
                        <button onClick={() => handlePageChange(currentPage - 1)} className={`px-3 h-8 border ${currentPage === 1 ? "text-gray-300" : "text-gray-500 hover:bg-gray-100"} rounded-l-lg`} disabled={currentPage === 1}>
                            Previous
                        </button>
                    </li>
                    {[...Array(totalPages)].map((_, index) => (
                        <li key={index}>
                            <button onClick={() => handlePageChange(index + 1)} className={`px-3 h-8 border ${currentPage === index + 1 ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100"}`}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button onClick={() => handlePageChange(currentPage + 1)} className={`px-3 h-8 border ${currentPage === totalPages ? "text-gray-300" : "text-gray-500 hover:bg-gray-100"} rounded-r-lg`} disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Albums;
