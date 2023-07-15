import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();
  console.log(user);
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4  z-[90] w-full absolute ">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4  border-slate-500 rounded-sm border-4 mr-2 px-2">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/logIn">
            <button className="text-white pr-4  border-slate-500 rounded-sm border-4 mr-2 px-2">
              Sign In
            </button>
          </Link>
          <Link to="signUp">
            <button className="bg-red-600 px-6 py-2 text-white">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
