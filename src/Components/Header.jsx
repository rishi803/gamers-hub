import React, {useState}  from "react";
import logo1 from "./../assets/Images/logo1.png";
import { HiSun, HiMoon , HiOutlineMagnifyingGlass } from "react-icons/hi2";


const Header = () => {

    const [toggle, setToggle] = useState(true);

  return (
    <div className="flex items-center p-3">
      <img src={logo1} width={60} height={60} alt="logo" />
      <div className="flex bg-slate-200 p-2 w-full items-center rounded-full">
        <HiOutlineMagnifyingGlass />
        <input type="text" className="bg-transparent outline-none px-2 "  placeholder="Search Games..."/>
      </div>
      <div>
     {toggle ? <HiMoon className="text-[35px] cursor-pointer bg-gray-200 text-black p-1 rounded-full" 
        onClick={()=>setToggle(!toggle)}/> :  <HiSun className="text-[35px] cursor-pointer
       bg-gray-200 text-black p-1 rounded-full "  onClick={()=>setToggle(!toggle)} /> } 
     
      </div>
    </div>
  );
};

export default Header;
