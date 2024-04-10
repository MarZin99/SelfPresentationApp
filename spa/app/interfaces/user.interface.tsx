export interface UserProps {
  id: number;
  name: string;
  surname: string;
  nickname?: string;
  description?: string;
  image: { mime: string; data: string };
  height: number;
  weight: number;
  age: number;
  armRange: number;
  speed: number;
  teamColor: string;
}
