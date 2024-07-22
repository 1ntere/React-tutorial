import React from "react";
import '../css/Home.css';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>이력서 및 포트폴리오</h1>
                <p>
                    환영합니다! 아래에서 지원 스킬과 포트폴리오를 확인하실 수 있습니다.
                </p>
            </header>

        {/***** 소개 section으로 part1과 part2가 존재 *****/}
            {/* part1 : 사진을 넣지 않고 소개만 작성하는 about */}
{/*
            <section className="home-about-one">
                <h2>소개</h2>
                <p>저는 권혁철 입니다. KH정보교육원에서 FullStack 과정을 수료했습니다.</p>
            </section>
*/}
            {/* part2 : 한 row를 두 colum으로 나눠서 좌측은 사진, 우측은 소개 작성 */}
            <section className="home-about-two">
                <h2>소개</h2>
                <div className="about-row">
                    <div className="about-image">
                        <img src="./hancom.jpg" alt="프로필 사진"/>
                    </div>
                    <div className="about-text">
                        <p>이름 : 권혁철</p>
                        <p>나이 : 25</p>
                        <p>학력 : 대학교 휴학</p>
                        <p>전공 : 전자전기공학부</p>
                        <p>이메일 : kwonhc9337java@gmail.com</p>
                        <p>깃허브 주소 : <a href="http://www.github.com/1ntere">http://www.github.com/1ntere</a></p>
                        <p>수료과정 : KH정보교육원 FullStack</p>
                        <p>교육일정 : 2024.04.03 ~ 2024.09.13</p>
                    </div>
                </div>
            </section>
        {/***** 보유 기술 섹션 *****/}
            <section className="home-skills">
                <h2>기술</h2>
                <ul>
                    <li>HTML / CSS / JavaScript</li>
                    <li>React</li>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>SQL : Oracle, MySql</li>
                </ul>
            </section>
        {/***** 프로젝트 소개 : 1개의 프로젝트 당 섹션 1개씩 작성 *****/}
            <section className="home-projects">
                <h2>프로젝트</h2>
                <div className="project-item">
                    <h3>중간 과제 프로젝트</h3>
                    <p>간단한 프로젝트 설명</p>
                    {/* Links to 이용해서 프로젝트 이동 js 작성하기 */}
                </div>

            </section>
        </div>
    )
}
export default Home;