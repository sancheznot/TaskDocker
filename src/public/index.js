document.getElementById("title").focus();
const title = document.getElementById("title");
const description = document.getElementById("description");

document.getElementById("submit").addEventListener("click", (e) => {
  if (title.value == "" || description.value == "") {
    e.preventDefault();
    return title.focus();
  }
});
