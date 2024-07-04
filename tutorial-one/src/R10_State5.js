import React, {useState} from "react";

/* 1번 자식은 ID를 가진 객체 */
const ID값 = (props) => {
    //handler = 핸들러 = 어떤 값을 조종한다, 처리한다는 의미
    //코딩에서 핸들이라는 것은 값을 조종한다, 조정한다
    const {handler} = props;

    return (
        <div className="wrapper">
            <label htmlFor="inputId">ID : </label>
               {/* htmlFor : for 속성 */}
            
            <input type="text" id="inputId" onChange={handler}/>
                                        {/* onChange : 값이 바뀌었을 때 부모로부터 전달받은 함수 핸들러 수행*/}
        </div>
    )
}

/* 2번 자식은 PW를 가진 객체 */
const PW값 = ({handler}) => {
    return (
        <div className="wrapper">
            <label htmlFor="inputPw">PW : </label>
            <input type="password" id="inputPw" onChange={handler}/>
        </div>
    )
}

const 부모예제 = () => {
    //상태 변수 선언 (State, useState)
    const [id, setId] = useState(''); //맨 처음에 빈 값으로 넣어줄 때 '' 사용
    const [pw, setPw] = useState('');

    //id값조종 이라는 이벤트 핸들러 기능 설정
    const id값조종 = (e) => {
                    //e : event의 줄임말
                    //    이벤트, 동작, 행위
                    //      ex. 오늘 무슨 이벤트 있어?
                    //      ex. 오늘 무슨 행위 해?
                    //    이벤트리스너 : 동작(이벤트) 감지
                    //    이벤트핸들러 : 이벤트가 감지되었을 때 수행할 기능
        setId(e.target.value)
            //e.target.value : <ID값 handler={id값조종}/>에서 값이 변경되는 타겟(target)의 값(value)를 가져오겠다.
    }

    const pw값조종 = (e) => {
        setPw(e.target.value)
    }

    return (
        //props를 이용해 이벤트 핸들러용 함수를 자식 객체(컴포넌트)에 전달
        <>
            <ID값 handler={id값조종}/>
            <PW값 handler={pw값조종}/>
            {/* ID, PW 가 입력되지 않으면 버튼 비활성화 */}

            <button disabled={id.length === 0 || pw.length === 0}>
                {/* disabled : button을 클릭하지 못하게 비활성화
                               button 이외에도 input과 textarea에서 사용 가능
                               input과 textarea에 내용을 입력 못하게 비활성화 */}
                Login
            </button>
        </>
    )
}
export default 부모예제;