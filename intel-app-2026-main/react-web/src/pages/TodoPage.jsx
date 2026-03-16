import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import TodoItem from "../components/TodoItem";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const strTodos = localStorage.getItem("todos");
    return strTodos ? JSON.parse(strTodos) : [];
  });

  const handleCompleteToggle = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
    console.log(newTodos);
  };

  const handleDeleteTodo = (id) => {
    if (
      todos.find((todo) => todo.id === id)?.completed &&
      confirm("정말 삭제하시겠습니까?")
    ) {
      console.log(id);
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
      console.log(newTodos);
    }
  };

  const handleAddTodo = () => {
    if (todoInput.trim() !== "") {
      console.log(todoInput);
      const newTodo = { id: Date.now(), text: todoInput, completed: false };
      setTodos([...todos, newTodo]);
      setTodoInput("");
    }
  };

  const handleAddTodoKey = (e) => {
    if (e.key === "Enter" && todoInput.trim() !== "") {
      console.log(todoInput);
      const newTodo = { id: Date.now(), text: todoInput, completed: false };
      setTodos([...todos, newTodo]);
      setTodoInput("");
    }
  };

  const handleDeleteAllTodo = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      setTodos([]);
    }
  };

  const sortTodo = () => {
    if (confirm("정렬하시겠습니까?")) {
      const sorttodoC = [...todos]
        .filter((todo) => todo.completed === true)
        .sort((a, b) => a.text.localeCompare(b.text));
      const sorttodoY = [...todos]
        .filter((todo) => todo.completed === false)
        .sort((a, b) => a.text.localeCompare(b.text));
      // const sorttodo = [...todos].sort((a, b) => a.text.localeCompare(b.text));
      const sorttodo = [...sorttodoC, ...sorttodoY];
      setTodos(sorttodo);
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [todoInput, setTodoInput] = useState("");
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200 relative">
        {/* 헤더 */}
        <h1 className="text-3xl font-bold text-center mb-6">📝 투두리스트</h1>

        {/* 입력창 & 버튼 */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
            }}
            onKeyDown={handleAddTodoKey}
            placeholder="할 일을 입력하세요"
            className="flex-1 border border-gray-300 rounded px-4 py-3 outline-none"
          />
          <button
            onClick={handleAddTodo}
            className="bg-purple-500 text-white font-bold px-6 py-3 rounded"
          >
            추가
          </button>
        </div>

        {/* 할 일 목록 */}
        <ul className="max-h-[400px] overflow-y-auto pr-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCompleteToggle={handleCompleteToggle}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>

        <button
          onClick={handleDeleteAllTodo}
          className="absolute bottom-6 right-9 bg-red-500 text-white font-bold px-3 py-3 rounded"
        >
          모두삭제
        </button>
        <button
          onClick={sortTodo}
          className="absolute bottom-6 right-30 bg-green-500 text-white font-bold px-3 py-3 rounded"
        >
          정렬하기
        </button>
      </div>
    </div>
  );
}

export default TodoList;
