import "../App.css";

function Header(props) {
  return (
    <div className="container">
    <div className="flex shopping-card">
      <div onClick={() => props.handleShow(false)}> 
      <h1 className="explre-menu-section-heading mt-3">
                        Explore Flowers
                    </h1></div>
      
     
      <div onClick={() => props.handleShow(true)} className='cartbox'>
      Cart
        <sup> {props.count} </sup>
      </div>
      
    </div>
   
   
  </div>
  );
}

export default Header;
