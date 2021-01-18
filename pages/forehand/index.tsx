import Layout from "../../components/Layout";
import NoButton from "../../components/NoButton";
import YesButton from "../../components/YesButton";
import styles from "../../styles/Home.module.css";

const index = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Q : 볼의 컨트롤이 좋고 스핀으로 위력적인 샷을 구사 할 수 있다.
        </h1>
        <div>
          <YesButton></YesButton>
          <NoButton></NoButton>
        </div>
      </main>
    </Layout>
  );
};

export default index;
