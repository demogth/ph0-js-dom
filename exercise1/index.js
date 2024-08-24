const styleBtn = document.querySelector('#jsstyle')
const styleBtnModifiedCss  = {
  'font-size': '14px',
  'background': 'white',
  'color': 'black',
}

const newBtnCss = {
  'background-color': 'green',
  'color': 'white',
  'font-size': '20px',
}

function createBtn () {
  let btn = document.createElement('button');
  return btn;
}

function setStyleToBtn(btn, style) {
  for (let property in style) {
    btn.style[property] = style[property];
  }
  return btn;
}

function preparedBtn(id, style, textContent) {
  let btn = createBtn();
  btn.id = id;
  btn.textContent = textContent;
  btn = setStyleToBtn(btn, style);
  return btn;
}

let styledBtn = preparedBtn('jsstyled', newBtnCss, 'Styled');

styleBtn.addEventListener('click', () => {
  styleBtn.insertAdjacentElement('afterend', styledBtn);
})

styledBtn.addEventListener('click', () => {
  setStyleToBtn(styleBtn, styleBtnModifiedCss);
})
