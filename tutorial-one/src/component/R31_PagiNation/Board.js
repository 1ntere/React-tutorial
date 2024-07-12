import React, {useState, useEffect} from "react";
import Pagination from "./PagiNation";
import axios from "axios";

const Board = () => {
    //데이터 정보 가져오는 변수명 작성
    const [data, setData] = useState([]);

    //추후에 변수명 변경 (현재페이지 -> currentPage)
    const [현재페이지, set현재페이지] = useState(1);
                                             //1 : 현재페이지의 초기값은 1임
    //추후에 변수명 변경 (페이지당게시글수 -> itemPerPage)
    const [페이지당게시글수] = useState(10);
                                     //10 : 한 페이지에서 게시글 10개씩 보여줌

    //Axios 이용해서 항목 가져오기
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                alert(err + " 발생!!!");
            });
    }, []);

    //현재페이지에서의 첫 번째 항목과 마지막 항목, 게시글리스트 체크
    //추후에 변수명 변경 (마지막항목 -> lastItem)
    const 마지막항목 = 현재페이지 * 페이지당게시글수;
    //추후에 변수명 변경 (첫번째항목 -> firstItem)
    const 첫번째항목 = 마지막항목 - 페이지당게시글수;
    const 게시글리스트 = data.slice(첫번째항목, 마지막항목);

    //이동할 페이지를 클릭할 때 사용할 핸들러
    const paginate = (페이지번호) => set현재페이지(페이지번호);

    return (
        <div className="container">
            <h1>리액트 페이지네이션 예제</h1>
            {/* ul 태그 안에는 각 항목들의 제목이 보여질 것 */}
            <ul className="list-group mb-4">
                {게시글리스트.map(항목 => (
                    <li key={항목.id} className="list-group-item">
                        {항목.title}
                    </li>
                ))}
            </ul>
            {/* 페이지네이션은 아래 페이지네이션 태그에서 동작 */}
            <Pagination
                itemPerPage={페이지당게시글수}
                totalItems={data.length}
                paginate={paginate}
                currentPage={현재페이지} />
        </div>
    )

}
export default Board;