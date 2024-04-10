import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "./card-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageIcon from "@/public/icons/logo";

export default function Card({ user }: CardProps) {
  return (
    user && (
      <div className="card shadow-xl">
        <div className="flex flex-col h-full">
          <div className="h-12 flex grid-nogutter m-1">
            <div
              className="w-full flex font-bold text-2xl pl-8"
              style={{
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
            >
              SPA Card
            </div>
            <div className="h-12 w-12 flex justify-center items-center hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ fontSize: "2rem", color: "black" }}
              />
            </div>
          </div>
          <div className="flex-grow flex">
            <div
              className="w-4/12 p-2 shadow"
              style={{ backgroundColor: user?.teamColor }}
            >
              <div className="flex flex-col" style={{ color: "black" }}>
                <img
                  src={user?.image.data}
                  style={{ borderRadius: "50%" }}
                  className="w-full shadow"
                />
                <div className="text-xl">{user?.name}</div>
                <div className="text-2xl">"{user?.nickname}"</div>
                <div className="text-xl">{user?.surname}</div>
                <div className="text-xl pt-10">Stats</div>
                <div className="text-l">Age: {user?.age}</div>
                <div className="text-l">Height: {user?.height}</div>
                <div className="text-l">Weight: {user?.weight}</div>
                <div className="text-l">Arm Range: {user?.armRange}</div>
                <div className="text-l">Speed: {user?.speed}</div>
              </div>
            </div>
            <div
              className=" w-8/12 px-5 pt-3 flex flex-col"
              style={{ color: "black" }}
            >
              <div className="h-3rem text-2xl font-medium">Description</div>
              <div className="italic"> {user?.description}</div>
            </div>
          </div>
          <div className="h-12 flex">
            <div
              className="w-10/12 flex pl-8 text-sm"
              style={{
                justifyContent: "center",
                alignItems: "center",
                color: "black",
              }}
            >
              Copyright 2024
            </div>
            <div className="w-2/12 flex justify-end">
              <PageIcon opacity="0.5" backgroundColor="none" />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
