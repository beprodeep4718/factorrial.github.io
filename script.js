let out = document.getElementById("out");

let btn = document.getElementById("btn");

let fact = () => {
  let n = document.getElementById("input").value;
  if (n > 0 && n % 1 == 0) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial *= i;
    }
    out.innerHTML = factorial;
  } else {
    out.innerHTML = "invalid";
  }
  
};

