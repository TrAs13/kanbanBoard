export function editItem(task) {
  task.addEventListener("click", () => {
    modalInner(task);
  });
}
export function modalInner(task) {
  let modal = document.querySelector(".modal");
  let clone = modal.cloneNode(true);
  console.log(clone);
  document.body.append(clone);
  modal.style.display = "flex";
  let head = modal.querySelector("#head");
  let description = modal.querySelector("#description");
  let color = modal.querySelector("#color");
  let nowHead = task.querySelector(".item__head");
  let nowdescription = task.querySelector(".item__description");
  let btndel = modal.querySelector("#btndel");
  head.value = nowHead.innerText;
  description.value = nowdescription.innerText;
  modal.addEventListener("submit", function (event) {
    event.preventDefault();
    nowHead.innerText = head.value;
    nowdescription.innerText = description.value;
    task.style.backgroundColor = color.value;
    modal.remove();
  });
  btndel.addEventListener("click", () => {
    task.remove();
    modal.remove();
  });
}
