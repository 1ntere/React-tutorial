import React, { useState } from "react";

const Loading = () => {
    const [로딩, set로딩] = useState(true);

    if (로딩) return <div>로딩중입니다.</div>;

    //또는 아래와 같이 작성
    //div안에 로딩 이미지를 넣을 수도 있음
    if (로딩) {
        return (
            <div>로딩중입니다.</div>
        )
    }

    //★ 주의할 점 : 데이터를 모두 가지고오면 set로딩을 false로 변경해주어야 함
    //              만약 set로딩을 false로 변경하지 않음녀 그 페이지는 계속 로딩중 만 보일 것임

    return (
        <>
            <h1>로딩표기</h1>
            <pre>
    만약에 로딩중이라면 로딩 div를 보여주겠다.
    if (로딩) return <div>로딩중입니다.</div>;
        JavaScript에서 innerHTML을 사용했던 것처럼 React에서도 innerHTML을 사용할 수 있음

    trick : 사람의 눈을 현혹시키는 속임수
    영화 데이터에서 이미지가 있기 때문에 데이터를 느리게 가지고 옴
    따라서 사용자에게 화면이 보여지기 전에 로딩중이라는 표시를 보여줌으로
    사용자는 조금 더 기다릴 수 있는 시간을 갖게 됨
    처음엔 로딩을 true로 설정해서 임시 화면을 띄워놓고
    데이터를 모두 가지고 오면 로딩을 false로 변경해서 기존 리턴에 작성한 html 코드를 보여줌



    if (로딩) return <div>로딩중입니다.</div>

    위 코드와 아래 코드는 동일한 기능으로 작동

    if (로딩) {
        return (
            <div>로딩중입니다.</div>
        )
    }
    */
            </pre>
        </>
    )
}
export default Loading;