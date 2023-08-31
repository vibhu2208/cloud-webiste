const cursor = document.querySelector("#cursor");


document.addEventListener("mousemove", (e) => {
  let X = e.pageX;
  let Y = e.pageY;

  cursor.style.left = X + "px";
  cursor.style.top = Y + "px";
});
