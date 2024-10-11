import users from "./user.js";
const getInactiveUsers = (users) => {
  return users.filter((user) => user.isActive === false);
};
console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
