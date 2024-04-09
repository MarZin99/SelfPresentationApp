import { IconInterface } from "@/app/interfaces/icon-interface";

const PageIcon = ({color, width, height} : IconInterface) => {
    return (
        <svg  height={height} width={width}
            viewBox="0 0 700 700">
            <path d="M0 0L700 0L700 700L0 700 L0 0"/>

            <path name="M" d="M60 500 l60 -250 l40 0 l-60 250 l-40 0" stroke="white" strokeWidth="1px" fill={color} />
            <g transform="translate(80 0)"><path name="M" d="M60 500 l60 -250 l40 0 l-60 250 l-40 0" stroke="white" strokeWidth="1px" fill={color} /></g>
            <g transform="translate(160 0)"><path name="M" d="M60 500 l60 -250 l40 0 l-60 250 l-40 0" stroke="white" strokeWidth="1px" fill={color} /></g>




            {/* <path name="M" d="M60 500 L120 250 M150 500 L210 250 M240 500 L300 250" stroke="white" strokeWidth="50px" /> */}
            {/* <path name="Z" d="M140 130 L400 130" stroke="white" strokeWidth="50px" /> */}
        </svg>
    )
};

export default PageIcon