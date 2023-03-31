import React, { useState } from "react";
import MemberCard from "./MemberCard";
import SideNav from "./SideNav";
import { data, user } from "../Utils/data";

//Helper Function for filter output in search callback
const searchUsers = function (searchText: string, Users: user[]) {
  const filteredUsers = Users.filter((user) => {
    const fullName = user.firstName.concat(user.lastName);
    return fullName.toLowerCase().includes(searchText.toLowerCase());
  });
  return filteredUsers;
};

const MainContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [members] = useState(data);
  const [filteredMembers, setFilteredMembers] = useState(data);

  return (
    <div className="grid grid-cols-6">
      <div className="col-start-2 self-center justify-self-start px-8 py-[22.5px] text-[#1F2937] font-[600] text-[22px] leading-[27px]">
        Team Members
      </div>
      {/**
       * Search bar
       */}
      <div className="col-start-5 col-end-7 self-center justify-self-center">
        <div className="relative flex items-center h-8 w-64 rounded-lg overflow-hidden border border-[#9CA3AF]">
          <input
            className="peer h-full w-full outline-none text-[14px] leading-[16.94px] text-[#9CA3AF] bg-[#F3F4F6] pl-3 py-[7.5px] font-[600]"
            type="text"
            id="search"
            placeholder="Search.."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const data = searchUsers(searchText, members);
              setFilteredMembers(data);
            }}
            className="grid place-items-center h-full w-12 text-[#9CA3AF] bg-[#F3F4F6]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
      {/**
       * Side Navigation Bar
       */}
      <SideNav />
      {/**
       * Body for Member Card Display
       */}
      <div className="col-start-2 col-end-7 row-start-2 row-end-7 rounded-tl-xl bg-[#F3F4F6]">
        <div className="flex flex-wrap px-20 py-9 justify-center">
          {filteredMembers.map((member: user) => {
            return (
              <MemberCard
                firstName={member.firstName}
                lastName={member.lastName}
                designation={member.desig}
                key={member.id}
              />
            );
          })}
        </div>
      </div>
      {/**
       * Night Mode button for Nav Bar
       * Placed here for better control
       */}
      <button className="col-start-1 row-start-6 self-end flex flex-row cursor-pointer items-center truncate rounded-r-[8px] p-3 gap-[10px] text-[18px] leading-[22px] font-[500] text-[#2563EB] outline-none hover:bg-[#2563EB] hover:text-white w-52 h-12">
        <span className="mr-4 [&>svg]:text-[#2563EB]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
        </span>
        <span>Light Mode</span>
      </button>
    </div>
  );
};

export default MainContainer;
