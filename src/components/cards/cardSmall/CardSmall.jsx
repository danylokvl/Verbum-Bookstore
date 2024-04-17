import "./CardSmall.less";

const CardSmall = ({ itemName, itemPrice, itemImg }) => {
  return (
    <div className="cardSmall">
      <img src={itemImg} />
      <div className="cardSmall__textContainer">
        <h6>{itemName}</h6>
        <span>{itemPrice}</span>
      </div>
    </div>
  );
};

export default CardSmall;
