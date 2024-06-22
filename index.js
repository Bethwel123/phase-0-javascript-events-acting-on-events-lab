// Your code here

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

function moveDodgerRight() {
    let dodger = document.getElementById("dodger");
    let rightNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(rightNumbers, 10);
    console.log(dodger.style.left);
    dodger.style.left = `${left + 1}px`;
}