import { createColumn, createItem } from "./pattern.js";
import { addEditToHead } from "./cloumnHead.js";
import { editItem } from "./editItem.js";
import { dragover, dragdrop, dragstart, dragend } from "./dragAndDrop.js";

let btnAddColumn = document.querySelector(".kanban__add-column");

btnAddColumn.addEventListener("click", () => {
  let columnContainer = document.querySelector(".kanban__columns");
  let newColumn = createColumn();
  columnContainer.appendChild(newColumn);
  newColumn.addEventListener("dragover", dragover);
  newColumn.addEventListener("drop", dragdrop);
  newColumn.addEventListener("click", (event) => {
    let target = event.target;
    if (target.className == "column") {
      let newItem = createItem();
      newColumn.appendChild(newItem);
      newItem.draggable = true;
    }
  });
  let columnHead = newColumn.querySelector(".column__head");
  addEditToHead(columnHead);
});

/*Проход начальных элементов*/

let columnHead = document.querySelectorAll(".column__head");
for (let elem of columnHead) {
  addEditToHead(elem);
}

let task = document.querySelectorAll(".item");
for (let elem of task) {
  elem.draggable = true;
  editItem(elem);
  elem.addEventListener("dragstart", dragstart);
  elem.addEventListener("dragend", dragend);
}

let column = document.querySelectorAll(".column");
for (let elem of column) {
  elem.addEventListener("dragover", dragover);
  elem.addEventListener("drop", dragdrop);
  elem.addEventListener("click", (event) => {
    let target = event.target;
    console.log(event.target);
    if (target.className == "column") {
      let newItem = createItem();
      elem.appendChild(newItem);
    }
  });
}
