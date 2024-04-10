"use client";

import { UserProps } from "@/app/interfaces/user.interface";
import "../../globals.css";
import Card from "@/app/components/Card/card";
import { useEffect, useState } from "react";

export default function MainPage() {
  const [users, setUsers] = useState<UserProps[] | undefined>(undefined);

  const fetchUsers = async () => {
    try {
      const response = await fetch("/mocks/users.mock1.json");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching dishes: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="main-background justify-center items-center">
      <div
        className="flex justify-center items-center "
        style={{ height: "800px", width: "500px" }}
      >
        {users != undefined &&
          users.map((user, key) => <Card user={user} key={key} />)}
      </div>
    </div>
  );
}
