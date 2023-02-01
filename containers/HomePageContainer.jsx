import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePageContainer = () => {
  return (
    <>
      <section className="main-section">
        <div className="main-section-container container">
          <div className="left">
            <h1>
              Cüzdandan cüzdana
              <span> Rahat, Sürətli, Təhlükəsiz!</span>
            </h1>
            <p>Kriptovalyuta və real valyutalar arasında risksiz və təhlükəsiz mübadilə xidmətini göstərən rəqəmsal sövdələşmə platforması</p>
            <div className="button-group">
              <button>İNDİ BAŞLA</button>
              <button>DAXİL OL</button>
            </div>
          </div>
          <div className="right">
            <Image src="/assets/images/main-img1.png" unoptimized fill style={{ objectFit: "contain" }} alt="bitcoin" />
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-container container">
          <div className="left">
            <p>
              W2W istifadəçilərə kriptovalyutasını nəğdləşdirmək və ya cüzdanında olan valyutanı kripto valyutaya çevirmək üçün sövdələşmə xidmətini
              təklif edən platformadır. Məqsədimiz bu ekosistemi böyütmək və daha təhlükəsiz etməkdir.
            </p>
          </div>
          <div className="right">
            <h2>W2W nədir?</h2>
          </div>
        </div>
      </section>
      <section className="advantage">
        <div className="advantage-container container">
          <div className="advantage-header">
            <h2>Üstünlüklər</h2>
            <span>KRİPTOVALYUTA ƏMƏLİYYATLARIN</span>
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-img">
                <Image src="/assets/images/advantage1.png" alt="advantages" fill unoptimized />
              </div>
              <div className="card-text">
                <h6>TƏHLÜKƏSİZ</h6>
                <p>Əməliyyatların risksiz və fərdi məlumatları qarşı tərəflə paylaşmadan icra olunması</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <Image src="/assets/images/advantage2.png" alt="advantages" fill unoptimized />
              </div>
              <div className="card-text">
                <h6>ƏLÇATAN</h6>
                <p>Platformada heç kimi gözləmədən mövcud təkliflərdən ən sərfəlisini seçib, bir neçə dəqiqə ərzində sövdələşmə etmək</p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <Image src="/assets/images/advantage3.png" alt="advantages" fill unoptimized />
              </div>
              <div className="card-text">
                <h6>GÜVƏNİLİR</h6>
                <p>Profiliz yüksə səviyyədə qorunur. Sövdələşmə zamanı tərəflər bir-birini tanımır. W2W əməliyyatın icrasına 100% zəmanət verir. </p>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <Image src="/assets/images/advantage4.png" alt="advantages" fill unoptimized />
              </div>
              <div className="card-text">
                <h6>SÜRƏTLİ</h6>
                <p>Balansını artır, sövdələşməni seç, əməliyyatı tamamla. Bu qədər rahat!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="members">
        <div className="members-container container">
          <h2>Komanda üzvləri</h2>
          <div className="cards">
            <div className="card">
              <div className="card-img">
                <Image unoptimized alt="member" src="/assets/images/member1.jpg" width="270" height="270" />
              </div>
              <h5>Bəhruz Qasımov</h5>
              <h6>Məhsul sahibi</h6>
              <p>Howard Senior Teacher of Teachers of the Pilates Studio® Teacher Certification Program.</p>
              <div className="social-icons">
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/phone.svg" alt="social network" />
                </Link>
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/face.svg" alt="social network" />
                </Link>
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/instaMember.svg" alt="social network" />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <Image unoptimized alt="member" src="/assets/images/member2.jpg" width="270" height="270" />
              </div>
              <h5>Anar Məmmədov</h5>
              <h6>Proqram təminatı mühəndisi</h6>
              <p>Howard Senior Teacher of Teachers of the Pilates Studio® Teacher Certification Program.</p>
              <div className="social-icons">
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/phone.svg" alt="social network" />
                </Link>
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/face.svg" alt="social network" />
                </Link>
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/instaMember.svg" alt="social network" />
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img">
                <Image unoptimized alt="member" src="/assets/images/member3.jpg" width="270" height="270" />
              </div>
              <h5>Lalə Fərəcova</h5>
              <h6>Məhsul üzrə dizayner</h6>
              <p>Howard Senior Teacher of Teachers of the Pilates Studio® Teacher Certification Program.</p>
              <div className="social-icons">
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/phone.svg" alt="social network" />
                </Link>
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/face.svg" alt="social network" />
                </Link>
                <Link href="#">
                  <Image width="27" height="27" src="/assets/images/instaMember.svg" alt="social network" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageContainer;
