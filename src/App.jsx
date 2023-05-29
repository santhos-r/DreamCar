import { Fragment, useState } from "react";
import './App.css';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Trending from './Components/Trending/Trending';
import Sellers from './Components/Sellers/Sellers';
import Auction from './Components/Auction/Auction';
import Footer from './Components/Footer/Footer';
import Loader from './Components/ImgModal/Loader';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const hideImgModal = () => {
    setShowModal(false);
  };
  const showImgModal = () => {
    setShowModal(true);
  };

  return (
    <Fragment>
      {showModal && <Loader hideImgHandler={hideImgModal} />}
      <Home onClick={showImgModal}/>
      <Search />
      <Trending />
      <Auction />
      <Sellers />
      <Footer />
    </Fragment>
  );
}

export default App;
