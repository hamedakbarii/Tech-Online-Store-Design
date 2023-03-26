export default function UserProfileMenu() {
  return (
    <>
      <div className="absolute top-[100%] right-0 w-full bg-white px-5 py-2 flex flex-col after:block after:absolute after:content-[''] after:right-8 after:p-2 after:bg-white after:rotate-[45deg] after:-top-2">
        <h3 className="text-[#000000] font-semibold text-lg">My Account</h3>
        <h3 className="text-[#000000] font-semibold text-lg">
          My Wish List (0)
        </h3>
        <h3 className="text-[#000000] font-semibold text-lg">Compare (0)</h3>
        <h3 className="text-[#000000] font-semibold text-lg">
          create an Account
        </h3>
        <h3 className="text-[#000000] font-semibold text-lg">Sign In</h3>
      </div>
    </>
  );
}
