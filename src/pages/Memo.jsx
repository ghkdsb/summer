import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Memo = () => {
  const { date } = useParams();
  const [memo, setMemo] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const utcDate = new Date(date + 'T00:00:00Z'); // 날짜가 하루 밀리는 현상이 나타남. 그래서 한국시간 기준으로 맞출라고 +9 함
  const localDate = new Date(utcDate.getTime() + 9 * 60 * 60 * 1000);

  const localDateString = localDate.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  useEffect(() => {
    const memos = JSON.parse(localStorage.getItem('memos') || '{}');
    const todosMap = JSON.parse(localStorage.getItem('todos') || '{}');
    setMemo(memos[date] || '');
    setTodos(todosMap[date] || []);
  }, [date]);

  const handleSaveMemo = () => {
    const memos = JSON.parse(localStorage.getItem('memos') || '{}');
    memos[date] = memo;
    localStorage.setItem('memos', JSON.stringify(memos));
    alert('메모가 저장되었습니다!');
  };

  const handleAddTodo = () => {
    if (todoInput.trim() === '') return;
    const newTodos = [...todos, { text: todoInput, done: false }];
    setTodos(newTodos);
    const todosMap = JSON.parse(localStorage.getItem('todos') || '{}');
    todosMap[date] = newTodos;
    localStorage.setItem('todos', JSON.stringify(todosMap));
    setTodoInput('');
  };

  const toggleTodo = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
    const todosMap = JSON.parse(localStorage.getItem('todos') || '{}');
    todosMap[date] = updated;
    localStorage.setItem('todos', JSON.stringify(todosMap));
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
    const todosMap = JSON.parse(localStorage.getItem('todos') || '{}');
    todosMap[date] = updated;
    localStorage.setItem('todos', JSON.stringify(todosMap));
  };

  return (
    <>
      <style>
        {`
          button {
            font-family: 'NanumSquareNeo', sans-serif;
            margin: 0.8rem;
            padding: 10px 16px;
            border: none;
            border-radius: 50%;
            box-shadow: 3px 4px 10px rgba(147, 222, 61, 0.605);
            background-color: rgb(255, 255, 255);
            color: black;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            width: 95px;
            height: 40px;
          }

          button:hover {
            background-color: #8bec238a;
          }

          textarea::placeholder,
          input::placeholder {
            font-family: 'NanumSquareNeo', sans-serif;
            color: #aaa;
          }
        `}
      </style>
      <div style={styles.container}>


        <div style={styles.leftPanel}>
          <h3 style={styles.memoTitle}>{localDateString} 메모</h3>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            rows={8}
            cols={50}
            placeholder="메모를 입력하세요"
            style={{ width: '100%', fontFamily: 'NanumSquareNeo, sans-serif' }}
          />
          <br />
          <button onClick={handleSaveMemo}>메모 저장</button>
        </div>



        <div style={styles.rightPanel}>
          <h3 style={styles.list}>체크리스트</h3>
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="할 일을 입력하세요"
            style={{ fontFamily: 'NanumSquareNeo, sans-serif' }}
          />
          <button onClick={handleAddTodo}>추가</button>

          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {todos.map((todo, i) => (
              <li key={i} style={{ margin: '8px 0' }}>
                <label style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(i)}
                  />
                  {todo.text}
                </label>
                <button onClick={() => deleteTodo(i)} style={{ marginLeft: '10px' }}>
                  삭제
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '10rem 2rem 10rem 2rem',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
    flexWrap: 'nowrap'
  },
  leftPanel: {
    flex: 1,
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    border: '2px solid rgb(38, 180, 100)',
  },
  memoTitle: {
    color: 'rgb(33, 155, 94)',
  },
  rightPanel: {
    flex: 1,
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    border: '2px solid rgb(38, 180, 100)',
  },
  list: {
    color: 'rgb(33, 155, 94)',
  }
}

export default Memo;