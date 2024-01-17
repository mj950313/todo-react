import React, { useState, useEffect } from 'react';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo',
          'username': 'KDT7_KimMinJae'
        }
      });
  
      if (response.ok) {
        const fetchedTodos = await response.json();
        // createdAt을 기준으로 오름차순 정렬
        const sortedTodos = fetchedTodos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setTodos(sortedTodos);
      } else {
        console.error('할 일 목록을 불러오는 데 실패했습니다.');
      }
    } catch (error) {
      console.error('할 일 목록을 불러오는 중 오류 발생:', error);
    }
  };

  const addTodo = async () => {
    if (!newTodo.trim()) return; // 빈 문자열 방지
    try {
      const response = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo',
          'username': 'KDT7_KimMinJae'
        },
        body: JSON.stringify({ title: newTodo }),
          title: '아침 먹기!'
      });

      if (response.ok) {
        const addedTodo = await response.json();
        setTodos([...todos, addedTodo]);
        setNewTodo('');
      } else {
        console.error('할 일 추가 실패');
      }
    } catch (error) {
      console.error('할 일 추가 중 오류:', error);
    }
  };

  const deleteTodo = async (id) => {
    // 삭제 확인 추가
    const isConfirmed = window.confirm('이 할 일을 삭제하시겠습니까?');
    if (!isConfirmed) {
      return; // 사용자가 확인하지 않으면 함수를 종료합니다  
    }
    try {
      const response = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo',
          'username': 'KDT7_KimMinJae'
        }
      });
      if (response.ok) {
        setTodos(todos.filter(todo => todo.id !== id));
      } else {
        console.error('할 일 삭제 실패');
      }
    } catch (error) {
      console.error('할 일 삭제 중 오류:', error);
    }
  };


  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.title);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditText('');
  };

  const saveTodo = async (id) => {
    try {
      const response = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo',
          'username': 'KDT7_KimMinJae'
        },
        body: JSON.stringify({
          title: editText, // 수정된 제목
          done: false,     // 완료 여부
          order: 1         // 순서
        })
      });
  
      if (response.ok) {
        const updatedTodo = await response.json();
        setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
        cancelEditing();
      } else {
        console.error('할 일 수정 실패');
      }
    } catch (error) {
      console.error('할 일 수정 중 오류:', error);
    }
  };

  return (
    <div>
      <form className='todobox' onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
        <input
          type='text'
          placeholder='할 일이 무엇인가요?'
          className='todoinput'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          maxLength={25}
        />
        <button type='submit'></button>
      </form>
      <ul className='todoul'>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <input
                type='text'
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                maxLength={25}
              />
            ) : (
              <span>{todo.title}</span>
            )}
            {editingId === todo.id ? (
              <div className='todobtn'>
                <button type='button' onClick={() => saveTodo(todo.id)}>✔️</button>
                <button type='button' onClick={cancelEditing}>🥕</button>
              </div>
            ) : (
              <div className='todobtn'>
                <button type='button' onClick={() => startEditing(todo)}>✔️</button>
                <button type='button' onClick={() => deleteTodo(todo.id)}>🥕</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
