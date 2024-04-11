import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function displayRating(
  value: number,
  maxValue: number = 5,
  icon: IconProp = fullStar,
  iconColor: string = "black",
  emptyIcon: IconProp = emptyStar,
  emptyIconColor: string = "black"
) {
  return (
    <div className="w-full flex items-center px-1">
      {Array.from({ length: value }).map((el, key) => (
        <FontAwesomeIcon icon={icon} key={key} style={{ color: iconColor }} />
      ))}
      {Array.from({ length: maxValue - value }).map((el, key) => (
        <FontAwesomeIcon
          icon={emptyIcon}
          key={key}
          style={{ color: emptyIconColor }}
        />
      ))}
    </div>
  );
}
