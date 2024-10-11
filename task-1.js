import users from "./user.js";
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserNames(users));
