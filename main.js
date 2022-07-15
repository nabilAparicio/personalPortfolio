let text = ["frontend", "backend", "full-stack"];

let i = 0;
let j = 1;
let reverse = false;
let interval = setInterval(type, 200);

function type() {
  let nowText = text[i];
  document.getElementById("typewriter").innerText = nowText.substr(0, j);

  // reverse direction (erase) if reached end of text
  if (j == nowText.length + 5) {
    reverse = true;
  }

  j += reverse ? -2 : 1;

  // reset j and go forward (type) if reached beginning
  if (j <= 0) {
    j = 1;
    reverse = false;
    i++;
  }

  // reached end of list, start over
  if (i == text.length) {
    i = 0;
  }
}



