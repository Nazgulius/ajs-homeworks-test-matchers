export function personHPSort (person) {   
  person.sort((a, b) => b.health - a.health);
  return person;
}
