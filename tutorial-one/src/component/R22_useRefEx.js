import React, {useRef, useEffect} from 'react';

//name, password를 작성하는 form
//useRef를 이용해서 password를 제일 먼저 입력하도록 focus 설정

/*
만약에 export default RefEx; 대신해서
export default를 컴포넌트에 한 번에 작성하길 원한다면

★ const로 컴포넌트가 시작하는 경우
export const 컴포넌트명 = () => {

}

★ function으로 컴포넌트가 시작하는 경우
export default function 컴포넌트명 {

}
*/
export const RefEx = () => {
    const passwordRef = useRef(null);

    useEffect(() => {
        if (passwordRef.current) {
            passwordRef.current.focus();
        }
    }, []);

    return (
        <>
            <h2>회원가입</h2>
            <form method="post">
                <label>이름 : </label>
                <input type="text" placeholder="아이디를 입력해주세요"/>
                <label>비밀번호 : </label>
                <input type="password"
                       ref={passwordRef}
                     //ref={passwordRef} : 비밀번호를 가장 먼저 입력하도록 설정
                       placeholder="비밀번호를 입력해주세요"/>
            </form>
        </>
    )
}
//export default RefEx;