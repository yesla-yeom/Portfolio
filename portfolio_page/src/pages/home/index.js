import React from "react";
import Typewriter from "typewriter-effect";
import homeStyles from "../../styles/home.module.css";

const MainHome = () => {
  return (
    <>
      <div className={homeStyles.mainbox}>
        <div className={homeStyles.titleframe}>
          <div className={homeStyles.titlebox0}>
            <div className={homeStyles.titlebox1}>안녕하세요!</div>
            <div className={homeStyles.titlebox2}>
              <Typewriter
                options={{
                  strings: ["Front", "React", "진지한", "배고픈"],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 150,
                  backSpeed: 100,
                }}
              />{" "}
              &nbsp;개발자 염예나입니다.
            </div>
            <div className={homeStyles.titlebox3}>
              현재 사이트는
              <p />
              <Typewriter
                options={{
                  strings: ["React / Next.js / Express"],
                  autoStart: true,
                  loop: true,
                  typeSpeed: 150,
                  backSpeed: 100,
                }}
              />
              등을 이용하여 제작되었습니다.
            </div>
            <div className={homeStyles.titlebox4}>
              당신과 함께 성장하고 싶은 염예나가.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHome;
