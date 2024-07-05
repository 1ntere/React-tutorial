import React, {createContext, useContext, useState} from "react";

/* 1. Context 객체 생성 */
const TestContext = createContext();

/* 3. 자식 Component 생성 */
const 자식 = () => {
    // TestContext에서 제공된 값을 여기서 사용
    // const [number, setNumber] = useContext(TestContext);
       const {number, setNumber} = useContext(TestContext);
   
       return (
           <>
               <h3>자식 컴포넌트 위치</h3>
               <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}/>
               <후손 />
           </>
       )
   }

/* 4. 후손 Component 생성 */
/* 후손 Component에서 바꾼 숫자가 자식과 부모 숫자값에 반영이 될 수 있도록 작성 */
const 후손 = () => {
    const {number, setNumber} = useContext(TestContext);

    return (
        <>
            <h3>후손 컴포넌트 위치</h3>
            <input type="number" value={number} onChange={e => {setNumber(e.target.value)}}/>
        </>
    )
}

/* 2. 부모 Component 생성 */
const 부모 = () => {
    //숫자 상태 변수 선언
    const [number, setNumber] = useState(0); //Number 변수에는 초기값으로 0이 들어가 있음

    /*
        Context는 값을 1개만 제공할 수 있음
        2개 이상의 값을 제공하길 원한다면 {} 나 []로 묶어서 제공

        <TestContext.Provider value={ {number, setNumber} }>
        number와 setNumber를 {number, setNumber} 작성하면 아래와 같이 변환되어 전달됨
        {"number" : number, "setNumber" : setNumber}
        현재 상황
        {"number" : 0     , "setNumber" : 변환될값}
    */
    return (
        <TestContext.Provider value={ {number, setNumber} }>
            <h1>
                부모다. :
                {/* 부모 Component의 현재 값 출력 */}
                <span className="red">{number}</span>
            </h1>
            <자식/>
        </TestContext.Provider>
    )
}
export default 부모;






