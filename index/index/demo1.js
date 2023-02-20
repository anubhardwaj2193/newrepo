var itemList = document.querySelector('#items');
//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'yellow';

//lastElementchild

console.log(itemList.lastElementchild);
itemList.lastElementChild.textContent = 'Hello 4';

//lastChild
//console.log(itemList.lastChild);
//itemList.lastChild.style.backgroundColor = 'pink';

//firstElementChild
console.log(itemList.firstElementchild);
itemList.firstElementChild.textContent = 'Hello 1';

//firstChild
console.log(itemList.firstChild);
itemList.firstChild.style.backgroundColor = 'pink';
//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
//console.log(itemList.nextElementSibling);
//itemList.nextElementSibling.style.color='purple';

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='blue';

//createElement
//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello2';
//add attribute
newDiv.setAttribute=('title', 'Hello Div');
//createTextNode
var newDivText=document.createTextNode('Hello');
//add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);

