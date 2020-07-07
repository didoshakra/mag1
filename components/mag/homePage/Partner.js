//Partner.js
//Добавлено animat

const Partner = () => {
  return (
    <section className="partner-section">
      <div className="partner-container">
        {/* <div class="col-sm ftco-animate"> */}
        <div className="partner-item">
          <a href="#" className="partner-item_a">
            <img
              src="/vegefoods/images/partner-1.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner-item_a">
            <img
              src="/vegefoods/images/partner-2.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner-item_a">
            <img
              src="/vegefoods/images/partner-3.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner-item_a">
            <img
              src="/vegefoods/images/partner-4.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
        <div className="partner-item">
          <a href="#" className="partner-item_a">
            <img
              src="/vegefoods/images/partner-5.png"
              className="img-fluid"
              alt="Colorlib Template"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        .partner-section {
          padding: 5rem 2vw; //rem-шрифт кореневого
          position: relative;
          //display: block// по замовчуванню (для section)
          //border: 2px solid #82ae46;
        }
        .partner-container {
          display: flex;
          flex-direction: column;
          flex: 0 1 auto;
          justify-content: center; //рівномірно розподіляється між елементами
          align-items: center; //Y-вертикально //R-щоб рівняло по верху
        }

        //col-sm ftco-animate"
        .partner-item {
          position: relative;
          padding: 0 1vw;
          //width: 100%;
          justify-content: center;
          align-items: center;
          // border: 1px solid rgba(212, 17, 17, 1);
        }
        .partner-item_a {
          //border: 1px solid rgb(150, 17, 212);
        }
        .img-fluid {
          max-width: 100%;
          height: auto;
          //border: 1px solid rgb(17, 212, 147);
        }
        @media (min-width: 600px) {
          .partner-container {
            flex: 0 1 auto;
            flex-direction: row; //row-по замовчуванню
            justify-content: space-around; //рівномірно розподіляється між елементами
            //justify-content: space-evenly; //відстань у крайніх елементів до країв контейнера таке ж як і між елементами
            align-items: center; //Y-вертикально //R-щоб рівняло по верху
          }
          .partner-item {
            width: calc(100% / 5);
          }
        }
      `}</style>
    </section>
  );
};
export default Partner;
