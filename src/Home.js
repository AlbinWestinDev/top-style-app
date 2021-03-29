import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://www.relyonhorror.com/wp-content/uploads/2019/06/Ito-Cover-2.jpg"
        alt="Eyee"
      ></img>

      <div className="home__info">
        <h1>Welcome to Top Style Clothing </h1>
        <h3>Browse our new collections</h3>
      </div>

      <div className="home__row">
        <Product
          id="1"
          title="The ghost of a woman"
          price={89.99}
          image="https://ocd-sg.com/wp-content/uploads/2020/04/IMG_7918.jpg"
        />
        <Product
          id="2"
          title="Sailor moon hoodie"
          price={99.99}
          image="https://d2h1pu99sxkfvn.cloudfront.net/b0/8090165/523789854_6bMAkiR7wI/P0.jpg"
        />
        <Product
          id="3"
          title="Tactial-pants Juji Browen"
          price={399.99}
          image="http://en.samplas.co.kr/web/product/big/202103/572c2fe4ed3de6717a4bf334505af7c9.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="4"
          title="Zipped green hoodie"
          price={100.99}
          image="https://media.sivasdescalzo.com/media/catalog/product/S/I/SIB-020-003_sivasdescalzo-SIBERIA-HILLS-SIBERIA-CLASSIC-LOGO-ZIP-HOODIE-SIB-020-003-1.jpg?quality=90&fit=bounds&width=420"
        />
        <Product
          id="5"
          title="Elf Moon Hoodie"
          price={159.99}
          image="data:image/jpeg;base64,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"
        />
        <Product
          id="6"
          title="Needles Track Rose"
          price={399.99}
          image="https://www.sneakersnstuff.com/images/260012/pants-01.jpg"
        />
        <Product
          id="7"
          title="Needles Velour Purple"
          price={399.99}
          image="https://clothbase.s3.amazonaws.com/uploads/90b6ac4c-e9bf-4826-9a8a-fe371e888f98/05-03-2019_needlesnarrow_trackpant_grey_ej202c_ka_1.jpg"
        />
      </div>
    </div>
  );
}
export default Home;
