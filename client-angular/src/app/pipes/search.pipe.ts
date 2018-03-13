// tslint:disable:prefer-const
// tslint:disable:forin
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {
  fields = ['question'];
  objectFields = ['username'];

  transform(elements, filter?: string) {
    if ( !elements || !filter) { return elements; }
    return elements.filter(element => this.applyFilter(element, filter));
  }

  private applyFilter(element, filter): boolean {


    //testing

    // let filterArray: string[] = filter.split(' ');

    // for(let field in element) {
    //   if (field === 'question' || field === '_user') {
    //     if (
    //       element['question'].toString().toLowerCase().includes(filter.toString().toLowerCase()) ||
    //       element['_user'].toString().toLowerCase().includes(filter.toString().toLowerCase())
    //   ) {
    //       return true;
    //     }

    //   }
    // }


    // return false;


    //this works
    let filterArray: string[] = filter.split(' ');
    for (let field of this.fields) {

      for (let word of filterArray ) {
        if ( this.validInput(element[field]) && this.validInput(filter) ) {
          if ( element[field].toString().toLowerCase().includes(word.toString().toLowerCase())) {
            return true;
          }
        }
      }
    }
    return false;

  }

  private validInput(input): boolean {
    return input !== undefined && input !== null && input !== ' ';
  }

}
