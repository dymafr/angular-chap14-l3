import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "cb" })
export class CbPipe implements PipeTransform {
  transform(value: string): string {
    return `${value.slice(0, 4)} xxxx xxxx ${value.slice(-4, value.length)}`;
  }
}
