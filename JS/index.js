// //^ Global

// const inputValue = document.getElementById("inputValue");
// const btnSubmit = document.getElementById("btnSubmit");
// const form = document.querySelector("form");
// const apiKey = "6759b39d60a208ee1fdded54";
// const loading = document.querySelector(".loading");
// let todolist;

// //* Start Js
// getAlltodosData();

// //Events
// btnSubmit.addEventListener("click", async (e) => {
//   e.preventDefault();
//   if (inputValue.value.trim().length > 0) {
//     addtodo();
//   } else {
//     toastr.error(
//       "Your task field is empty. Let's fill it with great ideas!",
//       "Empty Field ⚠️"
//     );
//   }
// });

// //! Function

// // Add todo
// async function addtodo() {
//   showLoading();
//   todoDate = {
//     title: inputValue.value,
//     apiKey: apiKey,
//   };
//   const obj = {
//     method: "POST",
//     body: JSON.stringify(todoDate),
//     headers: { "Content-Type": "application/json" },
//   };
//   const response = await fetch(`https://todos.routemisr.com/api/v1/todos`, obj);
//   if (response.ok) {
//     const addData = await response.json();
//     console.log(response);
//     if (addData.message === "success") {
//       toastr.success("Your task has been added successfully!", "Success 🎉");
//       await getAlltodosData();
//       form.reset();
//     }
//     hideLoading();
//   } else {
//     hideLoading();
//   }
// }

// async function getAlltodosData() {
//   showLoading();
//   const response = await fetch(
//     `https://todos.routemisr.com/api/v1/todos/${apiKey}`
//   );
//   if (response.ok) {
//     const data = await response.json();
//     if (data.message === "success") {
//       todolist = data.todos;
//       displayData();
//     }
//     hideLoading();
//   } else {
//     hideLoading();
//   }
// }

// function displayData() {
//   let content = "";
//   todolist.forEach((element) => {
//     content += `
//       <li class="d-flex align-items-center justify-content-between border-bottom pb-2 my-2">
//           <span onclick="markCompleted('${element._id}' , ${
//       element.completed
//     })" 
//           class="task-name ${
//             element.completed ? "text-decoration-line-through" : ""
//           }">
//           ${element.title}
//           </span>
//           <div class="icons d-flex align-items-center gap-4">
//           ${
//             element.completed
//               ? '<span><i class="fa-solid fa-circle-check" style="color: #63e6be"></i></span>'
//               : ""
//           }
//           <span class="icon" onclick="deletetodo('${element._id}')">
//            <i class="fa-solid fa-trash-can"></i>
//            </span>
//           </div>
//         </li>
//     `;
//   });
//   document.getElementById("taskContainer").innerHTML = content;
//   changeProgress();
// }

// async function deletetodo(id) {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "This task will be permanently deleted!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then(async (result) => {
//     if (result.isConfirmed) {
//       const todoId = {
//         todoId: id,
//       };
//       const obj = {
//         method: "DELETE",
//         body: JSON.stringify(todoId),
//         headers: { "Content-Type": "application/json" },
//       };
//       const response = await fetch(
//         `https://todos.routemisr.com/api/v1/todos`,
//         obj
//       );
//       if (response.ok) {
//         const data = await response.json();
//         if (data.message === "success") {
//           Swal.fire({
//             title: "Deleted!",
//             text: "The task has been successfully removed.",
//             icon: "success",
//           });
//           await getAlltodosData();
//         }
//       }
//     }
//   });
// }

// async function markCompleted(id, Completed) {
//   console.log(Completed);
//   if (!isCompleted(Completed)) {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This will mark the task as completed.!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, mark it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         const todoId = {
//           todoId: id,
//         };
//         const obj = {
//           method: "PUT",
//           body: JSON.stringify(todoId),
//           headers: { "Content-Type": "application/json" },
//         };
//         const response = await fetch(
//           `https://todos.routemisr.com/api/v1/todos`,
//           obj
//         );
//         if (response.ok) {
//           const data = await response.json();
//           if (data.message === "success") {
//             Swal.fire({
//               title: "Task Completed!",
//               text: "Great job! The task has been marked as completed successfully.",
//               icon: "success",
//             });
//             getAlltodosData();
//           }
//         }
//       }
//     });
//   } else {
//     Swal.fire({
//       title: "Task Already Completed!",
//       icon: "success",
//       confirmButtonText: "OK",
//     });
//   }
// }

// function showLoading() {
//   loading.classList.remove("d-none");
// }

// function hideLoading() {
//   loading.classList.add("d-none");
// }

// function isCompleted(Completed) {
//   if (Completed) {
//     return true;
//   }
// }

// function changeProgress() {
//   const completedTaskNum = todolist.filter((task) => task.completed).length;
//   console.log(completedTaskNum);
//   const totalTask = todolist.length;
//   document.getElementById("progress").style.width = `${(completedTaskNum / totalTask) * 100}%`;
//   const statusNum = document.querySelectorAll(".status-number span");
//   statusNum[0].innerHTML = completedTaskNum;
//   statusNum[1].innerHTML = totalTask;
// }

