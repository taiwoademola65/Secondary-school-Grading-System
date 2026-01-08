
function showGrade() {
  const score = Number(userInput.value)
  // console.log(score)
  if (score >= 70 && score <= 100) {
    console.log('A')
    displayGrade.innerHTML = 'Grade A'
  } else if (score >= 60 && score < 70) {
    console.log('B')
    displayGrade.innerHTML = 'Grade B'
  } else if (score >= 50 && score < 60) {
    console.log('C')
    displayGrade.innerHTML = 'Grade C'
  } else if (score >= 45 && score < 50) {
    console.log('D')
    displayGrade.innerHTML = 'Grade D'
  } else if (score >= 40 && score < 45) {
    console.log('E')
    displayGrade.innerHTML = 'Grade E'

  } else if (score >= 0 && score < 40) {
    console.log('F')
    displayGrade.innerHTML = 'Grade F'

  } else {
    console.log('Invalid Score')
    displayGrade.innerHTML = 'Invalid Score'

  }
}

