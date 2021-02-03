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




function isInteger(num) {
  return ( num ^ 0 ) === num;
}


function getValueFromMatrix () {
  let value1 = prompt('Enter the first value');
  let value2 = prompt('Enter the second value');

  let len = value1.length;
  let lenSqrt = Math.sqrt(len);

  if ( isInteger(lenSqrt) ) {
    let matrix = [];
    for (let i = 0; i < lenSqrt; i++) {
      matrix[i] = [];
      for (let j = 0; j < i; j++) {
        matrix[i][j] = i;
      }
    }
    console.log(matrix)
  } else {
    console.error('Error');
    return 0;
  }

}

