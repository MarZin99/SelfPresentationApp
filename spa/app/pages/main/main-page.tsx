"use client";

import { UserProps } from "@/app/interfaces/user.interface";
import "../../globals.css";
import Card from "@/app/components/Card/card";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import TopBar from "@/app/components/TopBar/top-bar";
import React from "react";

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

  const animationControls = useAnimationControls();

  const onReset = () => {
    animationControls.start(() => ({
      x: 0,
      y: 0,
      transition: { duration: 0.9, ease: "backOut" },
    }));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex w-full h-full">
      <TopBar onReset={onReset} />
      <div className="main-background justify-center items-center overflow-hidden">
        {users != undefined &&
          users.map((user, key) => (
            <Card
              animationControls={animationControls}
              key={key}
              user={user}
              zIndex={key}
            />
          ))}
      </div>
    </div>
  );
}
