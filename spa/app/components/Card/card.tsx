import { faPenToSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "./card-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageIcon from "@/public/icons/logo";
import { adjustBrightness } from "@/app/services/colorPaletteProvider";
import { displayRating } from "@/app/services/ratingProvider";

export default function Card({ user }: CardProps) {
  var light = adjustBrightness(user?.teamColor, 1.1);
  var lighter = adjustBrightness(user?.teamColor, 1.2);
  var dark = adjustBrightness(user?.teamColor, 0.9);
  var darker = adjustBrightness(user?.teamColor, 0.8);

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
                color: light,
                textShadow: "2px 2px 1px " + darker,
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
              className="w-5/12 p-2"
              style={{
                backgroundColor: user?.teamColor,
                boxShadow: "5px 0px 20px -10px black",
              }}
            >
              <div className="flex flex-col" style={{ color: "black" }}>
                <img
                  src={user?.image.data}
                  style={{
                    borderRadius: "50%",
                    boxShadow: "4px 4px 5px" + darker,
                  }}
                  className="w-10/12 m-auto"
                />
                <div className="text-xl" style={{ backgroundColor: darker }}>
                  {user?.name}
                </div>
                <div className="text-2xl">"{user?.nickname}"</div>
                <div className="text-xl">{user?.surname}</div>
                <div className="text-xl pt-10">Stats</div>
                {/* <div className="text-l" style={{ backgroundColor: lighter }}>
                  Age: {user?.age}
                </div>
                <div className="text-l " style={{ backgroundColor: light }}>
                  Height: {user?.height}
                </div>
                <div className="text-l">Weight: {user?.weight}</div>
                <div className="text-l flex text-center">
                  Range:
                  {displayRating(
                    user.armRange,
                    5,
                    undefined,
                    "gold",
                    undefined,
                    darker
                  )}
                </div>
                <div className="text-l flex">
                  Speed:{" "}
                  {displayRating(
                    user.speed,
                    5,
                    undefined,
                    "gold",
                    undefined,
                    darker
                  )}
                </div>
                <div className="text-l flex">
                  Jump:
                  {displayRating(
                    user.jumpHeight,
                    5,
                    undefined,
                    "gold",
                    undefined,
                    darker
                  )}
                </div> */}
                <div className="grid grid-cols-3 w-12/12 text-sm">
                  <div className="text-l flex ">Range</div>
                  <div className="col-span-2 flex items-center">
                    {displayRating(
                      user.armRange,
                      5,
                      undefined,
                      "gold",
                      undefined,
                      darker
                    )}
                  </div>
                  <div className="text-l flex ">Speed</div>
                  <div className="col-span-2 flex items-center">
                    {displayRating(
                      user.speed,
                      5,
                      undefined,
                      "gold",
                      undefined,
                      darker
                    )}
                  </div>
                  <div className="text-l flex ">Jump</div>
                  <div className="col-span-2 flex items-center">
                    {displayRating(
                      user.jumpHeight,
                      5,
                      undefined,
                      "gold",
                      undefined,
                      darker
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div
              className=" w-7/12 px-5 pt-3 flex flex-col"
              style={{ color: "black" }}
            >
              <div className="h-3rem text-2xl font-medium">Description</div>
              <div className="italic"> {user?.description}</div>
            </div>
          </div>
          <div className="h-12 flex mx-2 my-1">
            <div
              className="w-10/12 flex pl-16 text-sm"
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
