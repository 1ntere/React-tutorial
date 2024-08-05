const User = ({user, userList, setUserList, setEditUser}) => {
    /*★★★★★
    1번
    const User = ({user, userList, setUserList, setEditUser}) => {

    2번
    const User = (props) => {
        const user = props.user;  
        const userList = props.userList;
        const setUserList = props.setUserList;
        const 수정버튼 = props.setEditUser;

    1번과 2번은 동일
    ★★★★★*/

    const deleteUser = () => {
      const newUserList = userList.filter((item) => (
        item !== user
           //!== : 선택한 항목만 삭제
           //=== : 선택한 항목만 제외하고 모두 삭제
      ));
        /* ★★★★★
        위에서와 똑같이

        1번
            const newUserList = userList.filter((item) => (
                item !== user
            ));  

        2번
            const newUserList = userList.filter((item) => {
                return item !== user;
            });  
        
        1번과 2번은 같은 코드이다
        ★★★★★ */
  
      setUserList(newUserList);
    };
  
    return (
      <tr>
        <td>{user.username}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.phone}</td>
  
        <td>
          <button onClick={deleteUser}>삭제하기</button>
        </td>
        <td>
            <button onClick={() => setEditUser(user)}>수정하기</button>
        </td>
      </tr>
    );
};
export default User;