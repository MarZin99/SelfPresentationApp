import { UserProps } from "@/app/interfaces/user.interface";
import { AnimationControls } from "framer-motion";

export interface CardProps {
  user?: UserProps;
  zIndex: number;
  animationControls: AnimationControls;
}
