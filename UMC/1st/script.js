document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const todoList = document.getElementById("todoList");
  const doneList = document.getElementById("doneList");

  // 할 일 추가
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && taskInput.value.trim() !== "") {
      const taskText = taskInput.value.trim();
      addTaskToTodoList(taskText);
      taskInput.value = ""; // 입력 필드 비우기
    }
  });

  // 할 일 추가 함수
  function addTaskToTodoList(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "완료";
    completeButton.addEventListener("click", () => {
      moveToDoneList(li);
    });

    li.appendChild(completeButton);
    todoList.appendChild(li);
  }

  // 해낸 일로 이동
  function moveToDoneList(taskItem) {
    const li = document.createElement("li");
    li.textContent = taskItem.textContent.replace("완료", "").trim();

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(deleteButton);
    doneList.appendChild(li);
    taskItem.remove(); // 원래 할 일 목록에서 삭제
  }
});
