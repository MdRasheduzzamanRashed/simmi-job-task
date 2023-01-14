import React from "react";

const ItemCard = ({ d, setModalData }) => {
  return (
    <div>
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={d.img} className="w-full h-52" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{d.title}</h2>
          <p>{d.desc.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <label
              onClick={()=>setModalData(d)}
              htmlFor="my-modal-6"
              className="btn"
            >
              Details
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
