let Icon =({color}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41"
      height="41"
      fill="none"
      viewBox="0 0 34 41"
    >
      <path
        fill={color}
        d="M17.033.945L.297 10.864V23.07l16.736 9.918 13.426-7.63v3.625l-13.426 8.01L.297 26.887v4.387L17.033 41l16.736-9.727V19.065l-13.425 7.82v-3.814l13.425-8.011v-4.196L17.033.945z"
      ></path>
    </svg>
  );
}
function LeftSideIcon({ color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth="3"
        d="M7 1L2 6l5 5"
      ></path>
    </svg>
  );
}
function RightSideIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M1 11l5-5-5-5"
      ></path>
    </svg>
  );
}
function Aviable() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 11 10"
    >
      <circle cx="5.5" cy="5" r="5" fill="#78A962"></circle>
      <path
        stroke="#fff"
        strokeLinecap="round"
        d="M7.5 4L4.984 7 3.5 5.279"
      ></path>
    </svg>
  );
}
function OutOfStock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 11 10"
    >
      <circle cx="5.5" cy="5" r="5" fill="#C94D3F"></circle>
      <path
        fill="#fff"
        d="M6.177 5.856l.35-.35a.342.342 0 01.365-.075l.427.17a.34.34 0 01.212.313v.781a.34.34 0 01-.356.336C4.186 6.845 3.583 4.314 3.47 3.345a.339.339 0 01.339-.376h.755a.338.338 0 01.312.212l.17.427a.338.338 0 01-.073.365l-.35.35s.202 1.365 1.555 1.533z"
      ></path>
    </svg>
  );
}
function PickedStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#E9A426"
        d="M6.911.174a.1.1 0 01.178 0l1.84 3.594a.1.1 0 00.073.053l3.987.64a.1.1 0 01.055.169l-2.85 2.86a.1.1 0 00-.027.086l.623 3.99a.1.1 0 01-.144.104l-3.6-1.826a.1.1 0 00-.091 0L3.354 11.67a.1.1 0 01-.144-.104l.623-3.99a.1.1 0 00-.028-.086L.956 4.63a.1.1 0 01.055-.17l3.987-.64a.1.1 0 00.073-.052L6.91.174z"
      ></path>
    </svg>
  );
}
function UnPickedStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="#CACDD8"
        d="M6.911.174a.1.1 0 01.178 0l1.84 3.594a.1.1 0 00.073.053l3.987.64a.1.1 0 01.055.169l-2.85 2.86a.1.1 0 00-.027.086l.623 3.99a.1.1 0 01-.144.104l-3.6-1.826a.1.1 0 00-.091 0L3.354 11.67a.1.1 0 01-.144-.104l.623-3.99a.1.1 0 00-.028-.086L.956 4.63a.1.1 0 01.055-.17l3.987-.64a.1.1 0 00.073-.052L6.91.174z"
      ></path>
    </svg>
  );
}
function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="5"
      fill="none"
      viewBox="0 0 6 5"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeWidth="1.6"
        d="M5 1.77l-2 2-2-2"
      ></path>
    </svg>
  );
}

