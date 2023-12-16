import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
  standalone: true
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: "km" | "m" | "cm"): any {
    if (!value){
      return "";
    }
    switch(targetUnits){
      case "km":
        return value * 1.60934;
      case "m":
        return value * 1.60934 * 1000;
      case "cm":
        return value * 1.60934 * 1000 * 100;
      default:
        return value
    }
    
    
  }

}
