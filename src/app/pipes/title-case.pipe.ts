import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    let words = value.split(' ');

    words = words.map((word, i) => {
      if (i > 0 && this.isPreposition(word)) word = word.toLowerCase();
      else word = this.toTitleCase(word);
      return word;
    });
    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    let prepositions = ['of', 'the', 'is', 'to', 'by'];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
