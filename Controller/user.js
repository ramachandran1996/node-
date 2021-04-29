import { v4 as uuidv4 } from "uuid";

//variable
let users = [];

//user get all item
export const getUsers = (req, res) => {
  res.send(users);
};

//user create the new item
export const createUser = (req, res) => {
  const user = req.body;
  console.log(user);

  users.push({ ...user, id: uuidv4() });

  res.send("post upadted");
};

//user get the specific item
export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

//user delete the item
export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id === id);

  res.send(`user id deleted ${id}`);
};
