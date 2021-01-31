const icons = document.querySelectorAll('.question-icon');
const answers = document.querySelectorAll('.question-answer')


for(let i = 0; i < icons.length; i++) {
  answers[i].style.display = 'none';
  icons[i].addEventListener('click', (e) =>{
    console.log(answers[i].style.display);
    if (answers[i].style.display === 'none') {
      answers[i].style.display = 'block';
      answers[i].style.top = '100%';
      icons[i].classList.add('active');
    } else {
      answers[i].style.display = 'none';
      icons[i].classList.remove('active');
    }
  })
}
