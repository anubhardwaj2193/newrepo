var li = document.querySelectorAll('li');
console.log(li);
console.log(li[1]);
li[1].style.color = 'green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i < odd.length;i++)
{
    odd[i].style.backgroundColor = 'green';
}