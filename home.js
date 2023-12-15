var h = document.querySelector("h2");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {

    h.innerHTML = "Friends";
    h.style.color = "green";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "red";
    flag = 1;

  } else {

    h.innerHTML = "Stranger";
    h.style.color = "Red";
    btn.innerHTML = "Add Friends";
    btn.style.backgroundColor = "green";
    flag = 0;
    
  }
});
