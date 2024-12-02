import { useState, useEffect } from "react";
import axios from "axios";
import { BsPlus } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { useParams } from "react-router-dom";
const api_url = import.meta.env.VITE_API_URL;

const Album = () => {
    const [albumPhoto, setAlbumPhoto] = useState([]);
    const [photoList, setPhotoList] = useState([]);
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chosedFiles, setChosedFiles] = useState([]);
    const [photo, setPhoto] = useState({
        title: ""
    });
    const [res, setRes] = useState({});
    const token = localStorage.getItem("access_token");

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const fileChange = (event) => {
        const images = Array.from(event.target.files);
        setChosedFiles(images);
    };
    
    const fetchPhotos = async () => {
        try {
            const res = await axios.get(`${api_url}/photos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(res)
            setAlbumPhoto(res.data.data);
            // setPhotoList(res.data.data.albums);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = ({ currentTarget: input }) => {
        setPhoto({ ...photo, [input.name]: input.value });
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const formData = new FormData();
            formData.append("title", photo.title);
            chosedFiles.forEach(file => {
                formData.append("photos", file);
            });
            const res = await axios.post(`${api_url}/photos/${id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            setRes(res.data);
            if (res.data.success) {
                setTimeout(() => {
                    location.reload(true);
                }, 3000);
            }
        } catch (error) {
            if (error.response) {
                setRes(error.response.data);
            }
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);
    console.log(albumPhoto)

    return (
        <div className="m-2 sm:m-10 my-14 lg:m-28">
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
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-[#121212]">New Album Photos</h3>
                            <LiaTimesSolid onClick={toggleModal} type="button" className="cursor-pointer text-gray-400 bg-transparent hover:bg-gray-200 hover:text-[#121212] rounded-lg text-sm w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" />
                        </div>
                        <form className="my-4 p-5 mx-auto" onSubmit={handleSubmit}>
                            <div className="relative z-0 w-full mb-5 group">
                                <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-[#121212] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required onChange={handleChange} />
                                <label
                                    htmlFor="title"
                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Photo Title
                                </label>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Click to upload</span>
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" multiple onChange={fileChange} />
                                </label>
                            </div>
                            <button type="submit" className="text-white bg-[#121212] rounded-sm mt-2 text-sm w-full sm:w-auto px-8 py-2 text-center">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="relative">
                <button onClick={toggleModal} type="button" className="absolute top-0 right-0 text-white bg-[#121212] rounded-md text-sm px-4 gap-2 py-2 text-center inline-flex items-center justify-between me-2">
                    <BsPlus className="text-white text-xl" />
                    NEW
                </button>
                <h1 className="text-2xl uppercase mb-4 font-bold">Album Photos</h1>
                
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {albumPhoto.map((photo) => (
                    <div>
                        <img className="h-auto max-w-full rounded-lg cursor-pointer" src={photo.image_url} alt="" />
                        <p className="capitalize">{photo.title}</p>
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Album;
