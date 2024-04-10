import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "./card-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({ user }: CardProps) {
  return (
    <div className="card p-2">
      <div className="flex flex-col h-full">
        <div className="h-12 flex grid-nogutter">
          <div
            className="w-full flex font-bold text-2xl pl-8"
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            Personal Card
          </div>
          <div className="h-12 w-12 flex justify-center items-center hover:cursor-pointer">
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ fontSize: "2rem", color: "black" }}
            />
          </div>
        </div>
        <div className="flex-grow flex">
          <div className="w-4/12 p-2" style={{ backgroundColor: "bisque" }}>
            <div className="flex flex-col" style={{ color: "black" }}>
              <img
                src={user?.image.data}
                style={{ borderRadius: "50%" }}
                className="w-full"
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
          <div className="bg-red-300 w-8/12 p-3 ">{user?.description}</div>
        </div>
        <div className=" h-12 bg-green-500">footer</div>
      </div>
    </div>
  );
}
