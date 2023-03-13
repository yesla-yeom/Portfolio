import skillStyles from "../../styles/skill.module.css";
import Image from "next/image";

const Skill = () => {
  return (
    <div className={skillStyles.body}>
      <h1 className={skillStyles.mainbox}>
        s&nbsp;k&nbsp;i&nbsp;l&nbsp;l&nbsp;s
      </h1>
      <ul>
        <div className={skillStyles.gridbox}>
          <h2>Front-End</h2>
          <div className={skillStyles.flexbox}>
            <Image src="/skillimg/html.png" alt="" width={100} height={100} />
            <Image src="/skillimg/css.png" alt="" width={100} height={100} />
            <Image src="/skillimg/js.png" alt="" width={100} height={100} />
            <Image src="/skillimg/react.png" alt="" width={100} height={100} />
            <Image src="/skillimg/ts.png" alt="" width={100} height={100} />
          </div>
        </div>
        <div className={skillStyles.gridbox}>
          <h2>Back-End</h2>
          <div className={skillStyles.flexbox}>
            <Image src="/skillimg/node.png" alt="" width={100} height={100} />
            <Image src="/skillimg/next.png" alt="" width={100} height={100} />
            <Image src="/skillimg/mysql.png" alt="" width={100} height={100} />
          </div>
        </div>
        <div className={skillStyles.gridbox}>
          <h2>etc</h2>
          <div className={skillStyles.flexbox}>
            <Image src="/skillimg/aws.png" alt="" width={100} height={100} />
            <Image src="/skillimg/netlify.png" alt="" width={170} height={80} />
            <Image src="/skillimg/github.png" alt="" width={100} height={100} />
            <Image src="/skillimg/gitlab.png" alt="" width={200} height={100} />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Skill;
