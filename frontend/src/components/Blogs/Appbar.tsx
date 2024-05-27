import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useState } from "react";

export function Appbar() {
    const navigate = useNavigate()
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }
    const handleLogout = () => {
        localStorage.clear()
        navigate("/")
    }
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
        <div className="border-b flex justify-between px-10 py-4">
            <Link to="/blogs">
            <div className="text-2xl font-semibold flex-col justify-center font-serif flex">
                Medium
            </div>
            </Link>
            <div>  
                <Link to="/publish"><button type="button" className="mr-8 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-3 py-1 me-1.5 mb-2">New Blog</button></Link> 
                <button onClick={toggleDropdown}><Avatar name="Chaitanya" size="big"/></button>
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                        <ul className="py-2">
                            <li>
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 inline-flex"
                                >
                                <div className="mr-2 text-blue-600">&#9679;</div> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}