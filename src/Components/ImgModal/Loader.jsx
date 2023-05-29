import Modal from "./Modal"
import classes from "./Loader.module.css";
import { slideItems } from '../../Constants';
import ImageSlider from "./ImageSlider";

const Loader = (props) => {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <Modal onClose={props.hideImgHandler}>
      <div className={classes.div}>
        <div className="carContainer grid">
          <div>
            <div style={containerStyles}>
              <ImageSlider slides={slideItems} />
            </div>
            <div className={classes.details}>
              <div>
                <h3>Type</h3>
                <h5>Power</h5>
                <h5>0-60 mph</h5>
                <h5>Fuel Economy</h5>
                <h5>Insurance Group</h5>
                <h5>Road Tax</h5>
              </div>
              <div>
                <h3>Coupe</h3>
                <h5>532 - 611 bhp</h5>
                <h5>3.0 - 3.6 secs</h5>
                <h5>18.8 - 22.4 mpg</h5>
                <h5>50</h5>
                <h5>N/A-£695</h5>
              </div>
              <div>
                <h3>Type</h3>
                <h5>Power</h5>
                <h5>0-60 mph</h5>
                <h5>Fuel Economy</h5>
                <h5>Insurance Group</h5>
                <h5>Road Tax</h5>
              </div>
              <div>
                <h3>Convertible</h3>
                <h5>552 bhp</h5>
                <h5>3.7 secs</h5>
                <h5>19 mpg</h5>
                <h5>50</h5>
                <h5>£695</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <button className="btn" onClick={props.hideImgHandler}>Close</button>
      </div>
    </Modal>
  );
};

export default Loader;
