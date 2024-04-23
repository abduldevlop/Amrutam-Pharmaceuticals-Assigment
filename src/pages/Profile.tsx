import { bottom_profile, cover, profile, school, star, tick } from "../assets";
import { IoAdd, IoLogoInstagram } from "react-icons/io5";
import { SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { modes, slotes, specializes, times } from "../constants";
import { useState } from "react";
import { MdDone } from "react-icons/md";
import { FaRegCalendarMinus } from "react-icons/fa";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Slot } from "../types";

const Profile = () => {
  const [selectedItemId, setSelectedItemId] = useState(Number);
  const [selectedSlote, setSelectedSlote] = useState(Number);
  const [selectedId, setSelectedId] = useState(Number); // Initialize selectedId state

  const handleItemClick = (id: number) => {
    setSelectedItemId(id);
  };
  const handleItemClickSlote = (id: number) => {
    setSelectedSlote(id);
  };
  const handleItemClickTime = (id: number) => {
    setSelectedId(id); // Update selectedId
  };
  return (
    <div className="px-20 py-5">
      <div className="border rounded-xl pb-4 overflow-hidden mt-10">
        <img src={cover} alt="cover" className="h-[100px] w-full" />
        <div className="flex items-center justify-between px-10">
          <div className="flex gap-5 items-center ">
            <img
              src={profile}
              alt="profile"
              className="mt-[-50px] w-[159px] h-[159px]"
            />
            <div className="flex flex-col gap-1">
              <h2 className="flex gap-1 items-center font-medium">
                Dr. Bruce Willis
                <img src={tick} alt="tick" />
              </h2>
              <p className="text-sm text-[#3A643B] font-medium">Gynecologist</p>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <span>4.2</span>
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-20 text-center text-sm text-[#3A643B] font-medium">
            <div>
              <p>Followers</p>
              <h1 className="text-black text-[17px]">850</h1>
            </div>
            <div>
              <p>Following</p>
              <h1 className="text-black text-[17px]">18K</h1>
            </div>
            <div>
              <p>Posts</p>
              <h1 className="text-black text-[17px]">250</h1>
            </div>
          </div>
          <button className="py-[6px] px-5 bg-[#3A643B] text-white rounded-md">
            Book an Appointment
          </button>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="flex-[52%]">
          <div className="border border-[#DCDCDC] p-10 rounded-xl text-[#313131] ">
            <div className="flex justify-between ">
              <h2 className="text-[18px] font-medium">A Little About me</h2>
              <button className="flex items-center gap-1 border border-[#3A643B] px-4 rounded-md text-sm font-medium py-[6px]">
                Follow
                <span>
                  <IoAdd size={20} />
                </span>
              </button>
            </div>
            <p className="mt-5 text-sm text-[#A7A7AF] font-medium">
              Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
              Surat. love to work with all my hospital staff and seniour
              doctors. Completed my graduation in Gynaecologist Medicine from
              the
            </p>
            <div className="flex items-center justify-between gap-2">
              <hr className="w-[83%]" />
              <Link to={"/"} className="font-medium text-black underline">
                Read More
              </Link>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <h1 className="font-medium text-black text-[18px]">
                Language Spoken{" "}
              </h1>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-md text-[#505050] font-medium">
                English
              </p>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-md text-[#505050] font-medium">
                Hindi
              </p>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-md text-[#505050] font-medium">
                Telugu
              </p>
            </div>
            <div className="flex items-center gap-5 mt-5">
              <Link
                to={"/"}
                className="border border-[#bdccbe] rounded-full p-2 bg-[#F7F7FC] text-[#3A643B] "
              >
                <SlSocialFacebook size={20} />
              </Link>
              <Link
                to={"/"}
                className="border border-[#bdccbe] rounded-full p-2 bg-[#F7F7FC] text-[#3A643B] "
              >
                <IoLogoInstagram size={20} />
              </Link>
              <Link
                to={"/"}
                className="border border-[#bdccbe] rounded-full p-2 bg-[#F7F7FC] text-[#3A643B]"
              >
                <PiYoutubeLogoLight size={20} />
              </Link>
              <Link
                to={"/"}
                className="border border-[#bdccbe] rounded-full p-2 bg-[#F7F7FC] text-[#3A643B]"
              >
                <SlSocialTwitter size={20} />
              </Link>
            </div>
          </div>
          <div className="border border-[#DCDCDC] p-10 rounded-xl mt-10 ">
            <h1 className="text-[18px] font-medium text-[#313131">
              I Specialize In
            </h1>
            <div className="flex items-center gap-5 mt-5">
              {specializes.map((specialize) => (
                <div
                  key={specialize.id}
                  className="text-center  flex items-center justify-center flex-col"
                >
                  <div className="border border-[#bdccbe] p-2 flex items-center w-[80px] mb-2 rounded-md">
                    <img
                      src={specialize.img}
                      alt={specialize.title}
                      className="w-[60px] h-[60px] justify-center "
                    />
                  </div>
                  <h2 className="text-[14px] font-medium text-[#000000]">
                    {" "}
                    {specialize.title}{" "}
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#DCDCDC] p-4 rounded-xl mt-10">
            <h1 className="text-[18px] font-medium text-[#313131">
              The Concerns I Treat
            </h1>
            <div className="mt-5 flex gap-2 flex-wrap">
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-full text-[#3A643B] font-medium">
                Skin Treatment
              </p>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-full text-[#3A643B] font-medium">
                Pregnancy
              </p>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-full text-[#3A643B] font-medium">
                Period Doubts
              </p>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-full text-[#3A643B] font-medium">
                Endometriosis
              </p>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-full text-[#3A643B] font-medium">
                Pelvic Pain
              </p>
              <p className="px-4 py-[6px] bg-[#F7F7FC] rounded-full text-[#3A643B] font-medium">
                Ovarian Cysts
              </p>
              <p className="px-4 py-[6px] border rounded-full text-[#3A643B] font-medium">
                + 5 More
              </p>
            </div>
          </div>
          <div className="border border-[#DCDCDC] p-8 rounded-xl mt-10 text-[#313131]">
            <h1 className="text-[18px] font-medium text-[#313131]">
              My Work Experience
            </h1>
            <h2 className="mt-5 text-[18px] font-bold text-[#3A643B] uppercase">
              I have been in practice for : 7+ Years
            </h2>
            <hr className="my-5" />
            <div className="flex items-center justify-between">
              <div className="flex gap-5 items-center">
                <img src={school} alt="school" className="w-[30px] h-[30px]" />
                <div>
                  <h1 className="font-medium text-[#333548]">
                    Midtown Medical Clinic
                  </h1>
                  <p className="text-[#909094] font-medium">Senior doctor</p>
                </div>
              </div>
              <p className="font-medium text-[#909094] uppercase">
                2016-Present
              </p>
            </div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-5 items-center">
                <img src={school} alt="school" className="w-[30px] h-[30px]" />
                <div>
                  <h1 className="font-medium text-[#333548]">
                    Midtown Medical Clinic
                  </h1>
                  <p className="text-[#909094] font-medium">Senior doctor</p>
                </div>
              </div>
              <p className="font-medium text-[#909094] uppercase">2010-2015</p>
            </div>
          </div>
          <div className="border border-[#DCDCDC] p-8 rounded-xl mt-10 text-[#313131]">
            <h1 className="text-[22px] font-[600] text-[#313131] mb-10">
              Featured Reviews (102)
            </h1>
            <div className="mt-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={bottom_profile} alt="profile-img" />
                  <div>
                    <h1 className="font-medium text-[20px]">
                      Alicent Hightower
                    </h1>
                    <p className="text-[#939393] font-medium">
                      Consulted for Skin care
                    </p>
                  </div>
                </div>
                <p className="text-[#979797] font-[400]">20 January 2023</p>
              </div>
              <div className="flex items-center mt-4">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p>
                Might be bit early to confirm but yes I can see noticeable
                difference. will write again after using it for longer periods
              </p>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={bottom_profile} alt="profile-img" />
                  <div>
                    <h1 className="font-medium text-[20px]">
                      Alicent Hightower
                    </h1>
                    <p className="text-[#939393] font-medium">
                      Consulted for Skin care
                    </p>
                  </div>
                </div>
                <p className="text-[#979797] font-[400]">20 January 2023</p>
              </div>
              <div className="flex items-center mt-4">
                <img src={star} alt="start" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
              </div>
              <p>
                Might be bit early to confirm but yes I can see noticeable
                difference. will write again after using it for longer periods
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[48%] border border-[#DCDCDC] p-10 rounded-xl text-[#313131] ml-10">
          <div className="border border-[#DCDCDC] rounded-xl flex items-center justify-between px-4 py-3">
            <h1 className="font-medium text-black">Appointment Fee</h1>
            <p className="text-[#3A643B] font-bold">₹699.00</p>
          </div>
          <div className="flex gap-2 items-center my-10">
            <h1 className="flex-1 text-[18px] font-bold">
              Select your mode of session
            </h1>
            <hr className="flex-1 h-[1px] bg-gray-500 items-center" />
          </div>
          <div className="flex items-center gap-5  justify-center mt-5">
            {modes.map((mode) => (
              <div
                key={mode.id}
                className={`flex-1 text-center border py-2 rounded-xl cursor-pointer ${
                  selectedItemId === mode.id
                    ? "border-[#5da25e] bg-[#F2FBF2]"
                    : "border-gray-300"
                }`}
                onClick={() => handleItemClick(mode.id)}
              >
                <h1
                  className={`font-medium text-[#1F1F1F] flex items-center gap-2 justify-center ${
                    selectedItemId === mode.id
                      ? "text-[#5da25e] font-bold text-[18px]"
                      : ""
                  }`}
                >
                  {mode.mode}{" "}
                  <span className="bg-[#3A643B] rounded-full text-white">
                    {" "}
                    {selectedItemId === mode.id && <MdDone size={15} />}{" "}
                  </span>
                </h1>
                <p className="text-[#606060] text-sm">{mode.time}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 items-center my-10">
            <h1 className="flex-1 text-[18px] font-bold">Pick a Time slot</h1>
            <hr className="flex-1 h-[1px] bg-gray-500 items-center" />
            <span className="border p-3 rounded-full">
              <FaRegCalendarMinus size={20} />
            </span>
          </div>
          <div className="border border-[#DCDCDC] p-8 rounded-xl text-[#313131] flex items-center justify-between">
            <CiCircleChevLeft size={20} className="cursor-pointer" />
            <div className="flex items-center gap-5">
              {slotes.map((slote: Slot) => (
                <div
                  key={slote.id}
                  className={`w-[100px] text-center border py-3 px-1 rounded-xl cursor-pointer ${
                    selectedSlote === slote.id
                      ? "border-[#5da25e] bg-[#F2FBF2]"
                      : "border-gray-300"
                  }`}
                  onClick={() => handleItemClickSlote(slote.id)}
                >
                  <h1
                    className={`font-medium text-[#1F1F1F] flex items-center gap-2 justify-center ${
                      selectedSlote === slote.id
                        ? "text-[#5da25e] font-bold "
                        : ""
                    }`}
                  >
                    {slote.time}{" "}
                  </h1>
                  <p className="text-[#606060] text-sm font-medium">
                    {slote.slote} slotes
                  </p>
                </div>
              ))}
            </div>
            <CiCircleChevRight size={20} className="cursor-pointer" />
          </div>

          <div className="flex flex-col gap-10 mt-5">
            {times.map((time) => (
              <div key={time.id}>
                <h1 className="mb-5 font-bold"> {time.title} </h1>
                <div className="flex flex-wrap items-center gap-10">
                  {time.all_times.map((spe_time) => (
                    <p
                      key={spe_time.id}
                      className={`font-medium p-4 rounded-2xl text-[14px] cursor-pointer ${
                        selectedId === spe_time.id
                          ? "bg-[#3A643B] text-white"
                          : "border"
                      }`}
                      onClick={() => handleItemClickTime(spe_time.id)}
                    >
                      {spe_time.time}
                    </p>
                  ))}
                </div>
              </div>
            ))}
            <button className="py-[6px] px-5 bg-[#3A643B] text-white rounded-md mt-5 w-full">
              Make an appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
