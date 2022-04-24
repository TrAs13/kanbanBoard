export function addEditToHead(elem) {
  elem.addEventListener("click", () => {
    let input = document.createElement("input");
    input.value = elem.textContent;
    input.style.width = "243px";
    input.style.height = "40px";
    input.style.marginBottom = "10px";
    elem.parentNode.insertBefore(input, elem.parentNode.firstChild);
    elem.style.display = "none";
    input.addEventListener("blur", () => {
      elem.textContent = input.value;
      elem.style.display = "flex";
      input.remove();
    });
  });
}
