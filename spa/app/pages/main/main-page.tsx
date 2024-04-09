import "../../globals.css";
import Card from "@/app/components/Card/card";

export default function MainPage() {
  return (
    <div className="main-background justify-center items-center">
      <div
        className="flex justify-center items-center bg-red-500"
        style={{ height: "800px", width: "500px" }}
      >
        <Card />
      </div>
    </div>
  );
}
