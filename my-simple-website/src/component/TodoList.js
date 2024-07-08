import { useState } from "react";
//todoList css import
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]); //빈 배열로 설정
    const [input, setInput] = useState('');
  
    //addTodo라는 기능이 들어간 버튼을 클릭하면
    const addTodo = () => {
        setTodos([...todos, { text: input, completed: false }]); //기존에 작성된 할 일 복제 후 추가
                    //todos : 기본으로 아무런 리스트가 없는 빈 배열이 존재
        //setTodos로 기본으로 아무런 리스트가 없는 목록에 새로운 목록을 하나씩 추가하기
                //[...todos] : 기존에 있던 todos 리스트를 복사해서
                              //text: input : value 값이 input으로 들어온 value값을 text라는 키에 저장
                                           //completed : 무언가를 끝내다
                                           //completed: false : 새로 추가된 일은 아직 완료하지 않은 일 이기 때문에 false
                                           //                   내 할 일을 완료하지 않았음의 표시
        /*
        ★ 오류가 발생한 코드
        setTodos([[...todos], { text: input, completed: false }]);
        ★ 오류의 원인
        이중 배열이 들어가져 있어서 리스트가 저장이 안 됨
        ★ 오류를 해결한 코드
        setTodos([...todos, { text: input, completed: false }]);
         */
        setInput('');

    };
    //할 일을 완료하면 완료 처리를 해주는 버튼
    //실수로 완료 처리를 했을 경우
    //한 번 더 클릭해서 미완료 처리로 바꿀 수 있음
    const toggleTodo = (index) => {
      const newTodos =[...todos]; //새로운 할일 추가
                    //[...todos] : 어떤 행동을 진행하기 전에 [...todos]로 복사본을 만들어서 진행
      newTodos[index].completed = !newTodos[index].completed;
      //새로운목록[]에서 자동으로 목록마다 주어지는 숫자에 있는 완료된(completed) 값을 가져와서 
      //사용자가 선택한 index 위치의 completed(완료/미완료) 값을 완료상태면 미완료상태로 변경하고
      //미완료상태면 완료상태로 변경하겠다.
      //새로운목록들[사용자가선택한목록번호].완료/미완료 = 완료->미완료, 미완료->완료로 상태 변경
      //newTodos   [index]               .completed  = !newTodos[index].completed;
      //!를 이용해서 boolean의 값인 true / false를 변경할 수 있음
      setTodos(newTodos);//상태가 변경된 목록을 다시 저장
    };
  
    return (
      <div className="TodoList">
        <h1>Todo List</h1>
        <div>
          <input className="todo-input"
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="새로운 할 일을 추가하세요."
          />
          <button className="todo-button" onClick={addTodo} >할 일 추가하기</button>
        </div>
        {/* 
        할 일이 추가되면 system.out.print와 같은 역할을 하는 map을 이용해서
        추가된 목록을 사용자에게 보여주기(출력하기)

        각 목록은
        <li key={목록리스트번호순}> {목록번호에 맞고, value=input에 작성한 text를 보여줌} <li>
        우리가 li태그를 클릭할 때 마다 할 일을 완료했는지, 미완료했는지 눈으로 확인할 수 있게 표기
        표기를 할 때 style태그를 이용해서 표기
        textDecoration : 밑줄
        line-through : 취소선
        만약에 할 일의 completed가 true이면 line-through을 이용해 취소선 그리기
        만약에 할 일의 completed가 false이면 none을 이용해 취소선 삭제
        overline : 글자 위에 선을 만듦
        underline : 글자 아래에 선을 만듦, a태그에 기본값으로 들어있는 line
         */}
        <ul className="todo-ul" >
          {todos.map((todo, index) => (
            <li className="todo-li" 
              key={index} 
              style={{ 
                textDecoration: todo.completed ? 'line-through' : 'none', 
                cursor: 'pointer' 
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoList;

/*
추후에 useEffect를 사용해서 웹사이트를 새로고침(f5) 하더라도 목록이 남아있을 수 있도록 업데이트할 예정
*/