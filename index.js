function update(id, value) {
  let el = document.getElementById(id);
  el.textContent = parseInt(el.textContent) + value;
}
