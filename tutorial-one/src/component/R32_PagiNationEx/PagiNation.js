//2. 순차 페이지네이션
/*
itemPerPage : 한 페이지에 보여줄 항목 수
totalItems  : 전체 항목의 갯수
paginate    : 페이지 번호를 업데이트하는 함수
currentPage : 현재 보고 있는 페이지 번호
*/
const Pagination = ({itemPerPage, totalItems, paginate, currentPage  }) =>{
    const 페이지번호들 = [];
    const totalPages = Math.ceil(totalItems / itemPerPage);
                     //Math.ceil(totalItems / itemPerPage) : 전체 페이지 수 계산하고 올림처리

    for (let i = 1; i <= totalPages; i++) {
        페이지번호들.push(i);
    }

    //페이지 번호 새로고침 함수
    //모든 페이지 번호를 한 번에 보여주는 것이 아니라 10개씩 보여줄 것
    const renderPageNumber = () => {
        if (totalPages <= 10) {
            return 페이지번호들;
        } 
        //시작 페이지 번호
        const startPage = Math.max(1, currentPage - 5);
                                    //currentPage - 5 : 현재 페이지에서 5를 뺀 값
                                    //                  현재 페이지를 중심으로 해서 앞쪽에 있는
                                    //                  5개의 페이지 번호를 표시할 수 있도록 설정
                        //Math.max : 시작페이지 번호가 -(음수)가 나올 것을 방지
                        //Math.max(max가될수있는가장작은숫자, 숫자비교값) : max가 될 수 있는 가장 작은 숫자가
                        //                                               문지기처럼 그 밑으로는
                        //                                               max값을 가지지 못하도록 함
                        //           ex. Math.max(1, 현재페이지가 3일때 -5 = -2)
                        //               Math.max(1, -2) : 시작페이지 번호는 무조건 1
                        //           ex. Math.max(1, 현재페이지가 8일때 -5 = 3)
                        //               Math.max(1, 3) : 시작페이지 번호는 3
                                 //1 : 시작페이지가 -(음수)가 나오지 않게, 최소 1이 나올 수 있게

        //끝 페이지 번호
        const endPage = Math.min(totalPages, currentPage + 4);
                               //totalPages : 가장 큰 수
                               //             끝 페이지 번호는 전체 페이지 수를 초과할 수 없기 때문에
                               //             전체 페이지 수인 totalPages가 문지기처럼
                               //             이 이상의 값을 못 가져오도록 설정
                      //Math.min(총페이지수 15, 현재페이지12+4=16) : 15이상의 수가 들어올 수 없도록
                      //                                           마지노선이 총 페이지 수(15)가 됨

        //현재 페이지를 중심으로 해서 최대 10개의 페이지 번호를 전달
        return 페이지번호들.slice(startPage - 1, endPage);
                               //startPage - 1 : startPage = 1
                               //                배열의 인덱스는 0
                               //                인덱스값을 맞추기 위해 1-1=0, 0부터 마지막페이지
                               //                ex. 시작페이지 = 3, 마지막페이지 = 12
                               //                    (2, 12)가 되어 번호 3 ~ 12 까지

    }

    return (
        <nav>
            <ul className="pagination">
                {/* 페이지를 10페이지까지만 보여주고 */}
                {/* << 화살표를 이용해서 이전으로 기능 만들기 */}
                {currentPage > 1 && (<li>
                                        <a onClick={() => paginate(currentPage - 1)}
                                           href="!#"
                                           className="page-link">
                                            &laquo;
                                        </a>
                                    </li>)}

                {/* 모든 페이지 번호 */}
                {renderPageNumber().map(번호 => (
                    <li key={번호} className={`page-item ${currentPage === 번호 ? 'active' : ''}`}>
                        <a onClick={() => paginate(번호)} href="!#" className="page-link">
                            {번호}
                        </a>
                    </li>
                ))}
                {/* >> 화살표를 이용해서 다음으로 기능 만들기 */}
                {currentPage < totalPages && (<li>
                                                <a onClick={() => paginate(currentPage + 1)}
                                                   href="!#"
                                                   className="page-link">
                                                    &raquo;
                                                </a>
                                            </li>)}
            </ul>
        </nav>
    )
}

export default Pagination;