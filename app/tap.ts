class Keg {
  tapped: boolean = false;


  constructor(public name: string,  public brand: string, public price: string, public alcohol: string){}

  kegTapped() {
    this.tapped =true;
  }
}

var kegs: Keg[] =[];
kegs.push(new Keg('Total Domination', 'Ninkasi', "30", "5.7"));
kegs.push(new Keg('Red Chair', 'Deschutes', '40', '5.4'));
kegs.push(new Keg('Fresh Squeezed', 'Deschutes', '50', '6.7'));
console.log(kegs);

kegs[1].kegTapped();

for(var keg of kegs) {
  console.log(keg);
}
