import users from "./user.js";
const getNamesSortedByFriendsCount = (users) => {
  return users
    .sort((next, prev) => next.friends.lenght - prev.friends.lenght)
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendsCount(users));
// [
//   "Moore Hensley",
//   "Sharlene Bush",
//   "Elma Head",
//   "Carey Barr",
//   "Blackburn Dotson",
//   "Sheree Anthony",
//   "Ross Vazquez",
// ];
