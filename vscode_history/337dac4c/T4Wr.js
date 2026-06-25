let items = document.querySelectorAll("span");
let todoList = document.querySelector(".todo-list");
let submit = document.querySelector(".submit");
let input = document.querySelector(".text");
let todoLists = document.querySelector(".tod");
let completedList = document.querySelector(".completed-list");
let all = document.querySelector(".all");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

function bindCheckboxes() {
  let todo = document.querySelectorAll(".todo-list input");

  todo.forEach((task) => {
    if (task.dataset.bound === "1") return; // prevent duplicate listeners
    task.dataset.bound = "1";

    task.addEventListener("click", (e) => {
      let parent = e.target.parentElement;

      if (e.target.classList.contains("select")) {
        e.target.classList.remove("select");
        parent.classList.remove("opacity", "show");
      } else {
        e.target.classList.add("select");
        parent.classList.add("opacity", "show");
      }

      // reset animation classes first
      parent.classList.remove("hide-left", "hide-right");

      // completed -> left, todo -> right
      if (parent.classList.contains("show")) {
        parent.classList.add("hide-left");
      } else {
        parent.classList.add("hide-right");
      }

      // hide after animation
      setTimeout(() => {
        parent.classList.add("hidden");
      }, 400);
    });
  });
}

function click(e) {
  let date = new Date();
  let dateNow = date.toLocaleDateString();
  let timeNow = date.toLocaleTimeString();

  e.preventDefault();
  if (!input.value.trim()) return;

  todoList.innerHTML += `
    <div class="todo task-item">
      <div class="deatils">
        <p>${input.value}</p>
        <p class="date">${timeNow} ; ${dateNow}</p>
      </div>
      <input type="checkbox">
    </div>
  `;

  bindCheckboxes();
  input.value = "";
}

submit.onclick = click;

// show todo only
todoLists.onclick = () => {
  let todo = document.querySelectorAll(".task-item");
  todo.forEach((task) => {
    task.classList.remove("hidden", "hide-left", "hide-right");
    task.style.opacity = "1";
    task.style.transform = "translateX(0)";
    task.style.display = "flex";

    if (task.classList.contains("show")) {
      task.classList.add("hidden");
    }
  });
};

// show completed only
completedList.onclick = () => {
  let todo = document.querySelectorAll(".task-item");
  todo.forEach((task) => {
    task.classList.remove("hidden", "hide-left", "hide-right");
    task.style.opacity = "1";
    task.style.transform = "translateX(0)";
    task.style.display = "flex";

    if (!task.classList.contains("show")) {
      task.classList.add("hidden");
    }
  });
};

// show all
all.onclick = () => {
  let todo = document.querySelectorAll(".task-item");
  todo.forEach((task) => {
    task.classList.remove("hidden", "hide-left", "hide-right");
    task.style.display = "flex";
    task.style.opacity = "1";
    task.style.transform = "translateX(0)";
  });
};

    