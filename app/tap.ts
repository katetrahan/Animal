class Keg {
  tapped: number = 15;


  constructor(public name: string,  public brand: string, public price: string, public alcohol: string){}


}

var kegs: Keg[] =[];
kegs.push(new Keg('Total Domination', 'Ninkasi', "30", "5.7"));
kegs.push(new Keg('Red Chair', 'Deschutes', '40', '5.4'));
kegs.push(new Keg('Fresh Squeezed', 'Deschutes', '50', '6.7'));
console.log(kegs);


for(var keg of kegs) {
  console.log(keg);
}
