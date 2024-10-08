const headerButtons = document.querySelectorAll('.header_btn');

headerButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('기능을 준비 중입니다');
  });
});

let attempts = 0;
let index = 1;

function appStart() {
  const handleKeydown = (e) => {
    const key = e.key.toUpperCase();
    const keyCode = e.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index="${attempts}${index}"]`
    );
    if (keyCode >= 65 && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
    }
  };
  window.addEventListener('keydown', handleKeydown);
}

appStart();
