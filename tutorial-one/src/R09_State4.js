import React, {useState} from "react";

const 예제4번 = (data) => {
    //나이 계산하기
    const [age, setAge] = useState(Number(data.init));
                                      {/* data.init : 예제4번의 태그 안에 init의 값 */}

    return (
        <div className="count-container">
            <button onClick={() => {setAge(age -  Number(data.years))}}>
                                       {/* age : const [age] 의 초기값 = init의 값
                                                                         현재 : 40 */}
                                              {/* Number() : 숫자화 해주는 객체 */}
                                                     {/* data.years : 예제4번의 태그 안에 years의 값
                                                                      현재 : 1 */}
                -{data.years}년
            {/* -{data.years}년 : 버튼의 안에 들어간 이름 */}
            </button>
            <h3>현재 나이는 {age}</h3>
                        {/* age : const [age] 의 초기값 = init의 값
                                                          현재 : 40 */}
            <button onClick={() => {setAge(age +  Number(data.years))}}>
                +{data.years}년
            </button>
        </div>
    )

}
export default 예제4번;