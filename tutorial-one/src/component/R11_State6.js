import React, {useState} from "react";

const 댓글내용 = (props) => {
    const {handler} = props;

    //id inputComment
    return (
        <div className="wrapper">
            <label htmlFor="inputComment">댓글 내용 : </label>
            <textarea id="inputComment" onChange={handler}/>
        </div>
    )
}
const 작성자 = ({handler}) => {
    //id inputWriter
    return (
        <div className="wrapper">
            <label htmlFor="inputWriter">댓글 작성자 : </label>
            <input type="text" id="inputWriter" onChange={handler}/>
        </div>
    )
}
const 댓글창 = () => {
    //상태변수 선언
    const [comment, setComment] = useState(''); // '' 나 아무것도 안쓰면 빈 칸이 기본이 됨
    const [writer, setWriter] = useState('');

    const 댓글내용조종 = (e) => {
        setComment(e.target.value)
    }
    const 작성자조종 = (e) => {
        setWriter(e.target.value)
    }

    return (
        <>
            {/* 
            댓글 입력 창과 댓글 작성자 보여주고
            댓글과 댓글작성자가 모두 안적혀 있으면 버튼 비활성화
            모두 적혀있으면 버튼 활성화
             */}
            <작성자 handler={작성자조종}/>
            <댓글내용 handler={댓글내용조종}/>

            <button disabled={comment.length === 0 || writer.length === 0}>
                댓글작성
            </button>
        </>
    )
}
export default 댓글창;