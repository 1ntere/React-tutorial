import React, {useState, useEffect} from "react";
import axios from "axios";

const Axios_Ex2 = () => {
    const [comments, setComments] = useState(null);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        //axios.get("localhost:8080/마이페이지/회원정보들")
            .then (res => {
                setComments(res.comments);
            })
            .catch (() => {
                alert("데이터를 가져오는데 실패했습니다.");
            });
    }, []);

    return (
        <>
            <h1>버튼을 클릭하면 JSON 안에 작성된 Comments 내용 가져오기</h1>
            <br/>
            <ul>
                {/* {회원정보들.map (각각의정보들 => ())} */}
                {comments.map (comment => (
                    <li key={comment.id}>
                        <strong>UserId : </strong>{comment.id} <br/>
                        <strong>Name : </strong>{comment.name} <br/>
                        <strong>Email : </strong>{comment.email} <br/>
                        <strong>Body : </strong>{comment.body} <br/>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Axios_Ex2;