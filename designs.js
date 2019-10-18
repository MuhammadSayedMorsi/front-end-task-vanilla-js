function makeGrid() {
  // select dom elements
  const table = document.querySelector("#pixelCanvas");
  const gridWidth = document.querySelector("#inputWidth").value;
  const gridHeight = document.querySelector("#inputHeight").value;

  // remove the backgroun-color from tr when the user click the submit button again.. instead of adding another grid.
  table.innerHTML = "";

  // add change listener to the input color && and set attribute value to it
  document.querySelector("#colorPicker").addEventListener("change", function() {
    this.setAttribute("value", document.querySelector("#colorPicer").value);
  });

  // we will check if the i < gridhight then, create a tr
  for (let i = 0; i < gridHeight; i++) {
    const cell = document.createElement("tr");

    // check if the x < gridwidth then create a td
    for (let x = 0; x < gridWidth; x++) {
      const td = document.createElement("td");

      // add td to tr element
      cell.append(td);
    }
    // add tr to the table
    table.append(cell);
  }
  // add an click event to the table && when the user click on any of the cell,, change the background-color to the choosen color.
  table.addEventListener("click", function(e) {
    e.target.style.background = document.querySelector("#colorPicker").value;
  });
}

// add an click event to the submit button and call the makeGrid func
document.querySelector("form #submit").addEventListener("click", function(e) {
  // prevent default behaviour
  e.preventDefault();

  // run the makeGridFunction
  makeGrid();
});
