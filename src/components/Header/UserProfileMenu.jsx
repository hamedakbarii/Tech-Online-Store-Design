import { Link } from "react-router-dom";

export default function UserProfileMenu({toggleProfile}) {
  return (
    <>
      <div className="absolute top-[100%] right-0 w-full bg-white px-5 py-2 flex flex-col after:block after:absolute after:content-[''] after:right-8 after:p-2 after:bg-white after:rotate-[45deg] after:-top-2">
        <h3 className="text-[#000000] font-semibold text-lg m-2"><Link to="/useraccount" onClick={()=>{toggleProfile(false)}}>My Account</Link></h3>
        <h3 className="text-[#000000] font-semibold text-lg m-2">
          My Wish List (0)
        </h3>
        <h3 className="text-[#000000] font-semibold text-lg m-2">Compare (0)</h3>
        <h3 className="text-[#000000] font-semibold text-lg m-2">
        <Link to="/register" onClick={()=>{toggleProfile(false)}}>create an Account</Link>
          
        </h3>
        <h3 className="text-[#000000] font-semibold text-lg m-2">
        <Link to="/register" onClick={()=>{toggleProfile(false)}}>Sign In</Link>
        </h3>
      </div>
    </>
  );
}
