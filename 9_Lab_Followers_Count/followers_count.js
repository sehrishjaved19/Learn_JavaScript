let Count = 0; //Initialize Count to 0
function increaseCount() {
    Count++ ;
    displayCount();
    checkCountValue()
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = Count;
}

function checkCountValue() {
  if (Count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (Count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}