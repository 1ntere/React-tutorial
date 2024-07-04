import React, {useState} from "react";

const 예제3번 = (props) => {
    //props로 전달받을 값 중 init값을 count 초기값으로 설정하기
                          //init : 초기값

    //setCount()를 이용해서 count값을 변경하는 코드를 작성
    //예제 2번 객체에서 변경이 되는 부분만 다시 표현을 진행

    const [count, setCount] = useState(Number(props.init));
                            //useState(숫자화(App.js에서가져온값.초기값(=init)이라는변수에담긴값));
                                     //Number : JavaScript 안에 Number라는 객체를 이용해서
                                     //         받아오는 값을 숫자로 한 번 더 처리
                                     //         String처럼 문자열로 오는 값일 수 있으니
                                     //         한 번 더 숫자화 시켜줌
                                            //props.init = init 50
         //count = init = 50

    return (
        <div className="count-container">{/* <div></div>나 <></> 사용하기 */}
            <button onClick={() => setCount(count - Number(props.step))}>
                -{props.step}
            </button>

            <h3>{count}</h3>

            <button onClick={() => setCount(count + Number(props.step))}>
                +{props.step}
            </button>
        </div>
    )

}
export default 예제3번;