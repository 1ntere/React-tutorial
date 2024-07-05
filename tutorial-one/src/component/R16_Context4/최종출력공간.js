import React, {useState} from "react";

import 유저정보전달 from "./유저정보모두저장.js";
import 작성공간 from './작성공간.js'

//작성하는 칸을 가져오고 출력도 할 수 있도록 해주는 Componenet
const 멤버가입 = () => {
    const [userList, setUserList] = useState([]);

    return (
        <유저정보전달.Provider value={{userList, setUserList}}>
            <작성공간/>
            {/* 가입한 유저의 정보를 출력하기 */}
            <div>
                {userList.map((유저, index) => {
                    return (
                        <ul key={index}>
                            <li>가입 순서 : {index}</li>
                            <li>이 름 : {유저.inputName}</li>
                            <li>핸드폰번호 : {유저.inputPhone}</li>
                        </ul>
                    )
                })}
            </div>
        </유저정보전달.Provider>
    )
}

export default 멤버가입;