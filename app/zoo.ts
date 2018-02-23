class Animal {

  constructor(public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string){}
}

var animals: Animal[]
animals.push(new Animal('Goat', 'Goatie', 1, 'Grass', 'Portland', 1, 'Female', 'Sunshine', 'Being Petted'));
animals.push(new Animal('Turtle', 'Flash', 5, 'Lettuce', 'Portland', 1, 'Female', 'Walking', 'Rain'));
animals.push(new Animal('Polar Bear', 'Boots', 3, 'Fish', 'Portland', 3, 'Male', 'Swimming', 'People hiiting the glass'));

for (var animal of animals) {
  console.log(animlal);
}
