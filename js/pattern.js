import { modalInner, editItem } from "./editItem.js";
import { dragstart, dragend } from "./dragAndDrop.js";

export function createColumn() {
  let column = document.createElement("div");
  column.className = "column";
  let columnHead = document.createElement("div");
  columnHead.textContent = "Заголовок";
  columnHead.className = "column__head";
  let columnItems = document.createElement("div");
  columnItems.className = "column__items";
  column.appendChild(columnHead);
  column.appendChild(columnItems);
  return column;
}

export function createItem() {
  let item = document.createElement("div");
  let screpka = document.createElement("img");
  screpka.src = "images/screpka.png";
  screpka.classList.add("scrpeka");
  // let screpka = document.querySelector(".scrpeka").cloneNode(true);
  item.className = "item";
  let itemHead = document.createElement("div");
  itemHead.textContent = "Заголовок";
  itemHead.className = "item__head";
  let itemDescription = document.createElement("div");
  itemDescription.className = "item__description";
  itemDescription.textContent = "Описание";
  item.appendChild(screpka);
  item.appendChild(itemHead);
  item.appendChild(itemDescription);
  item.style.backgroundColor = "khaki";
  editItem(item);
  modalInner(item, true);
  item.draggable = true;
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
  return item;
}
