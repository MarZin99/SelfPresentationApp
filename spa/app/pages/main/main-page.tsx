"use client";

import { UserProps } from "@/app/interfaces/user.interface";
import "../../globals.css";
import Card from "@/app/components/Card/card";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

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
