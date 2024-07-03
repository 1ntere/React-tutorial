const 부모3번 = (props) => {
    const {num, name, age, gender, phone} = props;
    return (
        <div className="info-ex">
            <ul>
                <li>번호 : {num} 번</li>
                <li>이름 : {name}</li>
                <li>나이 : {age}</li>
                <li>성별 : {gender}</li>
                <li>핸드폰 번호 : {phone}</li>
            </ul>
        </div>
    );
}
export default 부모3번;