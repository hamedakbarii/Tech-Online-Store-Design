import Header from "../../Header/Header";

export default function ContactUs() {
  return (
    <>
      <Header />
      <div className="p-2">
        <span>
          Home <span className="text-[##0156FF]">›</span> Contact Us
        </span>
      </div>

      <div className="flex flex-col justify-center items-start p-2">
        <h2 className="font-bold text-2xl">Contact Us</h2>
        <span className="pt-2 text-lg">
          We love hearing from you, our Shop customers. Please contact us and we
          will make sure to get back to you as soon as we possibly can.
        </span>
      </div>

      <form className="flex flex-col justify-center gap-5 p-4 w-full">
        <div className="flex flex-col justify-center items-start">
          <label className="p-2 font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-[#A2A6B0] rounded-[.3rem] font-light w-full p-2 "
          />
        </div>

        <div className="flex flex-col justify-center items-start">
          <label className="p-2 font-semibold">Your Email</label>
          <input
            type="text"
            placeholder="Your Email"
            className="border border-[#A2A6B0] rounded-[.3rem] font-light w-full p-2"
          />
        </div>

        <div className="flex flex-col justify-center items-start">
          <label className="p-2 font-semibold">Your Phone Number</label>
          <input
            type="text"
            placeholder="Your Phone Number"
            className="border border-[#A2A6B0] rounded-[.3rem] font-light w-full p-2"
          />
        </div>

        <div className="flex flex-col justify-center items-start">
          <label className="p-2 font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-[#A2A6B0] rounded-[.3rem] font-light w-full p-2"
          />
        </div>

        <div className="flex flex-col justify-center items-start">
          <label className="p-2 font-semibold">What's on your mind?</label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="7"
            placeholder="Type Here ..."
            className="p-2 w-full border border-[#A2A6B0] rounded-[.3rem]"
          ></textarea>
        </div>

        <input
          type="submit"
          value={"Submit"}
          className="text-white border-2 self-start border-[#0156FF] cursor-pointer bg-[#0156FF] px-10 py-2 font-semibold flex rounded-3xl transition-all ease-in-out duration-300 hover:bg-white hover:text-[#0156FF]"
        />
      </form>
    </>
  );
}
