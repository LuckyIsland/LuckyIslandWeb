import { Pipe, PipeTransform } from '@angular/core';
import { Odd } from '../model/odd.model';

@Pipe({
   name: 'oddColumn'
})
export class OddColumnPipe implements PipeTransform {
	transform(items: Odd[], column: number): Odd[] {
		return items.filter(item => item.Column === column);
	}
}