function Icon() {
  return (
    <svg
      className="mx-4"
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="41"
      fill="none"
      viewBox="0 0 34 41"
    >
      <path
        fill="#0156FF"
        d="M17.033.945L.297 10.864V23.07l16.736 9.918 13.426-7.63v3.625l-13.426 8.01L.297 26.887v4.387L17.033 41l16.736-9.727V19.065l-13.425 7.82v-3.814l13.425-8.011v-4.196L17.033.945z"
      ></path>
    </svg>
  );
}
function LeftSideIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      fill="none"
      viewBox="0 0 8 12"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        d="M7 1L2 6l5 5"
      ></path>
    </svg>
  );
}
function RightSideIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      fill="none"
      viewBox="0 0 8 12"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="2"
        d="M1 11l5-5-5-5"
      ></path>
    </svg>
  );
}
export { Icon , LeftSideIcon , RightSideIcon};
