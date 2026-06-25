let items = document.querySelectorAll("span");
let todoList = document.querySelector(".todo-list");
let submit = document.querySelector(".submit");
let input = document.querySelector(".text");
let lest = document.querySelector(".todo");
let todoLists = document.querySelector(".tod");
let completedList = document.querySelector(".completed-list");
let all = document.querySelector(".all");
items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((el) => {
      el.classList.remove("active");
      item.classList.add("active");
    });
  });
});
function click(e) {
  let date = new Date();
  let dateNow = date.toLocaleDateString();
  let timeNow = date.toLocaleTimeString();
  // let dateNow = date.getDate() + ":" + (date.getMonth() + 1) + ":" + date.getFullYear()
  // let timeNow =date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  e.preventDefault();
  todoList.innerHTML += `
    <div class="todo task-item">
        <div class="deatils">
            <p>${input.value}</p>
            <p class="date">${timeNow} ; ${dateNow}  </p>
        </div>
        <input type="checkbox">
    </div>
    `;
  let todo = document.querySelectorAll(".todo-list input");
  todo.forEach((task) => {
    task.onclick = (e) => {
      let parent = e.target.parentElement;
      if (
        e.target.classList.contains("select") 
      ) {
        e.target.classList.remove("select");
          parent.classList.remove("opacity");
            parent.classList.remove("show");
    } else {
        e.target.classList.add("select");
          parent.classList.add("opacity");
          parent.classList.add("show");
          
      }
    };
  });
  
  input.value = "";
}
submit.onclick = click;

todoLists.onclick = () => {
  let todo = document.querySelectorAll(".task-item");
  remove()
  todo.forEach((task) => {
   if (task.classList.contains("show")) {
      task.style.display = "none";
       
    } else {
      task.style.display = "flex";
    }
  });
};
function remove() {
  let todo = document.querySelectorAll(".todo-list input");
  todo.forEach((task) => {
    task.addEventListener("click", (e) => {
      let parent = e.target.parentElement;
      if (e.target.checked || e.target.classList.contains("select")) {
        parent.classList.add("hide-right"); // يتحرك يمين + يختفي تدريجي
        setTimeout(() => {
          parent.style.display = "none";
        }, 400); // نفس مدة transition
      }
    });
  });
}
}
completedList.onclick = () => {
  let todo = document.querySelectorAll(".task-item");
  remove(); 
  todo.forEach((task) => {
    if (task.classList.contains("show")) {
        task.style.display = "flex";
        
    } else {
      task.style.display = "none";
    }
  });
};
all.onclick = () => {
  let todo = document.querySelectorAll(".task-item");
  todo.forEach((task) => {
    if (task.classList.contains("show")) {
      task.style.display = "flex";
    } else {
      task.style.display = "flex";
    }
  });
};

    