import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ItemCard from "./ItemCard";

const Home = () => {
    const data = useLoaderData();
    const [modalData, setModalData] = useState(null);
  return (
    <div>
      <section>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              alt=""
              src="https://placeimg.com/800/200/arch"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              alt=""
              src="https://placeimg.com/800/200/arch"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              alt=""
              src="https://placeimg.com/800/200/arch"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              alt=""
              src="https://placeimg.com/800/200/arch"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#slide1" className="btn btn-xs">
            1
          </a>
          <a href="#slide2" className="btn btn-xs">
            2
          </a>
          <a href="#slide3" className="btn btn-xs">
            3
          </a>
          <a href="#slide4" className="btn btn-xs">
            4
          </a>
        </div>
      </section>
      <section className="my-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
          {data.map((d) => (
            <ItemCard d={d} setModalData={setModalData} key={d.id}></ItemCard>
          ))}
        </div>
      </section>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img src={modalData?.img} className="w-full" alt="" />

          <div className="">
            <h2 className="text-2xl font-semibold">{modalData?.title}</h2>
            <p>{modalData?.desc}</p>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
