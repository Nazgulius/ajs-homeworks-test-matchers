import { jasmine } from "globals";

const person = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

export function personHPSort (person) {   
  const personSort = [person(0)]; 
  let j = 0;
  for (let i = 0; i > person.length; i++){
    if (person(i).health > personSort(j).health) {
      personSort(j) = person(i);
    } 

  }
    
}
