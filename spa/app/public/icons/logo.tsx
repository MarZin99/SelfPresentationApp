import { IconInterface } from "@/app/interfaces/icon.interface";

const PageIcon = ({ width = 48, height = 48 }: IconInterface) => {
  return (
    <svg height={height} width={width} viewBox="0 0 470 470">
      <rect width="470" height="430" fill="darkblue" />
      <g
        fill="#3A3A3A"
        stroke="grey"
        strokeWidth="0px"
        transform="translate(30, 30)"
      >
        <path d="M60 350 l0 -300 l100 0 l0 300" />
        <path d="M220 300 l0 -190 l60 -60 l100 0 l0 300 l-100 0 l0 -110 " />
      </g>
      <g fill="white" stroke="white" strokeWidth="0px">
        <path d="M60 350 l0 -300 l100 0 l0 300" />
        <path d="M220 300 l0 -190 l60 -60 l100 0 l0 300 l-100 0 l0 -110 " />
      </g>
    </svg>
  );
};

export default PageIcon;