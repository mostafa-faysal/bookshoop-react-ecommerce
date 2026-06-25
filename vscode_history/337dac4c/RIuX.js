const todoList = document.querySelector(".todo-list");
const submit = document.querySelector(".submit");
const input = document.querySelector(".text");

const todoBtn = document.querySelector(".tod");
const completedBtn = document.querySelector(".completed-list");
const allBtn = document.querySelector(".all");

if (!todoList || !submit || !input || !todoBtn || !completedBtn || !allBtn) {
  console.error("Check your HTML class names");
}

function createTask(text) {
  const date = new Date();
  const dateNow = date.toLocaleDateString();
  const timeNow = date.toLocaleTimeString();

  const div = document.createElement("div");
  div.className = "todo task-item";
  div.innerHTML = `
    <div class="deatils">
      <p>${text}</p>
      <p class="date">${timeNow} ; ${dateNow}</p>
    </div>
    <input type="checkbox">
  `;
  return div;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  todoList.appendChild(createTask(value));
  input.value = "";
});

// مهم: listener واحد لكل checkboxes الحالية والجديدة
todoList.addEventListener("click", (e) => {
  if (e.target.type !== "checkbox") return;

  const parent = e.target.closest(".task-item");
  if (!parent) return;

  parent.classList.remove("hide-left", "hide-right", "hidden");

  if (e.target.checked) {
    parent.classList.add("show", "opacity", "hide-left");   // completed -> left
  } else {
    parent.classList.remove("show", "opacity");
    parent.classList.add("hide-right");                     // todo -> right
  }

  setTimeout(() => {
    parent.classList.add("hidden");
  }, 400);
});

todoBtn.addEventListener("click", () => {
  document.querySelectorAll(".task-item").forEach((task) => {
    task.classList.remove("hidden", "hide-left", "hide-right");
    task.style.display = "flex";
    if (task.classList.contains("show")) task.classList.add("hidden");
  });
});

completedBtn.addEventListener("click", () => {
  document.querySelectorAll(".task-item").forEach((task) => {
    task.classList.remove("hidden", "hide-left", "hide-right");
    task.style.display = "flex";
    if (!task.classList.contains("show")) task.classList.add("hidden");
  });
});

allBtn.addEventListener("click", () => {
  document.querySelectorAll(".task-item").forEach((task) => {
    task.classList.remove("hidden", "hide-left", "hide-right");
    task.style.display = "flex";
    task.style.opacity = "1";
    task.style.transform = "translateX(0)";
  });
});