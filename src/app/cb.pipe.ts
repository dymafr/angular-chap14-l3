import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "cb" })
export class CbPipe implements PipeTransform {
  transform(value: string, avant: string = ""): string {
    let reversedName: string = "";
    for (var i = value.length - 1; i >= 0; i--) {
      reversedName += value.charAt(i);
    }
    return `${avant} ${reversedName}`;
  }
}
