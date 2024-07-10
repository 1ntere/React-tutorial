import React from 'react';
//node_module 폴더가 보이지 않을 경우 자동으로 import 완성이 되지 않음

function UseEffectEx() {
    return (
        <>
            <h1>UseEffect</h1>
            <pre>
    useEffect 함수는 Component(function, const 시작)가
    렌더링(되게하다, 세워지다)될 때마다 특정 작업을 실행할 수 있도록 하는 Hook

    React에서 Component를 렌더링하다 = React에서 ㅁㅁㅁ.js(특정 js)코드 실행을 시작한다
            </pre>
        
            /*
            ★ 오류발생
            만약 <h1>태그와 <pre>태그를 <>와 </>로 감싸지 않는다면 오류가 발생함
            */

            ★ [useEffect] 사용 방법
            import {useEffect} from 'react';
            useEffect (function, deps);
            useEffect (() => {}, []); //function의 이름이나 특정 기능이 없을 때 익명함수로 표현
                    /* () => {} : =function */
                    /* function : ㅁㅁㅁ.js를 들어왔을 때 수행하고자 하는 작업 */
                              /* [] : =deps */
                              /* deps : 배열 형태로, 배열 안에는 검사하고자 하는 특정 값이나 빈 배열을 작성
                                        deps에 특정 값을 넣게 되면 Component가 실행될 때나 지정한 값이 업데이트 될 때
                                        useEffect에 적힌 function을 실행
                                        필수로 작성해야하는 것이 아님
                                            만약 deps를 작성하지 않고, function만 작성해서 사용하면
                                            ㅁㅁㅁ.js를 다시 시작할 때마다 useEffect에 작성된 function 함수가 호출됨 */
        </>
    )
}

export default UseEffectEx;