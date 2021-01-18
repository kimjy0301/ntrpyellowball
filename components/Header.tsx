import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/test">
        <a>Test</a>
      </Link>
    </div>
  );
};

export default Header;
