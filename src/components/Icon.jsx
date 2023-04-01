let Icon = ({ color }) => {
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
};
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
function ArrowDown({ color  , size}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 14}
      height={size ? size : 14}
      fill="none"
      viewBox="0 0 6 5"
    >
      <path
        stroke={color ? color : "white"}
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
function UserIcon({ HandleUserDataShow, UserDataShow }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
      onClick={() => {
        UserDataShow ? HandleUserDataShow(false) : HandleUserDataShow(true);
      }}
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
function PriceTag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 18 18"
    >
      <g clipPath="url(#clip0_174_6158)">
        <path
          fill="#fff"
          d="M17.1.361a.534.534 0 00-.67-.306.534.534 0 00-.334.66c.817 2.367-.805 4.134-2.043 5.08l-.5-.72c-.168-.243-.543-.444-.836-.448l-2.805.013c-.343.01-.676.114-.965.3L.68 10.777a.896.896 0 00-.217 1.244l3.756 5.414c.282.403.732.355 1.133.073l8.267-5.84c.237-.169.512-.534.609-.813l.878-2.788c.097-.278.038-.703-.13-.945l-.305-.44C16.333 5.402 18.057 3.136 17.1.362zm-3.847 8.295a1.41 1.41 0 01-1.97-.351 1.44 1.44 0 01.347-1.99 1.407 1.407 0 011.644.014c-.24.146-.404.23-.435.244a.535.535 0 00-.29.602.537.537 0 00.518.42.53.53 0 00.226-.052c.17-.082.354-.179.545-.293a1.441 1.441 0 01-.585 1.406z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_174_6158">
          <path
            fill="#fff"
            d="M0 0H17.6V17.727H0z"
            transform="translate(.038 .003)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}
function DropUser() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        fill="#fff"
        d="M10.747 17.488L8.838 19.41 6.93 17.488C3.178 16.615.377 13.226.377 9.183.377 4.478 4.167.66 8.838.66S17.3 4.478 17.3 9.183c0 4.043-2.8 7.432-6.553 8.305zm-6.966-5.394c1.242 1.867 3.107 3.055 5.193 3.055 2.085 0 3.95-1.187 5.192-3.055a7.558 7.558 0 00-5.192-2.059 7.558 7.558 0 00-5.193 2.06zM8.838 8.33a2.53 2.53 0 001.795-.748 2.567 2.567 0 000-3.616 2.53 2.53 0 00-3.59 0 2.566 2.566 0 000 3.616 2.53 2.53 0 001.795.748z"
      ></path>
    </svg>
  );
}
function SupportHeadset() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 21 22"
    >
      <path
        fill="#fff"
        d="M10.779 2.585C6.172 2.585 2.424 6.36 2.424 11v3.486c0 .862.75 1.563 1.671 1.563h.835a.832.832 0 00.591-.247.844.844 0 00.245-.595V10.88a.844.844 0 00-.245-.595.832.832 0 00-.59-.247h-.76c.465-3.256 3.247-5.77 6.608-5.77 3.36 0 6.142 2.514 6.606 5.77h-.758a.833.833 0 00-.591.247.845.845 0 00-.245.595v5.169c0 .928-.75 1.683-1.67 1.683H12.45v-.842H9.107v2.525h5.012c1.843 0 3.342-1.51 3.342-3.366.922 0 1.671-.701 1.671-1.563V11c0-4.64-3.748-8.415-8.354-8.415z"
      ></path>
    </svg>
  );
}
function MessageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill="#fff"
        d="M14 .667c7.511 0 13.333 5.502 13.333 12.933 0 7.432-5.822 12.933-13.333 12.933a14.54 14.54 0 01-3.86-.512 1.063 1.063 0 00-.712.052l-2.646 1.168a1.067 1.067 0 01-1.497-.943l-.073-2.372a1.065 1.065 0 00-.358-.76C2.26 20.846.667 17.487.667 13.6.667 6.17 6.489.667 14 .667zM5.993 17.382c-.375.597.358 1.269.919.843l4.207-3.193a.8.8 0 01.964-.003l3.115 2.336a2 2 0 002.892-.533l3.917-6.214c.375-.597-.358-1.269-.92-.842l-4.206 3.193a.8.8 0 01-.964.002l-3.115-2.336a2 2 0 00-2.892.534l-3.917 6.213z"
      ></path>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      fill="none"
      viewBox="0 0 15 14"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M1.806 1l11.92 11.92M13.726 1L1.806 12.92"
      ></path>
    </svg>
  );
}
function ArrowDown2() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="5"
      fill="none"
      viewBox="0 0 6 5"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.6"
        d="M4.92 1l-2 2-2-2"
      ></path>
    </svg>
  );
}
export function ArrowUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="5"
      fill="none"
      viewBox="0 0 6 5"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="1.6"
        d="M1 4.115l2-2 2 2"
      ></path>
    </svg>
  );
}
function HeartLike() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <circle cx="15" cy="15" r="14" stroke="#A2A6B0" strokeWidth="2"></circle>
      <path
        stroke="#A2A6B0"
        strokeWidth="2"
        d="M14.685 11.825l.71.717.71-.717c.674-.679 1.709-1.45 2.787-1.45 1.069 0 1.91.356 2.48.903.565.544.922 1.336.922 2.332 0 1.07-.43 1.982-1.165 2.866-.755.907-1.773 1.715-2.878 2.588l-.026.02c-.937.74-1.98 1.563-2.83 2.483-.84-.912-1.873-1.728-2.802-2.462l-.05-.04h-.001c-1.106-.874-2.123-1.683-2.878-2.59C8.93 15.593 8.5 14.68 8.5 13.61c0-.995.356-1.786.922-2.331.57-.547 1.411-.903 2.48-.903 1.077 0 2.11.77 2.783 1.45z"
      ></path>
    </svg>
  );
}

function Comparison() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="31"
      fill="none"
      viewBox="0 0 31 31"
    >
      <circle
        cx="15.041"
        cy="15.477"
        r="14"
        stroke="#A2A6B0"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#A2A6B0"
        strokeLinecap="round"
        strokeWidth="2.2"
        d="M10.42 21.565v-4.486M15 21.565V8.169M19.661 21.565v-8.842"
      ></path>
    </svg>
  );
}

function NovelLetter() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      fill="none"
      viewBox="0 0 30 31"
    >
      <circle
        cx="15"
        cy="15.954"
        r="14"
        stroke="#A2A6B0"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#A2A6B0"
        strokeLinecap="round"
        strokeWidth="1.7"
        d="M21.667 10.788H8.333a.833.833 0 00-.833.833v10c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833v-10a.833.833 0 00-.833-.833z"
      ></path>
      <path
        stroke="#A2A6B0"
        strokeLinecap="round"
        strokeWidth="1.7"
        d="M7.5 12.038L15 16.62l7.5-4.583"
      ></path>
    </svg>
  );
}

let ZipIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77"
      height="27"
      fill="none"
      viewBox="0 0 77 27"
    >
      <path
        fill="#F15B41"
        d="M27.285 10.111l-6.164 5.412H5.857a5.915 5.915 0 00-3.867 1.424l7.699-6.761.118-.103 9.646-8.478A5.963 5.963 0 0125.18.42c1.989.632 3.482 2.251 3.916 4.249a5.634 5.634 0 01-1.812 5.435v.007z"
      ></path>
      <path
        fill="#F99D1D"
        d="M5.857 11.58c3.234 0 5.856-2.56 5.856-5.717 0-3.157-2.622-5.717-5.856-5.717C2.622.146 0 2.706 0 5.863 0 9.02 2.622 11.58 5.857 11.58z"
      ></path>
      <path
        fill="#272560"
        d="M5.857 15.523a5.915 5.915 0 00-3.867 1.424l-.049.044a5.62 5.62 0 00-.438 8.072c2.163 2.348 5.865 2.539 8.27.428l11.35-9.967-15.266-.001z"
      ></path>
      <path
        fill="#00B6BD"
        d="M21.113 15.527L9.762 25.494a5.913 5.913 0 01-3.916 1.46h17.512c3.378-.053 5.764-2.534 5.764-5.717 0-3.182-2.566-5.666-5.764-5.716l-2.245.006z"
      ></path>
      <path
        fill="#272560"
        d="M37.612 22.174c-.488.018-.96-.17-1.294-.515a1.78 1.78 0 01-.488-1.28 2.722 2.722 0 01.351-1.362c.206-.373.458-.72.75-1.034l7.246-7.972h-6.316c-.612 0-1.05-.204-1.29-.61a2.545 2.545 0 01-.337-1.335c-.017-.45.116-.893.379-1.263.26-.35.686-.548 1.13-.528h11.16c.47-.021.931.146 1.273.464.316.308.477.746.477 1.3.013.432-.08.861-.27 1.251-.184.34-.413.654-.683.934l-7.546 8.213h7.15c.43-.01.84.179 1.102.51.28.371.422.824.401 1.283.02.479-.098.954-.34 1.37-.245.382-.678.576-1.287.576l-11.568-.002zm17.53.21c-1.986 0-2.4-.992-2.4-1.824V8.417c0-.634.197-1.148.587-1.526.39-.378 1.01-.57 1.848-.57.705 0 1.263.155 1.66.465.398.31.618.808.618 1.45v12.26c0 .667-.216 1.157-.642 1.46-.426.301-.973.428-1.67.428zm0-17.367c-.774 0-1.408-.22-1.888-.655-.48-.435-.73-1.035-.73-1.772A2.303 2.303 0 0153.25.85c.475-.454 1.113-.686 1.891-.686a3.006 3.006 0 011.778.584c.558.4.841 1.022.841 1.848 0 .737-.246 1.334-.73 1.773-.485.44-1.12.652-1.889.652v-.004zm7.491 22.02c-1.857 0-2.25-1.008-2.25-1.855V8.006a1.926 1.926 0 01.588-1.44c.388-.377 1.01-.57 1.848-.57a3.338 3.338 0 011.5.339c.493.246.75.73.75 1.423a5.586 5.586 0 011.373-1.159 5.818 5.818 0 013.1-.84 6.893 6.893 0 013.035.638 6.162 6.162 0 012.204 1.775 7.711 7.711 0 011.305 2.677c.292 1.09.435 2.214.426 3.34a11.288 11.288 0 01-.49 3.392 7.905 7.905 0 01-1.43 2.692 6.576 6.576 0 01-2.32 1.773 7.384 7.384 0 01-3.125.638 6.575 6.575 0 01-2.13-.292 5.949 5.949 0 01-1.396-.673 3.832 3.832 0 01-.645-.536v3.912c0 .68-.191 1.182-.567 1.491-.377.31-.956.451-1.776.451zM68.34 9.65a3.048 3.048 0 00-1.468.337c-.425.235-.79.56-1.065.953-.31.444-.536.939-.668 1.46a7.235 7.235 0 00-.226 1.852c0 1.421.3 2.561.9 3.389.6.827 1.414 1.214 2.533 1.214 1.12 0 1.934-.414 2.5-1.268.565-.854.866-1.99.866-3.335a7.239 7.239 0 00-.234-1.846 4.672 4.672 0 00-.654-1.46 3.03 3.03 0 00-1.05-.95 2.977 2.977 0 00-1.434-.346z"
      ></path>
      <defs>
        <clipPath id="clip0_50_1170">
          <path fill="#fff" d="M0 0h77v27H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export function Location() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="#000"
        d="M14.571 14.571c-1.178 0-2.142-.925-2.142-2.057 0-1.131.964-2.057 2.142-2.057 1.179 0 2.143.926 2.143 2.057 0 1.132-.964 2.057-2.143 2.057zM21 12.72c0-3.734-2.84-6.377-6.429-6.377-3.589 0-6.428 2.643-6.428 6.377 0 2.407 2.09 5.595 6.428 9.401C18.911 18.315 21 15.127 21 12.72zm-6.429-8.434c4.5 0 8.572 3.312 8.572 8.434 0 3.415-2.86 7.457-8.572 12.137C8.861 20.177 6 16.135 6 12.72c0-5.122 4.071-8.434 8.571-8.434z"
      ></path>
    </svg>
  );
}

export function Watch() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="#000"
        strokeWidth="2.3"
        d="M15 24.564c-5.273 0-9.564-4.292-9.564-9.564 0-5.273 4.291-9.564 9.564-9.564 5.272 0 9.564 4.291 9.564 9.564 0 5.272-4.292 9.564-9.564 9.564z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth="2"
        d="M15 10.5v5.25h5.25"
      ></path>
    </svg>
  );
}
export function Phone() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="#000"
        strokeWidth="2.3"
        d="M15 24.564c-5.273 0-9.564-4.292-9.564-9.564 0-5.273 4.291-9.564 9.564-9.564 5.272 0 9.564 4.291 9.564 9.564 0 5.272-4.292 9.564-9.564 9.564z"
      ></path>
      <path
        fill="#000"
        d="M16 17.235l.738-.739a.721.721 0 01.771-.158l.9.36a.718.718 0 01.448.658v1.649a.717.717 0 01-.751.708c-6.304-.392-7.575-5.732-7.816-7.776a.717.717 0 01.715-.794h1.591a.712.712 0 01.66.448l.359.9a.712.712 0 01-.155.771l-.738.739s.425 2.877 3.278 3.234z"
      ></path>
    </svg>
  );
}
export function Email() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        stroke="#000"
        strokeWidth="2.3"
        d="M15 24.564c-5.273 0-9.564-4.292-9.564-9.564 0-5.273 4.291-9.564 9.564-9.564 5.272 0 9.564 4.291 9.564 9.564 0 5.272-4.292 9.564-9.564 9.564z"
      ></path>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M9.857 18.398v-6.484l5.143 3.6 5.143-3.6v6.484"
      ></path>
    </svg>
  );
}

function PayPalIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="25"
      fill="none"
      viewBox="0 0 73 19"
    >
      <path
        fill="#139AD6"
        d="M56.193 5.78h-3.652c-.215 0-.43.21-.537.421L50.5 15.464c0 .21.107.316.322.316h1.934c.215 0 .322-.105.322-.316l.43-2.631c0-.21.214-.421.537-.421h1.181c2.471 0 3.867-1.158 4.19-3.474.215-.947 0-1.79-.43-2.316-.644-.526-1.611-.842-2.793-.842zm.43 3.474c-.215 1.263-1.182 1.263-2.148 1.263h-.645l.43-2.421c0-.105.107-.21.322-.21h.215c.644 0 1.289 0 1.611.42.215.106.215.421.215.948z"
      ></path>
      <path
        fill="#263B80"
        d="M28.157 5.38h-3.886c-.228 0-.457.229-.57.457l-1.6 10.057c0 .229.113.343.342.343h1.828c.23 0 .458-.228.572-.457l.457-2.743c0-.228.229-.457.572-.457h1.257c2.628 0 4.114-1.257 4.457-3.771.228-1.029 0-1.943-.457-2.515-.686-.571-1.6-.914-2.972-.914zm.457 3.772c-.228 1.371-1.257 1.371-2.285 1.371h-.572l.457-2.629c0-.114.115-.228.343-.228h.229c.685 0 1.371 0 1.714.457.114.114.229.457.114 1.029zM39.929 9.037H38.1c-.114 0-.343.115-.343.229l-.114.571-.114-.228c-.457-.572-1.257-.8-2.172-.8-2.057 0-3.885 1.6-4.228 3.771-.229 1.143.114 2.172.685 2.857.572.686 1.372.915 2.4.915 1.715 0 2.629-1.029 2.629-1.029l-.114.572c0 .228.114.342.343.342h1.714c.228 0 .457-.228.571-.457l1.029-6.4c-.114-.114-.343-.343-.457-.343zM37.3 12.694c-.228 1.03-1.028 1.83-2.171 1.83-.572 0-1.029-.23-1.257-.458-.229-.343-.343-.8-.343-1.372.114-1.028 1.028-1.828 2.057-1.828.571 0 .914.229 1.257.457.343.343.457.914.457 1.371z"
      ></path>
      <path
        fill="#139AD6"
        d="M68.01 9.022h-1.96c-.123 0-.368.122-.368.243l-.122.606-.123-.242c-.49-.607-1.347-.849-2.327-.849-2.206 0-4.166 1.697-4.533 4-.245 1.212.122 2.303.735 3.03.612.728 1.47.97 2.573.97 1.837 0 2.817-1.09 2.817-1.09l-.122.605c0 .243.122.364.367.364h1.838c.245 0 .49-.243.612-.485L68.5 9.386c-.123-.121-.245-.364-.49-.364zm-2.818 3.88c-.245 1.09-1.102 1.939-2.327 1.939-.613 0-1.103-.243-1.348-.485-.245-.364-.368-.849-.368-1.455.123-1.09 1.103-1.94 2.206-1.94.612 0 .98.243 1.347.486.49.363.613.97.49 1.454z"
      ></path>
      <path
        fill="#263B80"
        d="M50.214 8.78H48.29c-.226 0-.34.115-.453.23l-2.49 3.908-1.131-3.678c-.113-.23-.226-.345-.566-.345h-1.81c-.227 0-.34.23-.34.46l2.037 6.092-1.924 2.758c-.113.23 0 .575.227.575h1.81c.227 0 .34-.115.453-.23l6.224-9.08c.34-.345.113-.69-.113-.69z"
      ></path>
      <path
        fill="#139AD6"
        d="M70.056 6.056L68.5 16.434c0 .23.111.346.333.346h1.556c.222 0 .444-.23.555-.461L72.5 6.17c0-.23-.111-.346-.333-.346h-1.778c-.111-.115-.222 0-.333.23z"
      ></path>
      <path
        fill="#263B80"
        d="M13.564 2.132C12.769 1.231 11.292.78 9.247.78h-5.68c-.34 0-.681.338-.795.676L.5 16.216c0 .339.227.564.454.564h3.522l.909-5.521v.225c.113-.338.454-.676.795-.676h1.704c3.294 0 5.793-1.352 6.589-5.07V5.4c-.114 0-.114 0 0 0 .113-1.465-.114-2.366-.91-3.268z"
      ></path>
      <path
        fill="#139AD6"
        d="M14.212 4.78v.353c-.755 4-3.13 5.294-6.259 5.294H6.334c-.323 0-.647.353-.755.706L4.5 18.309c0 .236.108.471.432.471h2.805c.324 0 .648-.235.648-.588v-.118l.54-3.647v-.235c0-.353.323-.588.647-.588h.431c2.698 0 4.856-1.177 5.396-4.706.216-1.412.108-2.706-.54-3.53a1.137 1.137 0 00-.647-.588z"
      ></path>
      <path
        fill="#232C65"
        d="M13.5 5.13c-.111 0-.222-.117-.333-.117-.111 0-.223 0-.334-.116-.444-.117-.889-.117-1.444-.117H7.056c-.112 0-.223 0-.334.117a.647.647 0 00-.333.583L5.5 11.547v.233c.111-.35.444-.7.778-.7h1.666c3.223 0 5.667-1.4 6.445-5.25 0-.117 0-.233.111-.35-.222-.117-.333-.233-.556-.233-.333-.117-.333-.117-.444-.117z"
      ></path>
    </svg>
  );
}




function LongArrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="9"
      fill="none"
      viewBox="0 0 14 5"
    >
      <path
        fill="#0156FF"
        d="M10.326 4.95c.18-.384.354-.72.522-1.008.18-.288.354-.528.522-.72H.877v-.756h10.495a7.016 7.016 0 01-.523-.738 14.581 14.581 0 01-.522-.99h.63c.757.876 1.549 1.524 2.377 1.944v.324c-.829.408-1.62 1.056-2.377 1.944h-.63z"
      ></path>
    </svg>
  );
}


function IntelIconSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="49"
      height="49"
      fill="none"
      viewBox="0 0 49 49"
    >
      <path fill="url(#pattern0)" d="M0.883 0.383H48.53V48.03H0.883z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00833)" xlinkHref="#image0_1439_414"></use>
        </pattern>
        <image
          id="image0_1439_414"
          width="120"
          height="120"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

function GraphicRtxIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="49"
      height="49"
      fill="none"
      viewBox="0 0 49 49"
    >
      <path fill="url(#pattern0)" d="M0.883 0.383H48.53V48.03H0.883z"></path>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use
            transform="matrix(.00227 0 0 .00227 0 .148)"
            xlinkHref="#image0_1439_5527"
          ></use>
        </pattern>
        <image
          id="image0_1439_5527"
          width="440"
          height="310"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbgAAAE2CAYAAAATcIcbAAAgAElEQVR4Ae3dCXgU5f0H8N9u7mxCbgLkJOEKIHcwiCIql6BirVirrda7VqVaW61XxVvxqldp/XuU2tZbq1arKIpyRQ65b8gFBJJAICS7uXf/z2/IxM3svLuzmz1md7/v8+TJzjvvvPPOZ3nyMjPv+/6IkCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQCB0BAxkI8OtyygpdC4JVwIB3wjUliYZVv0txeab2lErBCCgVcDUv8M4/dEDVlH5P0+lBjKQLXLBMjJZ2uiYqCDyIQCBLgFD21qr1VoMDwhAILACqdnNu6LbaKigFXVElMn7jIICyIYABBQCFaWmFEUWNiEAgQAI5JeYTwhPa6Ov+O6N96ODEyphBwTsBGzUdmhrXKFdDj5CAAIBEsgY3JohOrXNQF/J+9DByRL4DQEnAs0njHs62wwGJ0WwCwIQ8INAXHJnc2SMLV90KqMRHZzIBvkQUBWo3mRqVt2BTAhAwK8CeRPNe5yccM8T06lK3o87OFkCvyHgRKC8ND7LyW7sggAE/CSQW2xpd3KqL+33oYOz18BnCKgI2GzUcHRfTH+VXciCAAT8LJCc057n5JTo4JzgYBcEHAQaD0eV2YQzbhyKIwMCEPCRQHJ2e70xwpYuqN5qMNI39vtwB2evgc8QUBE4sD5eJRdZEICAvwXySszlTs655onp1GC/Hx2cvQY+Q0BFoKzUVKCSjSwIQMDPAtljLZGiUxrox9GTchl0cLIEfkNARcDaYTjUVBOJpexUbJAFAX8KGIxEiRkdg0TntNrNf5PLoIOTJfAbAioC9RUxB1WykQUBCPhZoO/Q5v1kIJPgtBbTcVqt3IcOTimCbQjYCVR8Hx9nt4mPEIBAgAQGllgOOzn1twsuoTblfnRwShFsQ+BHAduB9XGDf9zEJwhAIFAC/Ua2JorObVB5PMll0cGJxJAf9gJtzcaylsaI6LCHAAAEAiwQGWu1xvbpEP5ns7PTcYAJNxkdXIC/OJxevwK1O2Pq9ds6tAwC4SOQNbqZl+eKEFxx7VOzaIvaPnRwairIgwARITwO/hlAQB8CzsLj2Hh6QFd4HGVr0cEpRbANARZAeBz8O4CAbgSchccxcPw3QUIHJ4BBdngLIDxOeH//uHr9CLgKj9MhGGDCV4AOTj/fI1qiIwGEx9HRl4GmhLWA0/A4Ntr9zEzaLwJCByeSQX5YC5SvQnicsP4HgIvXjYCz8Dg2oh7RA5SNRgenFMF22AtI4XHKEB4n7P8hAEAXAim5bcLwOKL5b3LD0cHJEvgNgS6BxuqoMpsNHBCAQKAFknPajhqMpDk8jrK96OCUItgOe4GqHxAeJ+z/EQBAFwJ5JZYKJw1xCI+jLIsOTimC7bAXqEB4nLD/NwAAfQi4Gx5H2Wp0cEoRbIe1QGe74VBTLcLjhPU/Aly8LgSMETZKTBcvz6UWHkfZcGHwOGXBcNpOjRtIsSH4N87cVkcNrYj+4uzfcn2lFB6nv7My2AcBCPheoO+w1ioyUK7gTKrhcZRl0cEpRYjo/KHP0vC+c1X2BHfWiqrn6JOdtwb3Rfi49ZWlCI/jY2JUDwFNAvkl5hoiYQenGh5HWTEeUSpFsB3OArb96+OFK5aHMwyuHQL+Fug/otnt8DjKNqKDU4pgO2wF2puN+1qbjAiPE7b/AnDhehGIirN2xiRahf/ZFIXHUbYfHZxSBNthK1CzM/ZY2F48LhwCOhLIGuNZeBzlJaCDU4pgO2wFKlabUsP24nHhENCRQN5Ec6OoOc7C4yiPQQenFMF2eApI4XFiC8Lz4nHVENCXQMbg1r6iFjkLj6M8Bh2cUgTbYSlgOW7c09luMITlxeOiIaAjgfiUTktkjE24/qSz8DjKy8A0gS6RSGMspcUXUEpsPjW2HaZVVS+SlTqlvRGGSIqLTKGk2BxKicunpNhsMhD+Fir/MQXzdvVmU3Mwtx9th0CoCORONO8lolGC69nlLDyO8piw7eAyTMNoUOrZlJN0KuUll1B6/JBum0923UYrKv/cva38EGGMpv6JoykvaRLlJ0+mwtSzyBSdoSyG7SASqFiN8DhB9HWhqSEs4Cw8Dhmch8dRsoRVB5eXfBqNypxHRRnnUVr8IKWF5u1OaxsdaFgr/aysep6MhggamDKFRva9iEb1u4QSooWPjzWfAwX9J4DwOP6zxpkg4EogJcdJeBwrfeXqePv9Id/BJURn0sSsa2h81q8o3UdzeK22TtpX/43089/dt0ud6Gm5N1NuUom9NT7rVKArPM5YnTYPzYJA2Ai4CI/TSRG0zB2MkO3g+iWcQmfk3UZj+19O/EhRa7LaOigpJpuGps8iAxmpzWohvmM71lxBJ1qrXVbDZTcc+pf0w3d1MwY9SAUpZ7o8DgUCJ4DwOIGzx5khYC/QFR4nzT7P7rPL8Dh2ZaWPIdfBDUgcS9ML79e0lqS5/QiV139H5ceX06HGTVTfXEYNLQfol6Pfpyn5tyutqMPaQtWNm6isfpl0t7a3filxhyhK5ce+o7+tnUqFqWfT3GHPU2bCCFFR5AdQAOFxAoiPU0PATsBZeByyufd4kqsNmQ6OIwDMHPwIjen3czsux49HLXulu6uttR/Q4cYtZCPtoZt5pGVu0qnSz9SBdxKvzr+55l1aWfUC1Zl3Op6sK2df/df059VjaHLufJpeuIBiIoVLrAnrwA7fCHSFx0H0AN/wolYIaBZwFR7HYAjDDi46IoHOKbiHTs+7jSKNMaqY3IntqP2Yllc+S3xX5U6nplphVyaPnJyU8xvpZ9eR/9Hne+6h6sYNqofwnd7yymdoW+2HNG/k63hsqark/0yEx/G/Oc4IATUBF+FxzHENVKp2nLO8oL6DG55xAc0tepGSY3OE17il5j36ct/9VNO0XVjGGzuGpp9L/MPv3z7d/XtqbD2sWm19czm9vO5smpJ3O80a/Jg0AlO1IDL9IlCxCuFx/AKNk0DAhUBBiZn/aIriv2kKj6M8RVB2cKaodPrJ8EV0SubFyuvp3q5p2kYf7viNdMfWnenGh3ZrM7W0N1CHtZVio5IoLjJZ09E8qGVYxhz6787baF3131WPsdms9G3Fk1TVUEqXj3qHEmP6qZZDps8FbAc2+GhorcamT5s2jX72s59pLO3bYvX19bRt2zZaunQpHTyoPTBuTk4O/elPf/Jt47xUe3NzM82fP1+1tuuuu44mTpyouk+U+d1339Ebb7wh2u1x/iWXXELTp0/XfPyqVavo9ddf11xejwUzRzb3EbVLWn9StNNJftB1cEUZ59PFI/6PePi/WuLOY2nZw/R12cPUaWtXK9IjLzayjzSHrSBlKmX1GUd9TUX0+Z67aPHGC3uUi44wSfvyU06nYelzqDB1KhkN6nzcGfJjyKEZs+n9bddSS8eJHnXJG+XHltPzpePpqnH/JR4cg+RfgTaLFB7H8wmRXmhuXl4ezZgxwws1ea+KBx98kJYsWUKPPPIIVVZWuqw4MTFRd9cganRjo3ANX6ljv/POOykqKkp0uEP+WWedRStXrqSysjKHfZ5m8H8YHnroIYqNjdVUhdlspvvvv19TWb0WksLjJIjD4xiN7r9/42sNmrUoeYDHhUUv0a/Gfizs3BpbD9Ff154pPZJ01rnxtAG+0/rV2E/oT1PrpN88apJXJBHdTbV1munAiXXSCievrJ9Oj32XJ3WkLR0Nwn8zPKn85lPXEK+aIko89WDRmjNoZ92noiLI95FALcLjqMoaDAaaOXMmff755zRr1izVMqGYyZ3USy+95NalcWf42GOPEZt5Kz366KOaOzc+J3eG1dWupzB5q32+qMdFeJyaJ6bRVk/OGxQdXEpcHv1m4kppMIfoIg+eWE/PlY6niuMrREWkx4zTCu+nu6fsp0tP+ae0ook7c+TsK+aOacne++jx5QNp7cFX7Xf1+JxhGko3TVxF+cmn98i33+DO8x8bf0IbD/3bPhuffSxQvsokmm/j4zMHR/Xx8fG0aNEiqbMLjhb3vpXcwbl7N1ZSUkLz5s3r/cmJ6MILL6QpU6ZorosfTb711luay+u1YF6JODwOEX1FBjeGu9tdpO47uEGp59D8kh+kx4d27e7xcffRL2jR2inEd3BqiTuxKfm/pzvPKJOG6XtzKa3m9mP03rZrpTtH0UTwuKgUunbCEmk+nFr7OI/vON/eegU6ORGQt/Nt1HZ4O8LjuGI1Go307LPPUlZWlquiIbG/ra2N7r77brev5Z577qG0tN79fyklJcWtR40Wi4XuuOMOstm0T3Vy+8L8dEBGYav6OycisnkwPUButq47OF6J5NrxSyg+ShyHckfdJ/T3DRdQe6dFvqYev7OTium3JT/QnCFPEnc0aqm54zhtr/2Ivi5/lL7Yey/xXRfPp+O5dVoTTz/g92miO8goY5z0ro0nfYsSL/nFnRzPrUPyrYDluHF3Z7v3Hiv5trWBrd1kMtFdd90V2Eb48eyrV6+m9957z60zJicn07333uvWMcrC3Emmpor/1inL86PR/fv3K7ODbjs+VQqPIxo9SYYOz96/MYQuOzhevHjusBfovKHPkMEgbiIP0vjnpkukpbSU3yqHs5k68I9088RS4QoiRyy76d1tV9PDy/pLg0q+2HMPfV32iDSY5Oej/i3d8c0vWSc9ylTWr7bNUwNeWT+TeE6cWuJOjt8h8mAWUeJO7q0tvyCeHI7kO4EDm0wtvqs99GqeM2cO9e0bPouI8wCbY8eOufVFXnTRRTR58mS3jpEL83HuPOYsLS31yehNuT3+/J030bxHdD4b0c6Fs+mAaL+rfHHv4epIH+6/ZOTfiRcrdpaOWPbQ4g0XSMtnKctFRcTTFWM+pHMH88tfx0vkSdd8p/bMqlNo3cHXVeuQ68zqM14ahHLxiFc0rWnJd5JvbLqYqhq+l6vo8ZtHY1419lNKjBEvnsHrWb6x8adkaT/a41hseE+gcnV8tvdqC/2a+FHl2WeLnz6EmgBPmeBOzt3EA0RiYtQXnBDVxeX5bkxramlpCZlHk3zNucUW4XqHnqxeYu/o+Nfffm+APnc6Wd9RbtI/N80jfrSoTLGRSXTd+C+Fa1Hy+pO8PiTfqXFHojUVZ11DFw9/RVOg0+w+E5xGLmjtbBQ+UpXbM37AlRQf1btn+nJd+N1TwGalhvpyTD7sqeJ6q6ioyHWhECrBjyn5TsmdlJ+fT7fccos7h9Ctt95KPF1Ea1q4cKGm6Rta6wtoOQNRcnZbvqgNBjfD4yjr0WUHt7LyeWU7HbY5srZaKs66mjjum1rizu0v359GFcdXqu12mTduwC9pUu5NTstxx3TdhK+E7w1bOxrpHxsvJGfTC8b2/wWdP0wccNVpA7DTpcCJQ1FlIfBe3uV1ersAD4IIp8SDN/jdY3u76/m09i433ngjDR482D5L+Jn/03D99dcL9yt3rF27NugndNtfU0pO2xGDkUT/k3c7PI593fxZfaayspSft3k9R16pn0dQitKknBulgSHK/Vtq3qc5Q59WvdOqadxK/GizN2n2kIW068jnxIs22yd+5zdr8KPSez/7fPvP/Gj0X5t/5nTZMF5+bN7I1+wPw2cvC1Sti/dyjf6pjidf8483Et9pXHHFFdSnj3DxCIfTxMXFOeRxBg+rP/fcc1X3acnMzMykv/9dfdUf5fG1tbV05ZVXKrM1b1utVs1luaA8N47vsrSmyMhI6ZEjv1NzNsKRH/s+/vjjxOW1JH40+Yc//IHcvQYtdQeqTH5JE68kkC44v9vhcZT1aJNVHuWH7W/LFzrt4AanzZAeAyo7rOMtVbT7yBdSPDdlMwemnkl858ex3TxNPFDkwqIX6dX1P06A5Xd+Pxu52OnSYXy+97ddJxyAwvu5c/vFmPcowqB9JQVPryOcj6tcYyoMxuvfvn07vfuu90bYfvjhh/Tpp5+6NalYzY3/8HLbPE0nTqiv9KNWH99N9eZcanW6yuO5cRdccAEVFBS4Ktq9v7i4mC699FJ68803u/OUH7ijHjNmjDJbuP30009TeXm5cH8w7sga3SL+Y+dBeBylgS4fUXIjdx9dQjxKUpT4jkktZhuX/7ZioephfAyHrOltGpI2k0ZmXiRVw4NFfl38rcvO7bPddwrXpuSKTsn8KTq33n4xGo7vbDdUN9VGar9t0VBnsBbZu3ev1MEFa/v91W5P58bxfLr0dPWbkwEDBkh3Y1qvYcOGDfTqq+IFJbTWo6dyxkgbJWR0CJfK6+0AE75W3XZw3Lgv9t7j9PuYkHU18SonyrSv/hvhKEZ+tJkU2/sBdOcPfVZ613fzqd8TDypxlv635y5hp8vHjR9whbToMu7cnCl6Z199eUxwr2nkHYbuWkJhHlX3xfjwgydz4/jxr2gRal5ei+cXakncwd5+++3U2dmppXjQlMkc2lpJBhK9L/AoPI7y4nXdwfEd3KbDbyvb3L3NHcL0wge7t+0/fLb7DvvN7s+8puXMQe4P/+2uoOtDcmyutHyYs1A9XPS/u35Hy8ofVx7evc0rrFwycrHqdIbuQkRS+B1+v4jUO4GKUoTH6Z1g+B7tydy4uXPnOiy9xXMKOYqE1sSPJvft26e1eNCUy59krnXSWI/C4yjr03UHx43l2Gq8VqMo8chGjrKtTLyyCMdmU0t8x8RRCXyZeOmtN7dcLgVZVTsPd84XDf+rtMKK2n77vOrGjfTi9xPpn5suptc3nNfrgTL2dYfZ54CHxwkz75C63N7MjZMH6PBd3QMPPKDZZcuWLfTKK69oLh9MBfuNaE4UtdfT8DjK+nTfwTW0HJDC1ygbLm/zezWOMsCrnyjTJ7tuEwYenTfiVeoTM0B5iFe2eUWTl9eeJVxXkpceu3r8/+jU7Btcno+XIuNoA8dbTi7Jw1EHnlk1kj7ZeStZ2utdHo8CPwp0hceJ/jEHnyDgnoAnc+M4/M1vf/tb6UQ87SAjI0PTSXlADT+a7OgQzoPWVI8eC/kqPI7yWnXfwXGDV+1/SbjGI+/n1UbOzHd8JGluq5OWveIYccpkis6Q1obkieHeTPz+77nSccK5djlJE+m3kzY6HSEqt4eDonKUgbbOJjlL+s0T1FdUPUcLlxdKd4jOQgP1ODDMNxAeJ8z/AXjh8j2dG8fBVHlaxmWXXaa5Fc899xzt2rVLc/lgKuir8DhKg6Do4LiDenvLFU4nR08vXED9E0crr0+aT/fJLvU5LBxklFc9EQVPdajMSQYv0cV3jP+37hzVqAa8ZNgZeb+jGyeuIFfv7bhD48eR/B6R16YUJV7Jhd/xPbNyJPGdHpJzAYTHce6DvdoE5Llx2kqfLMVz3Xhgida0detWKVSR1vLBVs5X4XGUDkHRwXGj65vLpbA0yguQtzkkzi9Hv09qd2Qrq16gZeVPyEV7/OZoA7eUrKGClDN75GvdsJFNetf35IohUjBU3lYmHpBy/fildN7Qp13Ocatp2k7Pl04gdwaU8KLRHFGBf0Qhg5RtCrtthMcJu6/clxfsSdw4re3hR5I8oTsUH03KBr4KjyPXL/8Omg6OG7yl5j3p0ZzceOXvtPhCKZCp2vu4/+35I321T/3lrtQBFX8jHess+rb9+XjJLQ50+vTKIukxaEPrQfvd0mejIVKaq3f75G1UkDrVYb8ygwfFvPj9qVRn9uyxBN/FLS3r/QhRZbtCYdtyDOFxQuF71Ms1eDo3Tkv7X3zxRb9PZtfSLm+VcRUepyOCvvTWuXS7konoAj/ddbu0gsmw9NmqRYoyzqOfFC2i97c7ru/25b4FVGPeTvNGvEa8qr994sEqY/tfLv0sr3yWvqt4mnKTTyUOjhobmUwtHcepqa2W9jesld4H7qr7H7Vbm+2r6PF5cNp06Y6tX8IpPfLVNlo6TtCHO24UDkpRO0aZF2mMoXMHP06n56k/jlWWD7ftA5sRHkftO+dlspA8E5Dnxl188cWeVaBy1I4dO+iFF15Q2RM6WV3hcRzfJ528xB3PnkOOdwseXn7QdXD8Turfmy+lG4uXq75zY4eJ2ddJIwz5rk2ZNh9+hw40rJU6OdFd1eHGzU5XHVHWab+dnzyZZg5+RPMjT17X8oPtNxAvMeZp4onmHGIoM2GEp1WE/HGVq0w5IX+Rbl4gr6Zx3nnnuXkUitsL8Ny4c845h7yxEDVP5A7VUZP2Zk7D45DnwU3tzyF/DroOjhvOjwc5sOhvJq4kfiyplqYOvJNiIhPpox03k/K9GL/Pe3nd2VJInWmF99OARO3rwamdi9//je73M5qccwvxOz0tie8GeY7fD9VvaCmuWoanG0wvfIAm5fzG5URx1QrCJNNmo+P1FdFBf6tSWFhIM2fO9Mq3xusqXnPNNZSYKJyK5JXzhHol8ty4p556qteXumjRItq2bVuv69F1BSfD4wwUtdFmQAcn2TS11dDf1k2lGyYsE3Zy/Ic/MbofvbPtV1KnaI/Knd622v9IEQnykifT+KwraXjG+ZpHVPJglsFp02hE3wupKOMCitW4vCEP6S/d/1f6ct/91NzuXsRguf3coU7KvpG4c46LCq8QJrKBO78bqqPKbTYa684xeix7/vnnE/8EKvGiykiOAjw3jh9TlpSUOO7UmLN7927iaQGhnrrC46gv0EnU2dxBy7xpEJR3cDIATwJftPZ0unrcZ8RD/tUSL4rMj+542P3hpq0ORbijqzi+QvrhhbDS44fQ6XnzaUCfcdJjQx6y39HZQtGRCVLnlx4/SFp7Mi1euEaowzk4g8/Dj0eX7L3P45VIuGPjeHdnDbzb5VQD1UaEaeb+tfGGML10r1728eOOAYa9eoIgrUyeG8ehjKKixIvjiy5PfjTJA1dCPeVPchoe5/sXZpP20BIasIK6g+Pr41VDOEL3z0/5Nw3LmKN6yRmmoTS/ZD0tq3iCvi57lDqs4v+J8pD7pJhsYURw1RM4yeQ7ti2H36Wvyx9xGgfOSRUUF5lMp+b8mk7PnU8cvQDJPYFgDY/j3lX6vnSoTjr2hpw8N86duHHyeV9++WXavHmzvBnSv7PHiMPjeCN6gBIv6Ds4viAehbh441yaVriAzi64RzXYKd/9nFNwH43p93P6Yu99tLnmHVJb4UQJ5Ok2v+dbX71YehzJj1M9Sf0TR1FJ9q9p3IArHEZ9elJfOB7T2W442FQXmRWO1+7Na+a7lK+//tqbVYZcXZ7EjWOEo0ePhpyF2gVxeBxTeocw1LnV6t33b9yGkOjg+EJ4dCU//qs4tpzmjXxduM4kP1q8bNSbNMPyIK2uekmapG1uP6L2fbidx1G+dxz5VLpjqzy+ymFwi5YK+d3eqMx5xKGA8pInaTkEZZwIHCmPOcSruTkpgl0aBL788kuqrkakIWdU/IhxxYoVbgVG5fp+97vfSXH5Qt03c1grR5rOFxiaG9KpVLDP4+yQ6eBkAQ6U+szKETR76JNUnHWN6t0cl02PH0znD/szzRn6lBRYlYfr87u4GpX3dHLd9r9bOhqopmkbHWrcTFUNq6n82Aqqby6zL6L5M89h4wjlY/tfJg1a4ZA+SN4RqCqNF8Wb8s4JwqAW/sP9+OPikE9hQKDpEocPH+7WWpNypfHx8fTwww/T1VdfLWeF5O/8EnOdsIMz0LKXJ1C7ty885Do4BuI1Gt/fdh2tPfAKzR7yJA1MOUPoxquNFKaeJf3IhTh+2+r1i6RpBjERCdRhbZUmdfN6kw2tB6ixtYYs7b17rMCjLjkyOI/CHJZxnuZRmHIb8VuTgG3/D/HCRyKaakAh4sjUoRiPzJtfLa81+cwzzxD/9iTxXLrZs2fTZ5995snhQXFMv5HNfYQN9cHjST6XZ9+GsJX62lHV8D39de0UGpo+i6bm36lpuSy+gsa2Gtp99AuvXgyvlMKLQQ9Km0bD0s+lgSlTiDtXJN8JcHicNrPRveGuvmtO0NXMayHec8899O677wZd2/3d4BtvvJGKiop6ddoHH3yQli9fTo2Njb2qR48HS+FxTFbhfzatXp7/JhuExV9YfvzIPzyhmx9b8pJcvp4/xp0Xn49XNslPOV3qXE1Roukf8teB394UqNkRi4B5HoKWlpZKgTm3b9/uYQ3hc9igQYO647315qo5ThzHi+M75lBL2WOb9xDRMI8MuUQAABqrSURBVMF1HX5qJjnO4RIUdic7LDo4GYQjY3+08xbi8DkFKVNpaPq5NCjtHOqfMKpXK4Hw48a+puHSfLusPuOk+HQDEkcT3qXJ8oH5XbHaFFL/o6isrKRDh3jMjPPEUaP5fZDW1NDQQLwG4okTJ6RFfnk+V8ivqKEVx0W5iIgI4lVMPJn/plY1x4t7//33af369Wq7gzYvv8QsvC31VvRuNZyw6uBkAB5xubd+qfTDebzwMg/JzzSNoJS4fEqJzaMJWVf1WGmE47nxfLT4qHQyRadRUmwOpcTmU2pcPuamybB6+m2j1sPbYwv01KTetmXx4sX06quvuqyG3wN98cUXxHcWWlJsbCz9/ve/p/37T0aN13IMypwUuOqqq2jsWPVFJjwxMhgM9MQTT9CsWbNCKlxOemFrP5GHwcvrT9qfJyw7OHsA/tzWaabK46ulH96+csx/sCq/EinIti3HjHs62w0jg6zZXmkuvzu777776M0339RUX0xMDC1YsEBam1LTASgkCeTn50tx27zNMXjwYOJ3eqESVSA+tcMcEW0TLnbeHun9+W/ydxJU8eDkRuM3BFwJhHt4nFWrVtFHH33kiql7/7Rp0+jss8/u3sYH5wLynRbf/foizZ8/n7gDDYWUN9Gy18l1eDU8jvI86OCUItgOCQGExyFpbpXZbNb8fT7wwAPEd3NIrgUuv/xytxZXPnDggOtK7UpER0fTY489RtyRBnvyZ3gcpRU6OKUItoNeIFTC4/T2i6itraVnn31WczW5ubn061//WnP5cC3IcfTcGem4ZcsWmjt3rttLcp122mn005/+NLiZ/RweR4mFDk4pgu2gF+gKjxP01+GNC3j99deJQ7FoTTfddBPl5Ahfl2itJqTL8Z2VyWTSdI0cKeDOO++kI0eOSNMuNB1kV+jee++l1NRUu5zg+tgVHkd0AV4Pj6PUQQenFMF20AsgPM6PX6E8WfvHHOef5AEnzkuF79558+bR1KlTNQNwpAB5ygW/E/322281H8sFOVI4DxgK1tQVHkfUfK+Hx1GeCKMolSJE9E35Y7Su+u8qe4I766hlX3BfgMbWIzxOT6g1a9bQBx98QBdddFHPHYItHnDCf8SXLfNq7EnB2YInmydi8x2V1lRRUeHwiJgfbS5dupTcGZzC3xsHVV25cqXWU+umnL/D4ygvHB2cUoSIeIkvpOAUQHgc9e/tkUceoRkzZlBCQoJ6AUUuDziZPn06hUMQTsWlCzfZMDk5WbhfuYMfTba2tvbI5sEmPDHcnY6SK+DHovx9KOvrUbnONgIRHkdJgEeUShFsB7XA0bIYxHRR+Qb5HRD/YdWaeIj6DTfcoLV4yJebM2cOzZw5U/N1vvXWW8TLnaklfi+6dat7K1Pl5eURTx0IptQVHidO0GafhMdRngsdnFIE20EtUF4ar+3tf1BfpWeNf+ONN6QlubQeffPNN1NWFkLp8Xuwhx56SCsb1dXVEd/tiRK/F/3jH/9IPADFncQjXIcMGeLOIQEtO/C0plphA3wUHkd5PnRwShFsB7OA9eAGhMcRfYH8h9Wd4e38nuj+++8XVRc2+fy4Ni0tTfP18uNHXtfTWeKpA6+99pqzIg77eAk2XsbLaAyOP9t9i1rEz3N9FB5HiRYcUspWYxsCKgJtZik8TpTKLmR1Cfzwww/0zjvvaPbgx3LujBrUXHGQFOTVXXgOm9bEa4B+/vnnmopz/LiDBw9qKisXGjduHPEkc72n6HhrR2yCVbgYqq/C4yhd0MEpRbAdtAI1O2KPBW3j/dhwjs7t6g7Dvjl8B8Mra4RbSkxMdCuSOcdxc2fwiMViceuOWvbnx5t9+/aVN3X5O+tkeBxR/+Kz8DhKDFEDlOWwDQHdC5SvNmXovpE6aODRo0fpySef1NyScB1wwp1VZmamZid+78arx7iTeCrGxx9/7M4h0khYDo6q55R/qrlJ1D5fhsdRnhMdnFIE28EpYKOWmh2xA4Oz8f5v9b/+9S/i90BaU7gNOJk8eTJdeumlWnmkEZM8ctKTxJEcOCafO+ncc88lnq+o15Re2Npf2DYbfSnc5+Ud6OC8DIrqAiNgORa5t7M9+Bem9Zcej+DjFTJsNpumU4bTgBNehmvhwoWaXLgQzxXkx4ZaLZUV8x31ww8/rMx2uc0jO7UuGeayMi8WMKVJ4XGyRVUajL4Lj6M8Z0Ameg9IHEsFqWcq2+J0u7XjBB1vqaI68y463iIOzDi2/y/IFO0YyLmprZY2Hvq303PwzuykYspPnuxQztxWRxsO/UvKH5I2g/omOEZMrjpeSlUNP859Kc66mmIi+zjU1SPDZqOWjgZqtzYTt/GIeTc1tLp+8WyKzqCx/R1fNndYW6l0/6IepxBtJMfm0MhM54u5rt7/F+q0tomq0E3+gY1xLbppTJA0ZMOGDfT2229rvlORB5yE+gonHPw1O1v499nh2+UFrcvLyx3y3cl49913pZVmJk2apPkwXvT59ttvJ709rsw9GR5ntNqFGAy0/YkZ5Le5qgHp4LhzO3+o9lXOlVBHLHtoS817tKLyz1KnYL9/YMrpdGq24wRV/sO/rfY/1N5psS/u8PnsgXfTiL4XOuSvqnqxu4Mb0/8yGj/gSocyX+17oEcHd07BnyglLs+hnKuMY82VtLnmbVpZ9QI1tKiH2UiKyVI15M5Sawc3OXc+Tcn/vdPm8PnZWu+pstSEFYI9+JJ42Dk/7kpKStJ0dKivcFJcXEwcpVtr2r59O/F6k71NfPfHUzh4FKY7A3q4rR9++KFbj5t721ZXx+cVWzpEZWw2/929cRuC8hFlevxgOmvgXfSH03c7dEZbaz5QtY00xtCgVOcBHbnM4LTpqsdvqX1fNd8Xmdwpnpl/h3R9k3J+44tTUIQxWrWTVp7s1OzrlVm627ZZ6Vh9RbT20QC6u4LANai+vt6tkYKhPOCEF5rmR5NaY7DJkQJ4fqE3UllZGT3//PNuVcVz4vg/KTxHThfJQJSU1SZ8F24gdHCav6fYyCT65ej3aVjGnO5j9tV/Q83t6qPFh6Q5X2qnIOVMio5wXAiDH09WHFvefQ5/fYgyxtGFRS/ROQXaF3jV2rbhGRcQP+Z0lQalTaPUuAJXxQK6v+FQVLnGV0kBbadeT86DIzZu3Ki5eaE64OS2226jggLt/9Z5ovbmzZs1u2kpuGjRIrfCG3GdI0aMcOuuU0s7PC2TmttWZzCSMDyOrYX8uoJ3UN7B2eMbDEa6ZMTrFB1xchHZTls77aj7r32R7s9D08/t/qz2YVjGeWrZ0qNNq829ZXVUK/Iwc8agh2hY+mwPj1Y/TO3OrK3TcWSvgQw0Mfta9Up0klu51hT0/44DSWm1WsN+wMmoUaPo+uu1P62oqqqip59+2utfG98N8iLN7g5Y4XdxelhWLX+SudIJSunCudToZL/Xd+nkvvbkdfH7o+rGnv+TjDTGUkJ0htO7CL4T4T/C/E6OE78zGjfglw5YafGFlBY/iI5a9jrs44zhGeer5m+tVX/sqVpYQ+aSvffR4aaTi63y9fFgj4EpU4g7YKMhQrWG2UOepJ1HPlPd525mSlw+8Z2ZMn1T/jhNzLqWeL994sEyS/b+iaw27zyKsa/bG5/3r4kXrpjgjfp9WUdlZSUtWbJE0ym4rK8S34nw3LgxY8ZoOgU/xuPAqPv3iwd8aaqIiJqbmzUb8IhDXyReqZ/D2GhNr776qtRureXdKcerzfCj0rFjx7pzmDRtYPHixW4d4+3CWWOana0I8JW3z+eqPl11cNy5/W2tejDB5Nhcmj3kCRrdT31uyimZF3d3cHuOfkltnWbVx418J7SyyvE5d2bCcIc/7IzHjzv3HtX+D98VOO8vP76Cyup73ql/W/EkZZiG0S9Gv0P9Ek5xqIbbl5M0kfY3rHHY525GcdY1xHdm9slGNlpfvZi4w1U+Ek2IzqSijPOkO1n7Y/TwOdjD43z11VfEP3pIL730UkCawZ3WddddF5Bzyyf1xd2YXLcnv//yl794clhAj5HC46R2CFeD9uf0ABkiaB7t8BSBNzdfRruPqv9vl//4Gw0n+2seci+62xE9phyWrv54cueRT4kfe/oj1Zl30ivrZ5ClXf1/qSP7/qTXzeA7RL4jU6Y9R5dIIzZ/qH5DuUvaVnukqVrQz5kIj+NncJwOAgKBzGEtFWSgWMHuprhI+nEOlaCQt7ODpoPjC+e7jBWV6tMLIgxR0qM+GUg0mrIwdap0lyKXk38X2Q1UkfP496bD2hemtT/O08+NrYfp2wr1uF1ZfSZ4Wm33cUPTZ1OfmAHd2/KHdQdPRjA/Ytmtepc4JH2WR1Me5Pp99RvhcXwli3oh4J7AwNPMztYpW7bgLPL7O46g6uCYe1/9MqmjU6PnUZVyku68VCYo8yM4Hi1pn+KiUig/+XT7LOkzP+bce9T/j492CgbJ9EsY6dBGdzPUBozwu0+eIyin9dX/kD92/+ZHmsVZuhtsgvA43d8QPkAgsALOwuPYDP6dHiBLBF0H12FtoRMtrlf6aO1oFD7OHJrRczQlP7bk0ZjKxKMx+XGnv1OdZbfqKeOixOGVVA9QZPKd27D0H6dUyLs3HX6L2FVOmw+/rTqgZMKAXwkHwcjH+vM3wuP4UxvngoBYwFV4HKOf4r8pW+j4V11ZQofbondUyqba35XY7xummC5QpPJHn8tvq/3Q/jC/fealsdRGLPLdZ2/ShKyrVDuodQdf71Gtuf0I7az7tEcebyTFZhM/4tRLQngcvXwTaEe4C7gIj3PoiVm0LRBGQdnBaV0bkTsom83q4JoeP6R72gEPulAbeMJ3NDtU/sg7VOaDDJ7gLQ+Ysa++N4Nd+A6VR08qU615B1U1fK/Mph8O6X+wCcLjOHxtyIBAQASchcehAD2eZIig7ODarM7Xk5S/YUt7PZUd6zkcX94nd2p5yacRv4NTJh6tqTbxWVnOF9v9E1XXKRWu0KKlDbxMWWqc4wo68uASZR38eLa547gyW5pwzvP2Ap4QHifgXwEaAAFZwFl4HFuAHk9y23Q1D07G8ubvLTUfUKHKGpRD02fS6v0vSfO71M4XyAWGeU6fWjrWXKGWrSlvomBNyfioVDo971bVOo43V1FcYs/3fnwnyI86v9oX2ICLluORezrbDY4TBlWvBJkQgICvBExpHU0R0TZh+IVAzH+TrzXkOzh+TDm36AWHic2DUs8hXlxZbf4bv//aXutelF0ZtLe/BySOodNyb1Ktprpxg2q+q0xTVDqNyJirWmzqwDtV851l8qPOpWUPqz7+dXacN/cd2BDX6s36UBcEIOCZQFd4HNUlcPwdHkd5BUH5iFJ5Ec62T7RW036Vd0xREfE0rv8viVcIUaa99UulGG3KfF9u853RKZk/pWvHL1Gdp8fnLvdwwefxWVdK0QO81X5eVWZo2ixvVedRPRWrTbkeHYiDIAABrwrkTbA4DnToOoO/w+MoLyzk7+D4gvlxY25SifLaadaQxxzypPKHfRv/jIfbF6acXJKMw9bIa1FyxyFKPO1he51nd5W8vqS3E69solwthufK8VQEfnfHcwh9laTwOJXRfX1VP+qFAAQ0CnB4nGz9hMdRtjosOjieLjBniOPqIPzoTpl41KWnHYmyLtG2WrBUUVk5/7vKp4g7OXfTwJQzpDUulceVHfuW1netXqLcZ7+dGl/osDYl7+fIC4kx/amx9ZBUPKvPeJpeuEBayDopNof4feFne+7wyWPMhgPR5WQjx5FB9g3HZwhAwOcCqXlttQYjif6z2env8DjKCw6LDu6oZR8datxEotGJ9ij8h7+pzdmKM/al/fN5R90n9HXZox6dTLT6yKqqF2hLjesgrrwE2mk5NzmMNJXWtBxwFX1d/qj0SHVawX207uBrdGrODVTTtJ2ONu8lDtbKkdC9nSrXxYf8o3Vvm6E+CPhCIH+SuYpI2MH5PTyO8hrD5g+Flj/mjBOoyd3KL4a3ee3NlVUv0BubLlad+K12jH1eXGQyjeo3zz5L+tzScULzHD+ee7dVMOG9OPtaaQUYXuh6W91HxEulHTHvoZF9L6L1BxfT4FTHkDwOjfEgo2pt8IbH8eBycQgEdCuQPbY5xknj/L/OoaIxYdPBaem4uEPR2hEqHL22yYFVOaoAT2F4bvVY+njnfNI6sV3ZiDH9LyOeNK5MO+o+7rE0l3K/cntLzbvKLGmb59VxJ9Zpbe0+T5/YLKo1bycyGIRrhqpWpjGzs91wwHwk8mR0W43HoBgEIOB9AQ6PE5/cMVhUcyCnB8htMiz4hhIsbf6NssoBSpNisuQ2dP9u7WwSBiPtLkQkBS2N6YrgbZ9fZ97ldO1IfkSpjINmfzxPD5ADkdrnKz/zYBCeP6ZMjW2HiaMByIlHaEYYnMX/k0sSccfGS5DxMllaOjTuuDJMQ3+soOsT13O4aYu0lRKXR3GRjq+qGloOSOdxOFiQwauqiBZ65ms2t9XRL0a/Rz9U/4MaWg9K8w554Ez5se9o0+G3BbV6ll2zM3btN0/3LfbsaBwFAQh4S2DAqObyKbfUOa4ecfIETfHRlBKICAL21xeQDs6+AfgcGgI8enLW4McoKiJOelTJd8yl+//q9Ytb84/UHWXLE4q8XjEqhAAE3BI47YYja3InWCYKDvrvwpl0vmCf37LDYpCJ3zTD+EQ83/CdrVf6WsB6YD3ev/kaGfVDQItA5rAWx8dDXQcGKjyOst1h8w5OeeHYDj6B1ibjvjaLMSr4Wo4WQyC0BKLjre0xCdZC0VUFKjyOsj3o4JQi2NatQM3O2GO6bRwaBoEwEsgeb9nrZLH+gIXHUX4F6OCUItjWrUDFalOGbhuHhkEgjATyJlqahJcbwPA4yjahg1OKYFufAjZqObw9VjRiS59tRqsgEKICzsLjkJW+1Mtlo4PTyzeBdjgV4PA41g6D0zLYCQEI+F7AlN7RFBElDo8TSRTwCd6yAjo4WQK/dS2A8Di6/nrQuDASyC2W3r+Jrnjbo7Po5AK1ohJ+zEcH50dsnMpzAYTH8dwOR0LAmwLOwuMYbPq5e+NrRgfnzW8edflEAOFxfMKKSiHgvoCL8DhWHQ0w4YtDB+f+V4wj/CzQFR7Hz2fF6SAAAaVAV3gc0QTvDlM0LVMeE8htdHCB1Me5NQkgPI4mJhSCgM8FusLjqJ/HRqULziLx9AH1o3yaiw7Op7yo3BsCVWvihSuWe6N+1AEBCGgTcBoeR2ePJ/mK0MFp+15RKkACnW2GA+ajkaYAnR6nhQAEugQiopyHx9HL+pP2Xxg6OHsNfNadwJF9MboZcqw7HDQIAn4UyCxqKScDxQpO2WiKou8F+wKWjQ4uYPQ4sRaBiu9NCG6qBQplIOBjgYGTzHWiU9iIlgU69pta29DBqakgTy8C1oMb4vD+TS/fBtoR1gKZReLwOAYdrV5i/yWhg7PXwGddCbQ0Gfe2WYyIWairbwWNCUeBaJO1PdokDo/T2amvCd7yd4QOTpbAb90J1O6IPa67RqFBEAhDgayxlj1OBiVWPz2btuuRBR2cHr8VtEkSKF9l6gsKCEAg8AIDSyxmUSv0+niS24sOTvStIT+wAjZqqdkZmx/YRuDsEIAAC6QVtA4QSdh0tv6kfTvRwdlr4LNuBMz1kbsRHkc3XwcaEsYCCRlSeJwsEYGewuMo24gOTimCbV0IHNwY16aLhqAREAhzgZyJwRMeR/lVoYNTimBbFwIVq015umgIGgGBMBfIKzZbRQR6C4+jbCc6OKUItgMuYLNSfX1VdEbAG4IGQCDMBQwcHqd/+0ARg97C4yjbiQ5OKYLtgAs0HIwuJ1vAm4EGQCDsBVLz22oMRgqa8DjKLyxywVQy37pMeAHK8tiGgM8FDq6PMxiNRnRxPpfGCSDgXMCU0Gxoi1b/72ZnM1kX6iw8jvOrwV4IQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQg4HOB/wf0c0+pJhRguwAAAABJRU5ErkJggg=="
        ></image>
      </defs>
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
  ShopingCart,
  UserIcon,
  Magnfier,
  PriceTag,
  DropUser,
  SupportHeadset,
  MessageIcon,
  CloseIcon,
  ArrowDown2,
  HeartLike,
  Comparison,
  NovelLetter,
  ZipIcon,
  PayPalIconSvg , 
  LongArrow , 
  IntelIconSvg , 
  GraphicRtxIcon , 
};