function Facebook() {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#fff"
        d="M15.105.277H.895a.617.617 0 00-.619.617v14.211c0 .342.276.618.618.618h14.211a.617.617 0 00.618-.618V.895a.617.617 0 00-.618-.618zm-1.784 4.508h-1.234c-.967 0-1.154.46-1.154 1.135v1.49h2.309l-.301 2.33h-2.008v5.983H8.525V9.742H6.51V7.409h2.014V5.691c0-1.995 1.218-3.082 2.998-3.082.854 0 1.586.064 1.8.093v2.083h-.002z"
      ></path>
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#fff"
        d="M8 5.396A2.609 2.609 0 005.396 8 2.609 2.609 0 008 10.604 2.609 2.609 0 0010.603 8 2.609 2.609 0 008 5.396zM15.808 8c0-1.078.01-2.147-.05-3.223-.061-1.25-.346-2.36-1.26-3.273-.916-.916-2.024-1.2-3.274-1.26-1.078-.06-2.146-.05-3.222-.05-1.079 0-2.147-.01-3.223.05-1.25.06-2.36.346-3.274 1.26C.59 2.42.306 3.527.245 4.777.186 5.855.196 6.924.196 8s-.01 2.146.05 3.223c.061 1.25.346 2.359 1.26 3.273.916.916 2.024 1.2 3.274 1.26 1.078.06 2.146.05 3.223.05 1.078 0 2.146.01 3.222-.05 1.25-.06 2.36-.346 3.274-1.26.916-.916 1.199-2.023 1.26-3.273.062-1.077.05-2.145.05-3.223zM8 12.006A4 4 0 013.994 8 4 4 0 018 3.994 4 4 0 0112.005 8 4 4 0 018 12.006zm4.17-7.24a.934.934 0 110-1.872.934.934 0 110 1.872z"
      ></path>
    </svg>
  );
}

function Search() {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      fill="none"
      viewBox="0 0 17 16"
    >
      <path
        fill="#000"
        stroke="#000"
        strokeWidth="0.2"
        d="M2.95 1.991a6.433 6.433 0 008.425 9.686l3.331 3.332h0a.892.892 0 101.262-1.262h0l-3.332-3.331a6.434 6.434 0 00-9.685-8.425zm0 0l.071.071-.07-.07zm7.839 1.263a4.65 4.65 0 11-6.523 6.63 4.65 4.65 0 016.523-6.63z"
      ></path>
    </svg>
  );
}

function Shop() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="w-6 h-6 cursor-pointer"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      ></path>
    </svg>
  );
}
function ShopingCart() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="19"
      fill="none"
      viewBox="0 0 21 19"
    >
      <path
        fill="#fff"
        d="M12.877 18.214a2.268 2.268 0 100-4.537 2.268 2.268 0 000 4.537zm-7.938 0a2.268 2.268 0 100-4.536 2.268 2.268 0 000 4.536zM19.725 2.249a1.09 1.09 0 000-2.18h-1.306c-1.023 0-1.907.71-2.13 1.708l-1.42 6.398a2.182 2.182 0 01-2.13 1.708h-8.52L2.585 3.339h10.598a1.09 1.09 0 000-2.18H2.584A2.18 2.18 0 00.468 3.87l1.635 6.541a2.181 2.181 0 002.117 1.653h8.519a4.362 4.362 0 004.258-3.416l1.422-6.399h1.306z"
      ></path>
    </svg>
  );
}
function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <circle cx="16" cy="16" r="15" stroke="#fff" strokeWidth="2"></circle>
      <path
        fill="#fff"
        d="M16 10a3 3 0 110 6 3 3 0 010-6zm0 7.5c3.315 0 6 1.343 6 3V22H10v-1.5c0-1.657 2.685-3 6-3z"
      ></path>
    </svg>
  );
}
function Magnfier() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#CACDD8"
        stroke="#CACDD8"
        strokeWidth="0.2"
        d="M2.69 2.684a6.1 6.1 0 007.984 9.186l3.152 3.154h0a.85.85 0 001.203-1.203h0l-3.153-3.152A6.101 6.101 0 002.69 2.683zm0 0l.07.07-.07-.07zm7.425 1.203a4.4 4.4 0 11-6.17 6.273 4.4 4.4 0 016.17-6.273z"
      ></path>
    </svg>
  );
}
export {
  Icon,
  LeftSideIcon,
  RightSideIcon,
  Aviable,
  OutOfStock,
  PickedStar,
  UnPickedStar,
  ArrowDown,
  Facebook,
  Instagram,
  Search,
  Shop,
  ShopingCart , 
  UserIcon , 
  Magnfier , 
};