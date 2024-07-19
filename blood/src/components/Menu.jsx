import { useState } from 'react';
import {
  FaBox,
  FaCalendarAlt,
  FaChartBar, FaClipboard,
  FaClipboardList, FaCog, FaElementor,
  FaHdd,
  FaHome, FaUser, FaUsers
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Menu() {
const [activeLink, setActiveLink] = useState('/');

const handleLinkClick = (link) => {
setActiveLink(link)
}

  return (
    <div className='h-[620px] bg-gray-200 p-10 pt-5 w-[250px] shadow-lg'>
    <ul className="flex flex-col items-start justify-start mt-[20px] pl-[10px]">

     <Link to= "/" onClick={() => handleLinkClick("/")}>
     <li className={`flex items-center text-[16px] font-serif  cursor-pointer mt-[15px] transition-colors duration-100 "
      ${activeLink === "/" ? "bg-red-300 p-[8px] w-[130px] rounded-[5px] text-white" : ""}
      `}>
        <FaHome className = {`mr-[15px] w-[18px] text-red-500 ${activeLink === '/' ? "text-white" : "text-red-300"}`}/>
        Home
        </li>
     </Link>

        <li className="flex items-center text-[16px] font-serif cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaUser className = "mr-[15px] w-[14px] text-red-500" />
        Profile
        </li>

        <hr className='w-full my-[20px] border-gray-400'/>

        <Link to= "/donors" onClick={() => handleLinkClick("/donors")}>
     <li className={`flex items-center text-[16px] font-serif  cursor-pointer mt-[15px] transition-colors duration-100 "
      ${activeLink === "/donors" ? "bg-red-300 p-[8px] w-[130px] rounded-[5px] text-white" : ""}
      `}>
        <FaBox className = {`mr-[15px] w-[18px] text-red-500 ${activeLink === '/donors' ? "text-white" : "text-red-300"}`}/>
        Donors
        </li>
     </Link>

     <Link to= "/prospects" onClick={() => handleLinkClick("/prospects")}>
     <li className={`flex items-center text-[16px] font-serif  cursor-pointer mt-[15px] transition-colors duration-100 "
      ${activeLink === "/prospects" ? "bg-red-300 p-[8px] w-[130px] rounded-[5px] text-white" : ""}
      `}>
        <FaUsers className = {`mr-[15px] w-[18px] text-red-500 ${activeLink === '/prospects' ? "text-white" : "text-red-300"}`}/>
        Prospects
        </li>
     </Link>

        <li className="flex items-center text-[16px] font-serif cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaClipboardList className = "mr-[15px] w-[15px] text-red-500"/>
        Orders
        </li>

        <hr className='w-full my-[20px] border-gray-400'/>

        <li className="flex items-center text-[16px] font-serif cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaElementor className = "mr-[15px] w-[14px] text-red-500"/>
        Elements
        </li>

        <li className="flex items-center text-[16px] font-serif cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaCog className = "mr-[15px] text-red-500"/>
        Settings
        </li>

        <li className="flex items-center text-[16px] font-serif cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaHdd className = "mr-[15px] text-red-500"/>
        Backups
        </li>

        <hr className='w-full my-[20px] border-gray-400'/>

        <li className="flex items-center text-[16px] font-serif cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaChartBar className = "mr-[15px] text-red-500"/>
        Charts
        </li>

        <li className="flex items-center text-[16px] font-serif cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaClipboard className = "mr-[15px] text-red-500"/>
        All logos
        </li>

        <li className="flex items-center text-[16px] cursor-pointer mt-[15px] transition-colors duration-100 ">
        <FaCalendarAlt className = "mr-[15px] w-[14px] text-red-500"/>
        Calendar
        </li>

    </ul>
    </div>
  )
}

export default Menu