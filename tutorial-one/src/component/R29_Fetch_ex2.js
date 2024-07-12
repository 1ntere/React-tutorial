import React, {useState, useEffect} from "react";

const 사진리스트 = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => {
                return res.json();
            })
            .then(data => {
                //setPhotos(data); API 주소에 작성된 모든 데이터 가져오기
                setPhotos(data.slice(0, 10));
                        //data.slice(0, 10) : 데이터를 처음부터 10개 까지만 가져오기
            })
            .catch(error => {
                alert("에러가 발생했습니다." + error);
            })
    }, [])

    return (
        <>
            <h1>사진리스트</h1>
            <ul>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <p>{photo.title}</p>
                        <img src={photo.thumbnailUrl}/>
                    </li>
                ))}
            </ul>
        </>
    )
}
export default 사진리스트;
