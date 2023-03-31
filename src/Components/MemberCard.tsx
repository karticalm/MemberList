/**
 * Member Card
 * Takes firstName lastName and designation as props to display
 */

type props = { firstName: string; lastName: string; designation: string };
const MemberCard = ({ firstName, lastName, designation }: props) => {
  return (
    <div className="flex flex-col items-center justify-center p-3 gap-5 isolate">
      <div className="flex flex-col items-center justify-center bg-[#EFF6FF] shadow-md rounded-xl py-3  w-48 h-60">
        <div className="photo-wrapper p-2">
          <div className="w-24 h-24 rounded-full mx-auto bg-[#2563EB] items-center flex flex-col justify-center py-[25px] px-6 gap-10">
            <p className="text-[28px] font-[600] leading-[3px] text-white">
              {`${firstName.charAt(0)}${lastName.charAt(0)}`}
            </p>
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
            {`${firstName} ${lastName}`}
          </h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
