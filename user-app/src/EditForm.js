import { useState } from "react";

const EditForm = ({user, updateUser}) => {
/*
userList = [
{ username: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" },
{ username: "유저2", age: 27, gender: "여자", phone: "010-2674-0093" },
{ username: "유저3", age: 30, gender: "남자", phone: "010-3784-2834" },
]

{userList.map((item, index) => {
return( <User
    key={"user" + index}
    user={item}
    userList={userList}
    setUserList={setUserList}
    수정버튼={setEditUser}
/>)
})}

유저리스트를 item으로 유저 정보를 1명씩 전달받음
전달받은 유저 정보를 user 변수명에 item에 담긴 유저1명의 정보를 저장
저장된 user 변수명을 가져와서 EditForm에 아래와 같이 작성
const [formData, setFormData] = useState(user);
user에 담긴 정보가 formData라는 변수에 저장
따라서 formData에는 유저1명씩의 정보가 각각 저장되어 있음
formData = { username: "유저1", age: 24, gender: "남자", phone: "010-2732-2241" }
*/

    // 수정하기 폼에 기존에 수정하고자하는 유저 정보를 넣어주기위해
    // useState(user) 작성
    const [formData, setFormData] = useState(user);

    const 값변경하기 = (e) => {//값 변경에 대한 e(이벤트)가 발생하면
        const {name, value} = e.target;//이벤트가 발생한 곳의 name과 value를 가져옴
             //name : user의 이름이 아니라 각각의 input태그의 이름임
        setFormData({...formData, [name] : value})
                   //...formData : 원래의 정보
                                 //name : user의 이름이 아니라 각각의 input태그의 이름임
    }

    const 수정내용제출하기 = (제출잠깐멈추기) => {
        제출잠깐멈추기.preventDefault();
        //제출잠깐멈추기 : 제출잠깐멈추기는 e로 대체
        updateUser(formData);
    }

    return (
        <>
            <form> {/* Form에는 보통 Button으로 submit을 하거나, onSubmit을 사용 */}
                <h2>회원 정보 수정</h2>
                <label>
                    이름 : 
                    <input type="text" 
                           name="username"
                           value={formData.username}
                           onChange={값변경하기}/>
                </label>
                <label>
                    나이 : 
                    <input type="number"
                           name="age"
                           value={formData.age}
                           onChange={값변경하기}/>
                </label>
                <label>
                    성별 : 
                    <input type="text"
                           name="gender"
                           value={formData.gender}
                           onChange={값변경하기}/>
                </label>
                <label>
                    핸드폰번호 : 
                    <input type="text"
                           name="phone"
                           value={formData.phone}
                           onChange={값변경하기}/>
                </label>
                <button type="button" onClick={수정내용제출하기}>저장하기</button>

            </form>
        </>
    )

}
export default EditForm;