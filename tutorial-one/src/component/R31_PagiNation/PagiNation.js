//1. 기본 페이지네이션
/*
itemPerPage : 한 페이지에 보여줄 항목 수
totalItems  : 전체 항목의 갯수
paginate    : 페이지 번호를 업데이트하는 함수
currentPage : 현재 보고 있는 페이지 번호
*/
const Pagination = ({itemPerPage, totalItems, paginate, currentPage  }) =>{
    const 페이지번호들 = []; //변수명을 나중에 변경하기 (페이지번호들 -> pageNumbers)

    //전체 항목 수와 페이지당 항목 수를 바탕으로 전체 페이지 수를 계산하고
    //페이지번호들에 페이지 번호를 저장시킬 것
    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
                       //Math.ceil() : 
                       //              ex) 전체 항목수가 53개, 한 페이지당 10개의 항목씩 보여줄 것
                       //              53 / 10 = 5.3 이므로 5개의 페이지네이션이 존재
                       //              ceil : 올림, 5.3 -> 6
        console.log("페이지네이션 i 값 : " + i);
        페이지번호들.push(i);
                 //.push(i) : push = 값을 추가, 페이지번호들에 만들어진 번호들을 추가
    }

    return (
        <nav>
            <ul className="pagination">
                {페이지번호들.map(번호 => (
                    <li key={번호} className={`page-item ${currentPage === 번호 ? 'active' : ''}`}>
                                          {/* `` : ★★★★★ ''이 아니라 ``임! */}
                                {/* 
                                className={`page-item ${currentPage === 번호 ? 'active' : ''}`}
                                    page-item 이라는 className이 존재
                                만약에 현재페이지와 map에서 가리키는 번호가 일치한다면
                                    className = "page-item active"
                                현재 페이지번호와 map에서 가리키는 번호가 다르다면
                                (현재 페이지 이외 다른 페이지 번호들)
                                    className = "page-item"
                                */}
                        <a onClick={() => paginate(번호)}
                           href="!#"
                               //!# : Click 이벤트가 발생했을 때 페이지가 새로고침 되는 것을 막음
                               //     chatGPT가 알려주는 e.preventDefault() 와 기능이 동일함
                               //     <a onClick={(e) => {e.preventDefault(); paginate(번호)}} href="/"/>
                           className="page-link">
                            {번호}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;