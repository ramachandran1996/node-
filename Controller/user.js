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

  if (user?.username?.length === 0) {
    return res.status(400).json({
      status: "error",
      message: "Missing required fields: username",
    });
  }
  console.log(user?.username?.length);

  users.push({ ...user, id: uuidv4() });

  res.send("post upadted");
  // return next();
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

  users = users.filter((user) => user.id != id);
  // console.log(users);
  res.send(`user id deleted ${id}`);
};

export const editTodo = (req, res) => {
  const { id } = req.params;
  users.map((item) => {
    if (item?.id === id) {
      item.username = req.body.username;
    }
  });
  console.log(users);
  res.send(`user id deleted upadted`);
  // res.send(users);
};
