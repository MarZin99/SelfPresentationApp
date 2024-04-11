"use client";

import { UserProps } from "@/app/interfaces/user.interface";
import "../../globals.css";
import Card from "@/app/components/Card/card";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
    <div className="main-background justify-center items-center overflow-hidden">
      {users != undefined &&
        users.map((user, key) => <Card key={key} user={user} zIndex={key} />)}
    </div>
  );
}
