var numSquares = 6,
  squares = [],
  colors = [],
  pickedColor,
  //squares = document.querySelectorAll('.square'),
  colorDisplay = document.getElementById("colorDisplay"),
  container = document.querySelector(".container"),
  messageDisplay = document.querySelector("#message"),
  h1 = document.querySelector("h1"),
  resetButton = document.querySelector("#reset"),
  modeButtons = document.querySelectorAll(".mode");

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function setupMode() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
      }
      this.classList.add("selected");
      this.textContent == "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function createSquares() {
  container.innerHTML = "";
  squares = [];
  for (var i = 0; i < numSquares; i++) {
    var oDiv = document.createElement("div");
    oDiv.className = "square";
    squares.push(oDiv);
    container.appendChild(oDiv);
  }
  return squares;
}

//createSquares();

function setupSquares(squares) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      var clickedColor = this.style.background;
      console.log(clickedColor);
      if (clickedColor == pickedColor) {
        messageDisplay.textContent = "BENAR";
        resetButton.textContent = "Bermain lagi";
        changeColors(clickedColor, squares);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "COBA LAGI!";
      }
    });
  }
}

function reset() {
  setupMode();
  createSquares();
  setupSquares(squares);

  colors = generateRandomColors(numSquares);

  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "Next";
  messageDisplay.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
  reset();
});

function changeColors(color, arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i].style.background = color;
  }
}

init();

function init() {
  reset();
}
