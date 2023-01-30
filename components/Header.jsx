import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="header-container container">
        <div className="logo">
          <Image src="/assets/images/Logo.png" alt="Logo" width="126" height="49" />
        </div>
        <div className="right">
          <nav>
            <ul>
              <li>
                <Link href="#">Ana səhifə</Link>
              </li>
              <li>
                <Link href="#">W2W nədir?</Link>
              </li>
              <li>
                <Link href="#">Üstünlüklər</Link>
              </li>
              <li>
                <Link href="#">Necə işləyir?</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
            </ul>
          </nav>
          <Link href="#" className="enter">DAXİL OL</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
