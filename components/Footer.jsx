import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="container">
          <div className="up">
            <div className="logo">
              <Image src="/assets/images/Logo-white.png" alt="Logo" width="126" height="49" />
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
            </div>
          </div>
          <div className="down">
            <div className="down-left-text">
              <h2>Rahat, Sürətli, Təhlükəsiz!</h2>
            </div>
            <div className="down-right-text">
              <div className="contact-footer">
                <p>BİZİMLƏ ƏLAQƏ</p>
                <p>+992 55 272 01 88</p>
                <p>www.W2W.az</p>
              </div>
              <div className="social-icons">
                <Link href="#">
                  <Image src="/assets/images/fb.svg" width="26" height="26" />
                </Link>
                <Link href="#">
                  <Image src="/assets/images/insta.svg" width="33" height="33" />
                </Link>
                <Link href="#">
                  <Image src="/assets/images/youtube.svg" width="26" height="24" />
                </Link>
                <Link href="#">
                  <Image src="/assets/images/twitter.svg" width="31" height="25" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <p className="copyright">
        © <span>2022</span>
        <span> W2W</span>rəqəmsal sövdələşmə platforması® Hüquqları qorunur{" "}
      </p>
    </footer>
  );
};

export default Footer;
