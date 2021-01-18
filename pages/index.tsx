import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>노란공테니스 NTRP</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>노란공테니스 NTRP</h1>
          <h3>개발중...</h3>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://band.us/band/55139316"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by 노란공테니스
          </a>
        </footer>
      </div>
    </Layout>
  );
}
