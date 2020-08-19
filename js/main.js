'use strict';

const collection = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const bookTitle = book[4].querySelector('a');
const part2 = book[0].querySelectorAll('li');
const part5 = book[5].querySelectorAll('li');
const part6 = book[2].querySelectorAll('li');

collection.prepend(book[1]);
collection.append(book[2]);
book[3].before(book[4]);

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

bookTitle.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

part2[10].before(part2[2]);
part2[4].before(part2[8]);
part2[3].after(part2[6]);

part5[4].after(part5[2]);
part5[1].after(part5[9]);
part5[8].before(part5[5]);

const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
part6[9].before(newElem);

