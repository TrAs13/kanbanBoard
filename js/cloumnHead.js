export function addEditToHead(elem) {
  elem.addEventListener("click", () => {
    let input = document.createElement("input");
    input.value = elem.textContent;
    input.style.width = "100%";
    input.style.height = "40px";
    input.style.fontFamily = "600";
    input.style.fontSize = "20px";
    input.style.marginBottom = "5px";
    input.style.background = "transparent";
    input.style.border = "none";
    input.style.outline = "none";
    input.style.borderBottom = "6px solid rgb(108, 217, 171)";
    elem.parentNode.insertBefore(input, elem.parentNode.firstChild);
    elem.style.display = "none";
    input.focus();
    input.addEventListener("blur", () => {
      if (input.value == "") input.value = "Заголовок";
      elem.textContent = input.value;
      elem.style.display = "flex";
      input.remove();
    });
  });
}
