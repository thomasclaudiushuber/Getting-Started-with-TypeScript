import { range } from 'lodash';

let chapters = range(1, 12);

for (let num in chapters) {
    console.log(num);
}