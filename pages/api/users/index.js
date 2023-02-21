import client from "../../libs/prismaClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("post 호출");

    const {
      body: {
        data: { name, birth, email, password, confirmPassword },
      },
    } = req;

    console.log("백엔드 로그", name, birth, email, password, confirmPassword);
    const result = await client.users.create({
      data: {
        name,
        birth,
        email,
        password,
        confirmPassword,
      },
    });
    res.status(200).json(result);
  }
}
