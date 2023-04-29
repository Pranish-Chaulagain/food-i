import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";

const Profile = ({ authUser, signOut }) => {
  const [showProfile, setShowProfile] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setShowProfile(!showProfile);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowProfile(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      {authUser ? (
        <div className="cursor-pointer" onClick={handleClick} ref={menuRef}>
          <div className="relative">
            {authUser.profile ? (
              <div className="w-8 h-8 object-cover rounded-full flex justify-center items-center overflow-hidden">
                <img src={authUser.profile} alt="" />
              </div>
            ) : (
              <div className="w-8 h-8 object-cover rounded-full flex justify-center items-center overflow-hidden bg-gray-600">
                <span className="text-white text-lg">
                  <FiUser />
                </span>
              </div>
            )}
            <span className="h-[12px] md:h-[14px] min-w-[12px] md:min-w-[14px] rounded-full bg-[#00a34f] absolute bottom-0 left-5 border border-white"></span>
            {showProfile && (
              <ul
                id="category-items"
                className="bg-white absolute top-[36px] right-0 min-w-[220px] md:px-2 px-1 md:py-2 py-1 text-black shadow rounded-md border text-sm font-medium"
              >
                <div className="w-full flex flex-col items-center gap-3 px-3 pt-2 pb-3 whitespace-nowrap border-b cursor-default">
                  {authUser.profile ? (
                    <div className="w-11 h-11 object-cover rounded-full flex justify-center items-center overflow-hidden">
                      <img src={authUser.profile} alt="" />
                    </div>
                  ) : (
                    <div className="w-11 h-11 object-cover rounded-full flex justify-center items-center overflow-hidden bg-gray-600">
                      <span className="text-white text-xl">
                        <FiUser />
                      </span>
                    </div>
                  )}
                  <div className="flex items-center flex-col">
                    <span className="font-bold">{authUser.username}</span>
                    <span className="text-xs">{authUser.email}</span>
                  </div>
                </div>
                <li className="h-10 flex items-center md:mt-2 mt-1 gap-2 px-3 whitespace-nowrap cursor-pointer hover:bg-black/[0.03] rounded">
                  <FiUser size={18} /> My Profile
                </li>

                <li
                  className="h-10 flex items-center gap-2 px-3 whitespace-nowrap cursor-pointer hover:bg-black/[0.03] rounded"
                  onClick={signOut}
                >
                  <FiLogOut size={18} /> Log out
                </li>
              </ul>
            )}
          </div>
        </div>
      ) : (
        <Link href="/login">
          <FiUser className="text-[24px]" />
        </Link>
      )}
    </>
  );
};

export default Profile;
