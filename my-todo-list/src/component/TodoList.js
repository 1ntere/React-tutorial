function TodoList() {
    const [todos, setTodos] = useState(); //빈 배열로 설정
    const [input, setInput] = useState('');
  
    const addTodo = () => {
        setTodos([, { text: input, completed: false }]); //기존에 작성된 할 일 복제 후 추가
        setInput('');
    };
  
    const toggleTodo = (index) => {
      const newTodos =; //새로운 할일 추가
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    };
  
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <div>
          <input 
            value={} 
            onChange={                  } 
            placeholder="새로운 할 일을  추가하세요."
          />
          <button >할 일 추가하기</button>
        </div>
        <ul>
          {                      .                   ((                   ,                    ) => (
            <li 
              key={index} 
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none', 
                cursor: 'pointer' 
              }}
              onClick={() => toggleTodo(index)}
            >
              {                        }
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;
  