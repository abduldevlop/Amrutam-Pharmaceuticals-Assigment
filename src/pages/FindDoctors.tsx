import { MdLocationPin } from "react-icons/md";
import { Ellipse1, Ellipse2 } from "../assets";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { doctors } from "../constants";
import { DoctorCard } from "../components";
import { Doctor } from "../types";

const FindDoctors = () => {
  return (
    <div>
      <div className="bg-[#EAF2EA] relative h-[190px] px-20">
        <img
          src={Ellipse2}
          alt=""
          className="absolute top-0  h-[70px] w-[170px]"
        />
        <img
          src={Ellipse1}
          alt=""
          className="absolute bottom-0 left-40  h-[90px] w-[150px]"
        />
        <img
          src={Ellipse2}
          alt=""
          className="absolute top-0 h-[70px] right-20 w-[170px]"
        />
        <img
          src={Ellipse1}
          alt=""
          className="absolute bottom-0 right-40  h-[90px] w-[150px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-medium capitalize">
            Find expert Doctors for an In-clinic session here
          </h1>
          <div className="mt-6 flex items-center gap-5">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md">
              <MdLocationPin size={20} className="text-[#3A643B]" />
              <select className="text-[#767676] text-sm">
                <option value="">Select Location</option>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-white w-[400px] px-5 py-2 rounded-md">
              <input
                type="text"
                placeholder="eg. Doctor, specialisation, clinic name"
                className="w-full h-full outline-none"
              />
              <FaArrowRightLong />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[300px] mt-5">
        <div className="flex items-center gap-5 text-sm">
          <div className="flex items-center gap-5 text-[#585858] bg-[#F3F3F3] px-4 py-2 rounded-md ">
            <select className="font-medium bg-transparent outline-none  w-[100px]">
              <option>Expertise</option>
            </select>
          </div>
          <div className="text-[#585858] bg-[#F3F3F3] px-4 py-2 rounded-md ">
            <select className="font-medium bg-transparent outline-none  w-[100px]">
              <option>Gender</option>
            </select>
          </div>
          <div className="text-[#585858] bg-[#F3F3F3] px-4 py-2 rounded-md ">
            <select className="font-medium bg-transparent outline-none  w-[100px]">
              <option>Fees</option>
            </select>
          </div>
          <div className="text-[#585858] bg-[#F3F3F3] px-4 py-2 rounded-md ">
            <select className="font-medium bg-transparent outline-none  w-[100px]">
              <option>Languages</option>
            </select>
          </div>
          <div className="text-[#3A643B] bg-[#DCEEDC] px-4 py-2 rounded-md ">
            <select className="font-medium bg-transparent outline-none  w-[100px]">
              <option>All filters</option>
            </select>
          </div>
        </div>
      </div>
      <div className="px-20 mt-10">
        <div className="flex items-center justify-end gap-5">
          <div className="font-[400] text-sm bg-[#EAF2EA] px-4 py-2 rounded-full flex items-center gap-2">
            <p>Hair care </p>
            <IoCloseOutline className="cursor-pointer" size={20} />
          </div>
          <div className="font-[400] text-sm bg-[#EAF2EA] px-4 py-2 rounded-full flex items-center gap-2 ">
            <p>Female</p>
            <IoCloseOutline className="cursor-pointer" size={20} />
          </div>
          <div className="font-[400] text-sm bg-[#EAF2EA] px-4 py-2 rounded-full flex items-center gap-2 ">
            <p>Rs.0-Rs.500</p>
            <IoCloseOutline className="cursor-pointer" size={20} />
          </div>
          <div className="font-[400] text-sm bg-[#EAF2EA] px-4 py-2 rounded-full flex items-center gap-2 ">
            <p>Hindi</p>
            <IoCloseOutline className="cursor-pointer" size={20} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 flex-wrap my-10">
          {doctors.map((doctor: Doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindDoctors;
