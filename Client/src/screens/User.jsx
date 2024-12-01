import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const api_url = import.meta.env.VITE_API_URL;

const User = () => {
    const [user, setUser] = useState({});
    const [albums, setAlbums] = useState([]);
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    
    const handleClick = (album_id) => {
        location.href = `/album/${album_id}`;
    };

    const token = localStorage.getItem("access_token");

    const fetchUser = async () => {
        try {
            const user = await axios.get(`${api_url}/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUser(user.data.data);
            setAlbums(user.data.data.albums);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUser();
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
            <h1 className="text-2xl uppercase mb-4 font-bold">User data</h1>
            <div className="pb-5">
                <span className="flex gap-2">
                    <h3 className="font-bold uppercase">Username :</h3>
                    <p>{user.username}</p>
                </span>
                <span className="flex gap-2">
                    <h3 className="font-bold uppercase">Email :</h3>
                    <p>{user.email}</p>
                </span>
                <span className="flex gap-2">
                    <h3 className="font-bold uppercase">albums :</h3>
                    <p>{albums.length}</p>
                </span>
            </div>
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
                            <td className="px-6 py-4">{user.username}</td>
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

export default User;
