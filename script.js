// Навигация по DOM - элементам, data-атрибуты...

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// .childNodes позволяет получить все ноды (узлы) в родителе
// console.log(document.body.childNodes); // метод .childNodes самый полезный в практической деятельности

// Первый нод родителя
// console.log(document.body.firstChild);
// Первый элемент родителя
// console.log(document.body.firstElementChild);

// Последний нод родителя
// console.log(document.body.lastChild);
// Последний элемент родителя
// console.log(document.body.lastElementChild);

// Получение нод родителя элемента -.parentNode
// console.log(document.querySelector('#current').parentNode);
// Получение родительского элемента
// console.log(document.querySelector('#current').parentElement);
// Пролучение нод родителя родителя элемента -.parentNode.parentNode 
// console.log(document.querySelector('#current').parentNode.parentNode);

// Получение следующего нода (соседа) используя Data-атрибут 
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// Получение предыдущего нода (соседа) используя Data-атрибут 
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// Получение следующего элемента используя Data-атрибут 
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// Получение предыдущего элемента используя Data-атрибут 
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);


// #text является текстовой нодой
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') { 
        continue;
    }

    console.log(node);
}