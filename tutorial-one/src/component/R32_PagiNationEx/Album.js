import React, {useState, useEffect} from "react";
import Pagination from "./PagiNation";
import axios from "axios";
import './Album.css';

const Album = () => {
    const [photos, setPhotos] = useState([]);
         //photos : 사진들
                 //setPhotos : 페이지번호를 클릭할 때 들어갈 사진들
    const [currentPage, setCurrentPage] = useState(1);
         //currentPage : 현재 페이지
                                        //useState(1) : 현재 페이지를 맨 처음 1번 페이지로 설정
    const [photosPerPage] = useState(5);
                          //useState(5) : 한 페이지당 사진을 5개씩 보겠다 설정

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                setPhotos(res.data);
            })
            .catch((error) => {
                alert("사진 데이터를 가져오는데 실패했습니다. ", error);
            });
    }, []);

    //페이지마다 어디서부터 어디까지 가져올 것인지 설정
    const lastPhoto = currentPage * photosPerPage;
    const firstPhoto = lastPhoto - photosPerPage;
    const currentPhoto = photos.slice(firstPhoto, lastPhoto);

    //페이지 변경 처리
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="album-container">
            <h1>사진첩</h1>
            <div className="album-content">
                {currentPhoto.map(photo => (
                    <div key={photo.id} className="album">
                        <img src={photo.thumbnailUrl}/>
                    </div>
                ))}
            </div>
            <Pagination
                itemPerPage={photosPerPage}
                totalItems={photos.length}
                paginate={paginate}
                currentPage={currentPage} />
        </div>
    )
}
export default Album;