// Side Navigation BAr modularised for cleaner code in main container.
const SideNav = () => {
  return (
    <div className="row-start-2 flex flex-row gap-3">
      <ul className="pt-2">
        <li>
          <button className="flex flex-row cursor-pointer items-center truncate rounded-r-[8px] p-3 gap-[10px] text-[18px] leading-[22px] font-[500] text-[#2563EB] outline-none hover:bg-[#2563EB] hover:text-white w-52 h-12">
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
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            <span>Team Members</span>
          </button>
        </li>
        <li>
          <button className="flex flex-row cursor-pointer items-center truncate rounded-r-[8px] p-3 gap-[10px] text-[18px] leading-[22px] font-[500] text-[#2563EB] outline-none hover:bg-[#2563EB] hover:text-white w-52 h-12">
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
                <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
              </svg>
            </span>
            <span>Products</span>
          </button>
        </li>
        <li>
          <button className="flex flex-row cursor-pointer items-center truncate rounded-r-[8px] p-3 gap-[10px] text-[18px] leading-[22px] font-[500] text-[#2563EB] outline-none hover:bg-[#2563EB] hover:text-white w-52 h-12">
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
                <path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5" />
                <path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z" />
              </svg>
            </span>
            <span>Inbox</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
