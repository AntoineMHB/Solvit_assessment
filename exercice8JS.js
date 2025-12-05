const skills = ["JS", "React", "Node", "JS", "React"];
let uniqueSkills = [];

for (let i = 0; i < skills.length; i++) {
  let currentSkill = skills[i];
  if (!uniqueSkills.includes(currentSkill)) {
    uniqueSkills.push(currentSkill);
  }
}
let sortedSkills = uniqueSkills.sort();

console.log(sortedSkills);
