import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';


@Pipe ({
  name: "wisdom",
  pure: false

})

export class WisdomPipe implements PipeTransform {

  transform(input: Animal[], numberOfYears) {
    var output: Animal[] = [];
    if(numberOfYears === "young") {
      for(var i = 0; i < input.length; i++) {
        if(input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (numberOfYears === "old") {
      for(var i = 0; i < input.length; i++){
        if(input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
