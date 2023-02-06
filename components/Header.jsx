import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

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
                <AnchorLink href="#main">Ana səhifə</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about">W2W nədir?</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#advantage">Üstünlüklər</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#works">Necə işləyir?</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#subscribe">FAQ</AnchorLink>
              </li>
            </ul>
          </nav>
          <Link href="#" className="enter">
            DAXİL OL
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
