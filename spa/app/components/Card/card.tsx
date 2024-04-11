import { faPenToSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import { CardProps } from "./card-props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageIcon from "@/public/icons/logo";
import { adjustBrightness } from "@/app/services/colorPaletteProvider";
import { displayRating } from "@/app/services/ratingProvider";
import { motion } from "framer-motion";
import useDisplaySize from "@/app/services/windowSizeProvider";

export default function Card({ user, zIndex }: CardProps) {
  let light = adjustBrightness(user?.teamColor, 1.1);
  var lighter = adjustBrightness(user?.teamColor, 1.2);
  var dark = adjustBrightness(user?.teamColor, 0.9);
  var darker = adjustBrightness(user?.teamColor, 0.8);

  const { height, width } = useDisplaySize();
  const cardHeight = 600;
  const cardWidth = 400;

  var cardScale = 0.5;

  return (
    user && (
      <motion.div
        drag
        dragConstraints={{
          left: -width / 2 + cardWidth / (2 / cardScale) + 20,
          right: width / 2 - cardWidth / (2 / cardScale) - 10,
          top: -height / 2 + cardHeight / (2 / cardScale) + 10,
          bottom: height / 2 - cardHeight / (2 / cardScale) - 10,
        }}
        className="card shadow-xl absolute"
        style={{ zIndex: 10 * zIndex, scale: cardScale }}
      >
        <div className="flex flex-col h-full">
          <div
            className="h-12 flex grid-nogutter m-1"
            style={{
              boxShadow: "0px 0px  20px -5px #6D6D6D",
              margin: "0px 0px 0px 0px",
              borderRadius: "30px 30px 0px 0px ",
            }}
          >
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
            <div className="h-12 w-12 pr-2 flex justify-center items-center hover:cursor-pointer">
              <FontAwesomeIcon
                icon={faPenToSquare}
                style={{ fontSize: "2rem", color: "black" }}
              />
            </div>
          </div>
          <div className="flex-grow flex">
            <div
              className="w-5/12"
              style={{
                backgroundColor: user?.teamColor,
                boxShadow: "0px 0px  20px -5px #6D6D6D",
                marginLeft: "-10px",
              }}
            >
              <div
                className="flex flex-col relative overflow-hidden"
                style={{ color: "black" }}
              >
                <div
                  className=" absolute overflow-hidden"
                  style={{
                    height: "155px",
                    width: "100%",
                    boxShadow: "0px -30px 50px 10px black",
                  }}
                >
                  <div
                    className="z-10 absolute w-full flex flex-col "
                    style={{
                      transform: "rotate(45deg)",
                      marginTop: "-50px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: lighter,
                        height: "50px",
                        width: "300px",
                        marginLeft: "-50px",
                        boxShadow: "0px -25px 50px 5px black",
                        zIndex: 5,
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: light,
                        height: "50px",
                        width: "300px",
                        marginLeft: "-50px",
                        boxShadow: "0px -25px 50px 5px black",
                        zIndex: 4,
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: user.teamColor,
                        height: "50px",
                        width: "300px",
                        marginLeft: "-50px",
                        boxShadow: "0px -25px 50px 5px black",
                        zIndex: 3,
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: dark,
                        height: "50px",
                        width: "300px",
                        marginLeft: "-50px",
                        boxShadow: "0px -25px 50px 5px black",
                        zIndex: 2,
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: darker,
                        height: "50px",
                        width: "300px",
                        marginLeft: "-50px",
                      }}
                    ></div>
                  </div>
                </div>

                <img
                  src={user?.image.data}
                  style={{
                    borderRadius: "50%",
                    boxShadow: "4px 4px 5px" + darker,
                  }}
                  className="w-10/12 m-auto z-20 my-2"
                />
                <div className="p-2">
                  <div className="text-xl">{user?.name}</div>
                  <div className="text-2xl">"{user?.nickname}"</div>
                  <div className="text-xl">{user?.surname}</div>
                  <div className="text-xl pt-10">Physic</div>
                  <div className="grid grid-cols-3 w-12/12 text-sm">
                    <div className="text-l flex ">Height</div>
                    <div className="col-span-2 flex items-center">
                      {user.height}
                    </div>
                    <div className="text-l flex ">Weight</div>
                    <div className="col-span-2 flex items-center">
                      {user.weight}
                    </div>

                    <div className="text-l flex ">Age</div>
                    <div className="col-span-2 flex items-center">
                      {user.age}
                    </div>
                  </div>
                  <div className="text-xl pt-3">Stats</div>
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
            </div>
            <div
              className=" w-7/12 px-5 pt-3 flex flex-col"
              style={{ color: "black" }}
            >
              <div className="h-3rem text-2xl font-medium">Description</div>
              <div className="italic"> {user?.description}</div>
            </div>
          </div>
          <div
            className="h-12 flex mx-2 my-1"
            style={{
              boxShadow: "0px 0px  20px -5px #6D6D6D",
              margin: "0px 0px 0px 0px",
              borderRadius: "0px 0px 30px 30px",
            }}
          >
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
      </motion.div>
    )
  );
}
