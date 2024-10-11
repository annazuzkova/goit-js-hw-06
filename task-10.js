import users from "./user.js";
const getSortedUniqueSkills = (users) => {
  const allSkillsOfUsers = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills;
  }, []);
  return allSkillsOfUsers.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
