import React, {useState} from "react";
import axios from "axios";

const Axios_Ex2 = () => {
    const [data, setData] = useState(null);

    const 불러오기버튼 = () => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then (res => {
                setData(res.data);
            })
            .catch (() => {
                alert("데이터를 가져오는데 실패했습니다.");
            })
    }

    return (
        <>
            <h1>버튼을 클릭하면 JSON 안에 작성된 Comments 내용 가져오기</h1>
            <button onClick={불러오기버튼}>불러오기</button>
            <br/>
            {data && <textarea rows={20} cols={80}
                               value={JSON.stringify(data, null, 4)}
                               readOnly={true}/>}
        </>
    )
}
export default Axios_Ex2;