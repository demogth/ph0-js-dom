let targetDivs = Array.from(document.getElementsByClassName('inner'));

let btn = document.querySelector('.btn'); // получили ссылку на кнопку с классом btn

function createParagraph(innerText) {
  let paragraph = document.createElement('p');
  paragraph.innerText = innerText;
  return paragraph;
}

btn.addEventListener('click', () => {
  targetDivs.forEach((element, index) => {
    if (!element.nextElementSibling) {
      if (index === targetDivs.length - 1) {
        let p = createParagraph('Конец');
        element.parentElement.appendChild(p);
        return
      }
      let p = createParagraph('Я есть грут');
      element.parentElement.appendChild(p);
    }
  });
})

// querySelectorAll возвращает объект NodeList
// (по которому можно итерироваться) с элементами-нодами html-страницы,
// все подходящие элементы по указанному тэгу или классу