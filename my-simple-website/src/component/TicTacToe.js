import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './TicTacToe.css';

const 배열랜덤섞기 = (배열) => {
    return 배열.sort(() => Math.random() - 0.5);
              //sort : 가지런히 정렬, 랜덤으로 나온 값을 정렬해줌
              //Math.random() - 0.5 : ☆Tip☆, 배열을 랜덤으로 섞을 때 자주 사용
              //                      -0.5 ~ 0.5 사이 생성
                           // - 0.5 : 0.5를 붙이지 않으면 0.0 ~ 0.99999999999999... 사이 값을 출력
}

const TicTacToe = () => {
    const [numbers, setNumbers] = useState(배열랜덤섞기([...Array(9).keys()].map(n => n + 1)));
    //numbers : 1 ~ 9까지 숫자가 섞인 배열
                                                      //...Array(9) : 숫자가 담길 그릇을 9개 만듦 = 숫자가 담길 그릇이 9개
                                                                 //.keys() : 숫자를 가지고 옴
                                                                              //n => n + 1 : 어떤 숫자를 가지고 오냐면
                                                                              //0 => 0 + 1 : 1 ~ 9 까지 생성
        //1 ~ 9 까지 생성된 수를 배열랜덤섞기를 이용해서 숫자가 담긴 그릇을 섞는 것

    const [nextNumber, setNextNumber] = useState(1);
                                               //1 : 사용자가 클릭해야하는 처음 수가 1이기 때문

    //게임 상태에 따라 사용자한테 보여줄 메세지를 표현
    const [message, setMessage] = useState();
                                         // : 처음에는 표시할 말이 없기 때문에 빈 공간

    //다음 단계 버튼을 위한 변수 추가
    const [isCorrect, setIsCorrect] = useState(false);

    const 숫자클릭하기 = (number) => {
        //만약 현재 사용자가 클릭해야하는 숫자와 사용자가 클릭한 숫자가 서로 일치하는가?
        if (number === nextNumber) {
            if (number === 9) {
                setMessage('축하합니다. 모든 숫자를 순서대로 클릭했습니다!');
                setIsCorrect(true);
            } else {
                setNextNumber(nextNumber + 1);
            }
        } else {
            setMessage('틀렸습니다. 게임 재시작 버튼을 눌러 처음부터 다시 하세요.');
        }
    }

    const 재시작버튼 = () => {
        //다시 초기 숫자 세팅
        setNumbers(배열랜덤섞기([...Array(9).keys()].map(n => n + 1)));
        //다음숫자 세팅
        setNextNumber(1);
        //메세지 세팅
        setMessage('');
        //다시 게임을 시작해서 맞췄다는 사실도 false로 되돌리기
        setIsCorrect(false);
    }

    return (
        <div className="tictactoe-container">
            <h1>틱택토</h1>
            <div className="tictactoe-grid">
                {numbers.map((number) => (
                    <button className="tictactoe-button"
                            key={number}
                            onClick={() => 숫자클릭하기(number)}>
                        {number}
                    </button>
                ))}
            </div>
            <p>{message}</p>
            {isCorrect
                        ?
                            (<Link to="/tictactoetwostep">
                                <button className="nextStep-button">다음 단계로 이동</button>
                            </Link>)
                        : 
                            (<button className="restart-button"
                                     onClick={재시작버튼}>게임 재시작</button>)}
        </div>
    )
}
export default TicTacToe;