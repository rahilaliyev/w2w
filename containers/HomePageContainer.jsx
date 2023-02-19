import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePageContainer = () => {
  return (
    <>
      <section className="main-section" id="main">
        <div className="main-section-container container">
          <div className="left">
            <h1>
              Cüzdandan cüzdana
              <span>
                {" "}
                Rahat, Sürətli, <br /> Təhlükəsiz!
              </span>
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
      <section className="about" id="about">
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
      <section className="advantage" id="advantage">
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
      <section className="works" id="works">
        <div className="works-container container">
          <h2>Necə işləyir?</h2>
          <div className="content">
            <div className="content-header">
              <div className="left">
                <h4>Alıcı</h4>
                <p>(Kripto almaq istəyən)</p>
              </div>

              <div className="right">
                <h4>Satıcı</h4>
                <p>(Kripto satmaq istəyən)</p>
              </div>
            </div>
            <div className="content-list">
              <div className="left">
                <p>
                  <span>W2W</span> hesabı yaradırsan və təsdiqləyirsən.{" "}
                </p>
                <p>
                  <span>W2W</span> azn balansını artırırsan.
                </p>
                <p>
                  Platformada yerləşdirilən təkliflərlə tanış olur və uyğun olanı seçib təsdiqləyirsən və ya sənə uyğun təklif tapmadıqda kripto almaq
                  üçün öz şərtlərinə uyğun təklif yaradırsan.
                </p>
                <p>
                  <span>W2W</span> əməliyyatçısı əməliyyatı yoxlayıb təsdiqləyir, alıcının vəsaitini satıcının hesabına və satıcının kriptovalyutasını
                  alıcının kripto ünvanına göndərir. <span className="success">Təbriklər!</span> <span>Kriptovalyuta artıq sənin cüzdanındadır.</span>
                </p>
              </div>
              <div className="center">
                <ul>
                  <li>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                    <div className="number"> 1</div>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                  </li>
                  <li>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                    <div className="number"> 2</div>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                  </li>
                  <li>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                    <div className="number"> 3</div>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                  </li>
                  <li>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                    <div className="number"> 4</div>
                    <div className="circle">
                      <div className="into-circle"></div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="right">
                <p>
                  <span>W2W</span> hesabı yaradırsan və təsdiqləyirsən.
                </p>
                <p>
                  <span>W2W</span> USDT balansını artırırsan.
                </p>
                <p>
                  Platformada yerləşdirilən təkliflərlə tanış olur və uyğun olanı seçib təsdiqləyirsən və ya sənə uyğun təklif tapmadıqda kripto
                  satmaq üçün öz şərtlərinə uyğun təklif yaradırsan.
                </p>
                <p>
                  <span>W2W</span> əməliyyatçısı əməliyyatı yoxlayıb təsdiqləyir, alıcının vəsaitini satıcının hesabına və satıcının kriptovalyutasını
                  alıcının kripto ünvanına göndərir. <span className="success">Təbriklər!</span> <span> Kriptovalyutanı manata dəyişdin.</span>
                </p>
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
      <section className="subscribe" id="subscribe">
        <div className="subscribe-container container">
          <h3>W2W-da olan yeniliklərdən xəbərdar olun!</h3>
          <span>Abunə olun və UYĞUN TƏKLİFLƏRİ QAÇIRMAYIN!</span>
          <form>
            <input type="email" placeholder="E-Poçt ünvanınız..." />
            <button type="submit">ABUNƏ OL</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default HomePageContainer;
