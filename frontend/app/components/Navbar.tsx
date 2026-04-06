import React from "react";
import user_pfp from "/user-pic.png";

const Navbar = () => {
  return (
    <div className="bg-white text-black text-xl flex rounded-b-xl">
      <div className="flex justify-center items-center gap-6 mr-auto p-2">
        <img
          className="h-10 w-10 rounded-full"
          src={user_pfp}
          alt="User Profile Picture"
        />
        <p>Hello, User</p>
      </div>

      <div className="flex items-center justify-center gap-5 ml-auto p-2">
        <p>Dashboard</p>
        <p>Graphs</p>
        <p>Data</p>
      </div>
    </div>
  );
};

export default Navbar;
