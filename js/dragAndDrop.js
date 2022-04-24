let card;

export const dragstart = function (e) {
  setTimeout(() => {
    this.classList.add("hide");
  }, 50);
  console.log(e.target);
  card = e.target;
};

export const dragend = function () {
  this.classList.remove("hide");
};

export const dragover = function (e) {
  e.preventDefault();
};

export const dragdrop = function (e) {
  this.append(card);
};
