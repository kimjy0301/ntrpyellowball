import Layout from "../../components/Layout";
import styles from "../../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useRef } from "react";
import { LegacyRef } from "react";

const index = () => {
  const carouselRef: LegacyRef<Carousel> = useRef();

  useEffect(() => {
    // carouselRef.current?.onClickNext();
  }, []);

  const onbtnClick = () => {
    carouselRef.current?.onClickNext();
  };

  return (
    <Layout>
      <main className={styles.main}></main>
      <div style={{ width: "80%" }}>
        <Carousel
          showIndicators={true}
          showStatus={false}
          showArrows={false}
          autoPlay={false}
          ref={carouselRef}
        >
          <div className={styles.slider}>
            <h1 className={styles.title}>
              Q : 볼의 컨트롤이 좋고 스핀으로 위력적인 샷을 구사 할 수 있다.
            </h1>
            <div>
              <button onClick={onbtnClick} className={styles.yes}>
                O
              </button>
              <button onClick={onbtnClick} className={styles.no}>
                X
              </button>
            </div>
          </div>
          <div className={styles.slider}>
            <h1 className={styles.title}>
              Q : 강한 볼을 치기위해 포핸드를 많이 사용한다.
            </h1>
            <div>
              <button onClick={onbtnClick} className={styles.yes}>
                O
              </button>
              <button onClick={onbtnClick} className={styles.no}>
                X
              </button>
            </div>
          </div>
          <div className={styles.slider}>
            <h1 className={styles.title}>
              Q : 상황에 따라 좋은 터치를 구사하며 패싱샷을 적절히 구사한다.
            </h1>
            <div>
              <button onClick={onbtnClick} className={styles.yes}>
                O
              </button>
              <button onClick={onbtnClick} className={styles.no}>
                X
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </Layout>
  );
};

export default index;
