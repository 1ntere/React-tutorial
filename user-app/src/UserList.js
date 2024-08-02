import './App.css';
import {useState} from "react";

function UserList() {
  //유저 초기 목록과 유저가 추가될 목록을 담을 변수명을 설정
  const [users, setUsers] = useState([]);
  //useState([]) : 초기 변수 users가 아무런 유저 목록을 담고 있지 않기 때문에 users = []; 빈 배열로 설정
  const [name, setName] = useState('');
  //useState('')와 useState("")와 useState(null)은 모두 초기값이 아무것도 없는 상태
  
  /*
  1번. const 추가버튼 = () => {} : return 존재(return이 필수는 아니고, 작성할 수 있다)
  2번. const 추가버튼 = () => () : return 없음
  =========================================
  [Java에서]
  1번과 비슷한 것
  public 자료형 추가버튼 {
    return 자료형 "자료값";
  }
    //return이 필요함

  2번과 비슷한 것
  public void 추가버튼 {
    System.out.println("안녕하세요");
  }
    //return이 필요없음
  =========================================
  [예시]
  1번
  const 인사기능 = () => {
    const 인사메세지 = "안녕하세요";
    return 인사메세지;
  }

  2번
  <p>{인사기능}</p>
  const 인사기능 =() => (
    alert("좋은아침입니다~");
  )
  */
  const 추가버튼 = () => {
    setUsers([...users, name]); //...기존유저목록, 이름
    setName('');
  }
                 //index : map에 있는 index
  const 삭제버튼 = (index) => {        //user : 유저명
                                            //i : users에 있는 유저가 저장된 번호
    const 삭제후유저목록 = users.filter((user, i) => i !== index)
    /*
    (user, i) : ()안에 있으므로 지역변수
    users    .filter((user , i        ) => i !== index)
    유저목록들.      ((유저명, 각 유저가 기입된 번호) => 배열에 지정된 번호 같지 않은 유저번호만 삭제하기 누른번호를 유저목록에넣어주기
    */
    /*
    ★ filter : 만약에 선택한 한 명만 남기고 나머지를 삭제하고 싶다면 i !== index 대신 i === index 로 수정하기
    1. const 삭제후유저목록 = users.filter((user, i) => i !== index)
    삭제하고 싶은 유저 1개만 삭제
    2. const 삭제후유저목록 = users.filter((user, i) => i === index)
    선택한 유저 1개 빼고 모두 삭제
    */
    setUsers(삭제후유저목록); //유저목록 교체하기
  }

  return (
    <div className="App">
      <h1>유저 리스트</h1>
      <hr/>
      <h3>유저 추가하기</h3>
      <input type='text'
             value={name}
             onChange={(e) => setName(e.target.value)}/>
      <button onClick={추가버튼}>추가하기</button>
      <hr/>
      <h3>유저 리스트 목록 보기</h3>
      <pre><li>인덱스 - 유저명                </li></pre>
   {/* users : 유저 목록들
               ex. ["홍길동", "강감찬", "이순신"] */}
               {/* user : 유저 1명 */}
                     {/* Index : 고유 번호 */}
      {users.map( (user, index) => (
        <li key={index}>
          {index + 1} - {user}
          <button onClick={ () => 삭제버튼(index) }>삭제하기</button>
        </li>
      ))}
  {/* ))} : ★★★★★ map 같은 경우 ))}이 원칙 */}
              {/* 
              <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
              onClick={ () => 삭제버튼(index) } :  e = 특정 변화는 값이나 변화가 있는 것을 감지
                                                  button의 경우 버튼을 클릭하기만 하고, 특정 값이 랜덤으로 설정되는 부분이 없기 때문에
                                                  버튼에서는 e(=event)와 같은 변수를 사용하지 않음
                                                  input의 경우 사용자가 어떤 값을 작성할지 컴퓨터가 모르기 때문에
                                                  사용자가 작성한 값을 바라보기 위한 e.target.value를 사용하기 위해서 e(=event)와 같은 변수를 사용함
              */}
    {/* <li key=1>홍길동</li> */}
    {/* <li key=2>강감찬</li> */}
    {/* <li key=3>이순신</li> */}
    </div>
  );
}

export default UserList;
