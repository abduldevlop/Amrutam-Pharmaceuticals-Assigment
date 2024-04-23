import { IoIosLink } from "react-icons/io";
import { Doctor } from "../types";
import { PiChatTextThin, PiGraduationCapLight } from "react-icons/pi";
import { rating } from "../assets";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  // Access doctor properties here
  const {
    name,
    specializes,
    exp,
    languages,
    video_consultation,
    chat_consultation,
    profile,
  } = doctor;

  return (
    <div className="flex flex-col items-center gap-4 bg-[#FFF7E2] p-4 rounded-xl shadow-md w-[300px]">
      <div className="relative w-[150px] h-[150px]">
        <img src={profile} alt={name} className="w-full h-full rounded-full " />
        <img src={rating} alt="" className="absolute bottom-[-10px] left-10" />
      </div>
      <h1 className="text-2xl font-[600] text-[#2E2F2E]">{name}</h1>
      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-2 text-sm text-[#646665]">
          <span>
            <IoIosLink className="text-[#3A643B]" />
          </span>
          {specializes}
        </p>
        <p className="flex items-center gap-2 text-sm text-[#646665]">
          <span>
            <PiGraduationCapLight className="text-[#3A643B]" />
          </span>
          {exp}
        </p>
        <p className="flex items-center gap-2 text-sm text-[#646665]">
          <span>
            <PiChatTextThin className="text-[#3A643B]" />
          </span>
          Speaks: {languages}
        </p>
        <div className="flex items-center gap-2 text-[11px] mt-3 text-center">
          <div className="border p-[5px] rounded-xl">
            <p className="text-[#3C3C3C] font-medium">Video Consultation</p>
            <p className="text-[#3A643B] font-bold">₹{video_consultation}</p>
          </div>
          <div className="border p-[5px] rounded-xl">
            <p className="text-[#3C3C3C] font-medium">Chat Consultation</p>
            <p className="text-[#3A643B] font-bold"> {chat_consultation} </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 text-[13px]">
          <button className="border border-[#3A643B] py-1 bg-white text-[#3A643B] rounded-md hover:bg-[#3A643B] hover:border-none hover:text-white transition duration-500 ease-in-out">
            View Profile
          </button>

          <button className="bg-[#3A643B] py-2 text-white rounded-md hover:bg-white hover:text-[#3A643B] hover:border hover:border-[#3A643B] transition duration-500 ease-in-out">
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
