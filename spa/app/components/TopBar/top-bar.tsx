import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { TopBarProps } from "./top-bar.props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBar({ onReset }: TopBarProps) {
  return (
    <div
      className="w-full flex flex-row-reverse"
      style={{ zIndex: "100", backgroundColor: "black", height: "2rem" }}
    >
      <div
        className=" flex h-8 w-8 justify-center items-center hover:cursor-pointer"
        style={{ color: "white" }}
      >
        <FontAwesomeIcon
          icon={faRotateLeft}
          style={{ height: "1.75rem" }}
          onClick={onReset}
        />
      </div>
    </div>
  );
}
