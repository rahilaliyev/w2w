import React from "react";
import Image from "next/image";

const HomePageContainer = () => {
  return (
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
  );
};

export default HomePageContainer;
