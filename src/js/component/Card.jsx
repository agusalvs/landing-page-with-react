import React from "react";

const Card = () => {
	return (
        <div class="card col-3 text-center">
  <div class="card-header">
      <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" className="card-img-top" alt="..." style={{width: "325", height: "500"}}/>
  </div>
  <div class="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas nam consectetur fugiat! Fugit, aspernatur eius. Libero itaque, magni modi est, corporis aspernatur odio adipisci quaerat esse labore aliquid et.</p>
  </div>
  <div class="card-footer">
  <a href="#" className="btn btn-primary">Find out more!</a>
  </div>
</div>
	);
};

export default Card;