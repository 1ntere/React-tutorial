import React, {useRef, useEffect} from 'react';

function SignUpForm() {
    /*
    1. const [emailRef, setEmailRef            ] = 초기값;
             [변수명   , 변경해서변수명에넣어줄 값] = 해당변수명의초기값;
    2. const emailRef =                       useRef                      (null);
             변수명    = 새로고침해서 추후에 값이 변경되더라도 값을 고정하겠다.(어떤 초기값을 넣어줄 것인가)
    */
    /*
    const emailRef = useRef(null); 는
    emailRef {
        current : null
    } 이 자동 생성됨

    const pwRef = useRef(1); 은
    pwRef {
        current : 1
    } 이 자동으로 생성됨
    */
    const emailRef = useRef(null);
        //처음에는 null 값을 갖지만, 나중에는 특정 값으로 변경될 것이며, 
        //React가 새로고침되어도 변경된 특정 값을 유지할 수 있도록 useRef 설정
    
    //useEffect를 사용해서 []안에 값을 비워줌으로, 최초 1회만 실행하는 기능 설정
    useEffect(() => {
        //만약에 SignUpForm이 실행되면 바로 수행할 기능 설정
        if (emailRef.current) {
            emailRef.current.focus(); //처음 입력창에 null인 값이 자동으로 이동
        }
    }, []);
     //[] : 빈 배열 [] 로 넘겨주어 최초 1회만 실행

     //useRef로 설정한 태그값에서 current는 기본으로 null값을 갖고있음
     //current = 현재, 지금

    return (
        <div>
            <h2>회원가입</h2>
            <form>
                <label>이메일</label>
                <input type="email"
                       ref={emailRef}
                     //ref={emailRef} : 이메일을 가장 먼저 입력하도록 설정
                       placholder="이메일을 입력해주세요."/>
                <label>비밀번호</label>
                <input type="password" placeholder="비밀번호를 입력해주세요"/>
            </form>
        </div>
    )
}

export default SignUpForm;