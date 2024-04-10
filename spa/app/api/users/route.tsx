import { NextRequest, NextResponse } from "next/server";
import fsPromises from "fs/promises";
import path from "path";
import { UserProps } from "@/app/interfaces/user.interface";

//APi MOCK
//1 read json as string
//2 convert string into json object
//3 manipulate array
//4 convert json to string
//5 write updated json as text to json file

const usersFilePath = path.join(
  process.cwd(),
  "app/public/mocks/usrs.mock.json"
);

export async function GET() {
  try {
    const users = await fsPromises.readFile(usersFilePath, "utf-8");
    const json = JSON.parse(users);
    return NextResponse.json(json);
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "No users found" }), {
      status: 404,
      headers: { "content-type": "application/json" },
    });
  }
}

export async function Patch(req: NextRequest) {
  try {
    //1 read json
    const users = await fsPromises.readFile(usersFilePath, "utf-8");
    //2 parse into json array
    const jsonArray = JSON.parse(users);
    //3 destruct values from request body
    const { id, name, surname, nickname, description }: UserProps =
      await req.json();
    //4 find user index of user to be patched
    const userIndex = jsonArray.findIndex(
      (users: UserProps) => userIndex.id === id
    );
    //4.1 if no user
    if (userIndex < 0) {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
        headers: { "content-type": "applications/json" },
      });
    }
    //5 get desired user
    let desiredUser = jsonArray[userIndex];

    //6 patch User
    desiredUser.name = name ? name : desiredUser.name;
    desiredUser.surname = surname ? surname : desiredUser.surname;
    desiredUser.nickname = nickname ? nickname : desiredUser.nickname;
    desiredUser.description = description
      ? description
      : desiredUser.description;

    //7 update json array
    jsonArray[userIndex] = desiredUser;

    //8 convert json array to json string
    const updatedData = JSON.stringify(jsonArray);

    //9 write updated data to file
    await fsPromises.writeFile(usersFilePath, updatedData);

    //10 retunr respond to frontend
    return new NextResponse(
      JSON.stringify({ message: "Dish patched succesfully!" }),
      { status: 200, headers: { "content-type": "application/json" } }
    );
  } catch (error) {}
}
