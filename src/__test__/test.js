import { personHPSort } from '../js/app.js';

test('healthy hp sort 1', () => { 
  const array = [
		{name: 'мечник', health: 10},
		{name: 'маг', health: 100},
		{name: 'лучник', health: 80},
	];
	const arrayExpected = [
		{name: 'маг', health: 100},
		{name: 'лучник', health: 80},
		{name: 'мечник', health: 10}		
	];
	const result = personHPSort(array);
	expect(result).toEqual(arrayExpected);
})
