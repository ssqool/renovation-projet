const icons = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.question-answer')

for(let i = 0; i < icons.length; i++) {
  answers[i].style.display = 'none';
  icons[i].addEventListener('click', (e) =>{
    if (answers[i].style.display === 'none') {
      answers[i].style.display = 'block';
      icons[i].classList.add('active');
    } else {
      answers[i].style.display = 'none';
      icons[i].classList.remove('active');
    }
  })
}
