import React, {useState} from 'react';
/* 
React 초반에 function이라는 함수로 묶어서 사용을 했지만
기능에 있어 부족한 부분이 발생
부족한 부분을 class화로 사용하여 코드를 작성
그런데 class로 작성하다보니 render와 같이 불필요한 코드들을 많이 작성하게 되었고,
다시 function으로 돌아옴

function으로 돌아왔는데 초기에 function에서 부족한 부분을 채우기 위해
Hook이라는 기능을 만듧

Hook 종류 = react에서 어떤 동작이나 상태를 표현하거나 변경할 때 사용하는 기능들
    1. useState
    2. useEffect
    3. useContext
    4. useReducer
    5. useMemo
    6. useCallback
    7. useRef. useRef
    8. useCustom Hook -> 개발자가 만드는 Hook 종류

use로 시작하는 Hook을 1개 사용할 때는
import Reaxt, {useState} from 'react';

2개 이상의 Hook을 사용하겠다면
import Reaxt, {useState, useEffect, useContext, ... 넣고싶은기능작성} from 'react';

State : 컴포넌트(객체)의 상태

useState() 함수
    컴포넌트(객체)의 상태(state)값이 변하게 될 경우
    해당하는 객체를 다시 새로고침하여 실행하는 함수
    다시 새로고침하다 = 다시 렌더링하다 = ReRendering = 다시 표현하다
    Rendering = 표현
*/

/* 
★ React에서 가장 처음에 나온 방식
function 예제1 () {}

★ ES6(ECMScript 6 = JavaScript6 문법 현재 가장 최신 버전)
const State예제1 = () => {}

★ React에서 사용하는 전통적인 방식
class 예제1 extends Component {}

셋 모두 표현하는 방식이 다르지만 의미하는 바는 일치함
*/
const State예제1 = () => {
    const [test, setTest] = useState('A');
  //const [초기값변수, set초기값변수] = useState('처음에 들어갈 값이 무엇인지 작성');
         //test : 가장 처음에 가지고 있는 변수 값, 처음에 값이 없으면 값이 없는 상태로 있음
               //setTest : test 값을 변경하기 위한 값
                          //useState('A') : test가 처음에 가지고 있을 값

    //버튼을 클릭할 경우 동작할 함수(이벤트 핸들러) 기능 작성
    const 값변경하기 = () => {
        if (test === 'A') setTest('B')
        else setTest('A');
        /* 
        React는 {} 생략 가능하므로 위의 코드와 아래의 코드는 동일함
        if (test === 'A') {
            setTest('B')
        } else {
            setTest('A');
        }
        */
    }

    return (
        //return 안에는 !Doctype 부터 html과 head, body와 같은 태그를 사용 x
        //  주로 <></>나 <div></div> 태그로 전체를 감싸줌
        //그렇다면 왜 !Doctype 부터 html과 head, body와 같은 태그를 사용하지 않는가?
        //  public폴더 안의 index.html 코드 안에 <div id="root">라는 공간 안에
        //  우리가 만드는 javascript와 html, css와 같은 코드들이 모두 들어갈 것이기 때문
        <>
            <h1>{test}</h1>

            <button onClick={값변경하기}>변경클릭버튼</button>
            {/*
            buttom을 클릭해서 값이 변경하는 것을 확인할 예정
            그런데 ReactJs는 onclick을 쓸 때 onClick으로 카멜케이스 방식을 사용해서 표현
            html, Javascript = onclick
            React Javascript = onClick
            */}
        </>
    )
}

export default State예제1;