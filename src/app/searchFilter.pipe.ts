import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items || !searchTerm) {
      return items;
    }

    searchTerm = searchTerm.toLowerCase();

    return items.filter((item) =>
      Object.values(item).some(
        (value) =>
          value &&
          typeof value === 'string' &&
          value.toLowerCase().includes(searchTerm)
      )
    );
  }
}
