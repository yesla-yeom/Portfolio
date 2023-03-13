import aboutmeStyles from "../../styles/aboutme.module.css";

const AboutMe = () => {
  return (
    <div className={aboutmeStyles.body}>
      <h1 className={aboutmeStyles.mainbox}>a b o u t &nbsp;&nbsp;&nbsp;M e</h1>
      <ul>
        <div className={aboutmeStyles.rowbox}>
          <div className={aboutmeStyles.flexbox}>
            <li className={aboutmeStyles.title}>이름</li>
            <li className={aboutmeStyles.text}>염예나</li>
          </div>
          <div className={aboutmeStyles.flexbox}>
            <li className={aboutmeStyles.title}>주소</li>
            <li className={aboutmeStyles.text}>경기도 하남시</li>
          </div>
          <div className={aboutmeStyles.flexbox}>
            <li className={aboutmeStyles.title}>이메일</li>
            <li className={aboutmeStyles.text}>yenana17@gmail.com</li>
          </div>
          <div className={aboutmeStyles.rowbox}>
            <div className={aboutmeStyles.flexbox}>
              <li className={aboutmeStyles.title}>연락처</li>
              <li className={aboutmeStyles.text}>010-3139-5522</li>
            </div>
          </div>
          <div className={aboutmeStyles.flexbox}>
            <li className={aboutmeStyles.title}>취미</li>
            <li className={aboutmeStyles.text}>드라이브</li>
          </div>
          <div className={aboutmeStyles.flexbox}>
            <li className={aboutmeStyles.title}>특기</li>
            <li className={aboutmeStyles.text}>사진촬영</li>
          </div>
          <div className={aboutmeStyles.flexbox}>
            <li className={aboutmeStyles.title}>깃헙</li>
            <li className={aboutmeStyles.text}>
              <a href="https://github.com/yesla-yeom">
                https://github.com/yesla-yeom
              </a>
            </li>
          </div>
          <div className={aboutmeStyles.flexbox}>
            <li className={aboutmeStyles.title}>블로그</li>
            <li className={aboutmeStyles.text}>
              <a href="https://yesla.tistory.com/">
                https://yesla.tistory.com/
              </a>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default AboutMe;
