import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/forehand">
        <a>포핸드</a>
      </Link>
      <a href="https://band.us/band/55139316">Band</a>
    </div>
  );
};

export default Header;
