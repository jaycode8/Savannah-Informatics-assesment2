import { useState, useEffect } from "react";
import { BsPlus } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
const api_url = import.meta.env.VITE_API_URL;

const Albums = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [albums, setAlbums] = useState([]);
    const [album, setAlbum] = useState({
        title:""
    });
    const [res, setRes] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleChange = ({ currentTarget: input }) => {
        setAlbum({ ...album, [input.name]: input.value });
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

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const res = await axios.post(`${api_url}/albums`, album, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setRes(res.data);
            if (res.data.success) {
                setTimeout(() => {
                    location.reload(true);
                }, 1000);
            }
        } catch (error) {
            if (error.response) {
                setRes(error.response.data);
            }
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
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    <div className=" relative bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                            <h3 className="text-xl font-semibold text-gray-900">New Album</h3>
                            <LiaTimesSolid onClick={toggleModal} type="button" className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" />
                        </div>
                        <form className="my-4 p-5 mx-auto" onSubmit={handleSubmit}>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-[#121212] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                                <label
                                    htmlFor="title"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Album Title
                                </label>
                            </div>
                            <button type="submit" className="text-white bg-[#121212] rounded-sm mt-2 text-sm w-full sm:w-auto px-8 py-2 text-center">
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
                            <td className="px-6 py-4">{album.user.username}</td>
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
