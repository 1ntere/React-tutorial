import React, { useState } from "react";
import {Link} from 'react-router-dom';
import '../TicTacToeTwoStep.css';

const 배열랜덤섞기 = (배열) => {
    return 배열.sort(() => Math.random() - 0.5);
}

const TicTacToeTwoStep = () => {
    const [numbers, setNumbers] = useState(배열랜덤섞기([...Array(20).keys()].map(n => n + 1)));

    const [nextNumber, setNextNumber] = useState(1);

    const [message, setMessage] = useState();

    const [isCorrect, setIsCorrect] = useState(false);

    const 숫자클릭하기 = (number) => {
        if (number === nextNumber) {
            if (number === 20) {
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
        setNumbers(배열랜덤섞기([...Array(20).keys()].map(n => n + 1)));
        setNextNumber(1);
        setMessage('');
        setIsCorrect(false);
    }

    return (
        <div className="tictactoetwostep-container">
            <h1>틱택토 2단계</h1>
            <div className="tictactoetwostep-grid">
                {numbers.map((number) => (
                    <button className="tictactoetwostep-button"
                            key={number}
                            onClick={() => 숫자클릭하기(number)}>
                        {number}
                    </button>
                ))}
            </div>
            <p>{message}</p>
            {isCorrect
                        ?
                            (<Link to="/tictactoe">
                                <button className="previousStep-button">이전 단계로 이동</button>
                            </Link>)
                        : 
                            (<button className="restarttwostep-button"
                                     onClick={재시작버튼}>게임 재시작</button>)}
        </div>
    )
}
export default TicTacToeTwoStep;