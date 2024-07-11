import React, {useState} from "react";
import axios from "axios";

const Axios_Ex2 = () => {
    const [data, setData] = useState(null);

    useEffect (() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then (res => {
                setData(res.data);
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
                {comments.map(comment => (
                    <li>
                        <strong>USERID : </strong>{} <br/>
                        <strong>ID : </strong>{} <br/>
                        <strong>TITLE : </strong>{} <br/>
                        <strong>Completed : </strong>{   ? 'Yes' : 'No'} <br/>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Axios_Ex2;