// //^ Notes JS

// //&  For In  بطريقه اخري مثلا ب  Array Of Object  ممكن اعمل لوب علي

// /* let content = "";
// for (const element in todolist) {
//     content += `
//       <li class="d-flex align-items-center justify-content-between border-bottom pb-2 my-2">
//           <span class="task-name">${element.title}</span>
//           <div class="icons d-flex align-items-center gap-4">
//             <span>
//               <i class="fa-solid fa-circle-check" style="color: #63e6be"></i>
//             </span>
//             <span class="icon"> <i class="fa-solid fa-trash-can"></i></span>
//           </div>
//         </li>
//     `;
//   });
// } */

// //& Ternary Operator

// //  (condition) ? (if true, do this) : (otherwise, do this)

// //&








//^ Global

const inputValue = document.getElementById("inputValue");
const btnSubmit = document.getElementById("btnSubmit");
const form = document.querySelector("form");
const loading = document.querySelector(".loading");
let todolist = [];

//* Start Js
getAlltodosData();

//Events
btnSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  if (inputValue.value.trim().length > 0) {
    addtodo();
  } else {
    toastr.error(
      "Your task field is empty. Let's fill it with great ideas!",
      "Empty Field ⚠️"
    );
  }
});

//! Function

// Add todo
function addtodo() {
  showLoading();
  const todoDate = {
    title: inputValue.value,
    completed: false,
  };

  // Add to localStorage
  todolist.push(todoDate);
  localStorage.setItem("todos", JSON.stringify(todolist));

  toastr.success("Your task has been added successfully!", "Success 🎉");
  getAlltodosData();
  form.reset();
  hideLoading();
}

function getAlltodosData() {
  showLoading();

  // Get tasks from localStorage
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos) {
    todolist = JSON.parse(storedTodos);
    displayData();
  }

  hideLoading();
}

function displayData() {
  let content = "";
  todolist.forEach((element, index) => {
    content += `
      <li class="d-flex align-items-center justify-content-between border-bottom pb-2 my-2">
          <span onclick="markCompleted(${index})" 
          class="task-name ${element.completed ? "text-decoration-line-through" : ""}">
          ${element.title}
          </span>
          <div class="icons d-flex align-items-center gap-4">
          ${
            element.completed
              ? '<span><i class="fa-solid fa-circle-check" style="color: #63e6be"></i></span>'
              : ""
          }
          <span class="icon" onclick="deletetodo(${index})">
           <i class="fa-solid fa-trash-can"></i>
           </span>
          </div>
        </li>
    `;
  });
  document.getElementById("taskContainer").innerHTML = content;
  changeProgress();
}

function deletetodo(index) {
  Swal.fire({
    title: "Are you sure?",
    text: "This task will be permanently deleted!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      todolist.splice(index, 1); // Remove task from array
      localStorage.setItem("todos", JSON.stringify(todolist)); // Update localStorage
      Swal.fire({
        title: "Deleted!",
        text: "The task has been successfully removed.",
        icon: "success",
      });
      getAlltodosData();
    }
  });
}

function markCompleted(index) {
  const task = todolist[index];
  task.completed = !task.completed; // Toggle completed status
  localStorage.setItem("todos", JSON.stringify(todolist)); // Update localStorage
  Swal.fire({
    title: task.completed ? "Task Completed!" : "Task Reverted!",
    text: task.completed
      ? "Great job! The task has been marked as completed."
      : "The task has been reverted to incomplete.",
    icon: "success",
  });
  getAlltodosData();
}

function showLoading() {
  loading.classList.remove("d-none");
}

function hideLoading() {
  loading.classList.add("d-none");
}

function changeProgress() {
  const completedTaskNum = todolist.filter((task) => task.completed).length;
  const totalTask = todolist.length;
  document.getElementById("progress").style.width = `${(completedTaskNum / totalTask) * 100}%`;
  const statusNum = document.querySelectorAll(".status-number span");
  statusNum[0].innerHTML = completedTaskNum;
  statusNum[1].innerHTML = totalTask;
}

// Notes JS
// Example of using a for loop
/* 
let content = "";
for (const task of todolist) {
  content += `
    <li class="d-flex align-items-center justify-content-between border-bottom pb-2 my-2">
        <span class="task-name">${task.title}</span>
        <div class="icons d-flex align-items-center gap-4">
          <span>
            <i class="fa-solid fa-circle-check" style="color: #63e6be"></i>
          </span>
          <span class="icon">
            <i class="fa-solid fa-trash-can"></i>
          </span>
        </div>
      </li>
  `;
}
*/

// Example of ternary operator
// (condition) ? (if true, do this) : (otherwise, do this)
