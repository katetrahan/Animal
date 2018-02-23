import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe ({
  name: "completeness",
  pure: false

})

export class CompletenessPipe implements PipeTransform{

  transform(input: Keg[], pintsInKeg) {
    var output: Keg[] = [];
    if(pintsInKeg === "empty") {  //filter
      for(var i = 0; i < input.length; i++) {
        if(input[i].tapped < 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (pintsInKeg === "full") { //filter
      for (var i = 0; i < input.length; i++) {
        if (input[i].tapped > 3) {
          output.push(input[i]);
        }
      }
      return output;
    } else {   
      return input;
    }
  }
}
