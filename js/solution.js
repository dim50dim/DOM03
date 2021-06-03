    
'use strict';


let bodyMain = document.body;
  console.log(bodyMain);

  let theBestChildren = bodyMain.childNodes;
    console.log(theBestChildren);

 /////////Вывести общее кол-во элементов в консоль
  let allSiblings = document.querySelectorAll('li');
      console.log(allSiblings.length);
     
     
   ///   Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль
  let arr = [];
      for(let elem of allSiblings){
        
        arr.push(elem.innerHTML);
      }
  
      console.log(arr);


 
//////Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль



/////С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
let liLast = document.querySelector('li:last-child');
liLast.innerHTML = 'Hi , dude how are you doing';

///Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
let liFirst = document.querySelector('li:first-child');
liFirst.setAttribute('data-my-name','Mike');

///Удалить у тега ul аттрибут ‘data-dog-tail‘

let  ul = document.querySelector('ul');
//ul.removeAttribute('data-dog-tail');
console.log(ul);

//////Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
let arr1 = [];
let arr2 = [];
let attrib = '';
for(let i = 0; i < ul.attributes.length; i++){
   attrib = ul.attributes[i];
 // console.log(attrib);

arr1.push(attrib.value);
arr2.push(attrib.name);
}
console.log(arr1);// here we have array with value of attributes

//////Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
console.log(arr2);//here we've got array with keys of attributes