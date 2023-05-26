let Icon = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "41"}
      height={size ? size : "41"}
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
function ArrowDown({ color, size }) {
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
        strokeWidth="1"
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
export function ArrowUp({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "6"}
      height={size ? size : "6"}
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


export function DeleteIcon() {
  return (
    <svg
      className="text-center w-full"
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      fill="none"
      viewBox="0 0 27 27"
    >
      <circle
        cx="13.488"
        cy="13.488"
        r="12.488"
        fill="#fff"
        stroke="#CACDD8"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#A2A2A2"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9.442 9.442l8.767 8.767M18.209 9.442l-8.767 8.767"
      ></path>
    </svg>
  );
}
export function EditIcon() {
  return (
    <svg
    className="text-center w-full"
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      fill="none"
      viewBox="0 0 27 27"
    >
      <circle
        cx="13.5"
        cy="13.5"
        r="12.5"
        fill="#fff"
        stroke="#CACDD8"
        strokeWidth="2"
      ></circle>
      <path
        fill="#A1A1A1"
        d="M8.163 19.904h.075l3.462-.316a1.66 1.66 0 001.004-.473l7.471-7.471a1.594 1.594 0 00-.058-2.25L17.843 7.12a1.66 1.66 0 00-2.208-.059l-7.472 7.472a1.66 1.66 0 00-.473 1.004L7.333 19a.83.83 0 00.83.905zM16.69 8.282l2.266 2.266-1.66 1.619-2.225-2.225 1.619-1.66zM9.3 15.678l4.673-4.64 2.242 2.241-4.65 4.65-2.49.232.225-2.483z"
      ></path>
    </svg>
  );
}

const FillHeart = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "12"}
      height={size ? size : "12"}
      fill="none"
      viewBox="0 0 11 10"
    >
      <path
        fill={color ? color : "white"}
        d="M5.315 1.727C3.624-.795.2.58.2 3.327c0 2.062 4.694 5.29 5.115 5.71.425-.42 4.885-3.648 4.885-5.71 0-2.727-3.19-4.122-4.885-1.6z"
      ></path>
    </svg>
  );
};

const FillStar = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "14"}
      height={size ? size : "14"}
      fill="none"
      viewBox="0 0 14 13"
    >
      <path
        fill={color ? color : "#fff"}
        d="M6.701.418a.2.2 0 01.367 0L8.7 4.146a.2.2 0 00.163.119l4.05.401a.2.2 0 01.114.349L9.988 7.72a.2.2 0 00-.063.192l.87 3.976a.2.2 0 01-.297.216l-3.513-2.056a.2.2 0 00-.202 0l-3.512 2.056a.2.2 0 01-.297-.216l.87-3.976a.2.2 0 00-.062-.192L.74 5.015a.2.2 0 01.113-.349l4.05-.401a.2.2 0 00.164-.119L6.7.418z"
      ></path>
    </svg>
  );
};

const Truck = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "13"}
      height={size ? size : "10"}
      fill="none"
      viewBox="0 0 13 10"
    >
      <path
        fill={color ? color : "#fff"}
        d="M1.136.8A1.136 1.136 0 000 1.936v6.25h1.136a1.705 1.705 0 003.41 0h3.409a1.705 1.705 0 103.409 0H12.5v-2.84l-1.704-2.273H9.09V.8H1.136zm7.955 3.125h1.42l1.12 1.42H9.09v-1.42zm-6.25 3.41a.852.852 0 110 1.704.852.852 0 010-1.705zm6.818 0a.852.852 0 110 1.703.852.852 0 010-1.704z"
      ></path>
    </svg>
  );
};

export function GridViewIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path fill="#fff" d="M0 0H40V40H0z"></path>
      <path fill="#000" d="M10 10H14.762V14.762H10z"></path>
      <path fill="#000" d="M10 17.619H14.762V22.381H10z"></path>
      <path fill="#000" d="M10 25.238H14.762V30H10z"></path>
      <path fill="#000" d="M17.619 17.619H22.381V22.381H17.619z"></path>
      <path fill="#000" d="M17.619 25.238H22.381V30H17.619z"></path>
      <path fill="#000" d="M17.619 10H22.381V14.762H17.619z"></path>
      <path fill="#000" d="M25.238 17.619H30V22.381H25.238z"></path>
      <path fill="#000" d="M25.238 25.238H30V30H25.238z"></path>
      <path fill="#000" d="M25.238 10H30V14.762H25.238z"></path>
    </svg>
  );
}
export function ListViewIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <path fill="#fff" d="M0 0H40V40H0z"></path>
      <path fill="#A2A6B0" d="M9 25.334H17.810000000000002V27.977H9z"></path>
      <path fill="#A2A6B0" d="M9 13H30.143V15.643H9z"></path>
      <path fill="#A2A6B0" d="M9 19.167H24.857V21.810000000000002H9z"></path>
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
  PayPalIconSvg,
  LongArrow,
  IntelIconSvg,
  FillHeart,
  FillStar,
  Truck,
};
