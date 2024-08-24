// code here

let ulList = document.querySelector('ul');
let liArray = Array.from(ulList.children); 

liArray.forEach((element, index) => {
    element.innerHTML = index + 1;
});

let newLi = document.createElement('li');
newLi.setAttribute('class', 'fourth');
newLi.innerText = 'Четвёртый';
ulList.insertAdjacentElement('beforeend', newLi);

let olList = document.getElementsByTagName('ol');
olList[0].lastElementChild.remove();
let anotherLi = document.createElement('li');
anotherLi.className = 'new';
anotherLi.textContent = 'Новый';
olList[0].appendChild(anotherLi);
