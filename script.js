const gridItems = document.querySelectorAll(".grid-box");
const blockId = document.getElementById("block_id");
const colourId = document.getElementById("colour_id");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", function () {
  const id = parseInt(blockId.value);
  const color = colourId.value;

  // First make every grid element transparent
  gridItems.forEach(function (item) {
    item.style.backgroundColor = "transparent";
  });

  // Change the selected block's color
  if (id >= 1 && id <= 9) {
    gridItems[id - 1].style.backgroundColor = color;
  }
});

resetButton.addEventListener("click", function () {
  gridItems.forEach(function (item) {
    item.style.backgroundColor = "transparent";
  });

  blockId.value = "";
  colourId.value = "";
});