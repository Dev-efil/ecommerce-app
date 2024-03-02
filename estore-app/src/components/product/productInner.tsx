import React, { useState } from 'react';
import { RiHeartFill } from "react-icons/ri";
import { BsFillShareFill } from "react-icons/bs";

const data = [
    {
        id: 0,
        imgColor: "rgb(211, 138, 251)",
        imgUrl: require("../../assets/image/product/purple.png")
    },
    {
        id: 1,
        imgColor: "rgb(142, 255, 119)",
        imgUrl: require("../../assets/image/product/green.png")
    },
    {
        id: 2,
        imgColor: "rgb(241, 100, 116)",
        imgUrl: require("../../assets/image/product/red.png")
    },
    {
        id: 3,
        imgColor: "rgb(123, 212, 249)",
        imgUrl: require("../../assets/image/product/blue.png")
    }
]

function ProductInner() {
    const [count, setCount] = useState(1);
    // const [color, setColor] = useState('rgb(211, 138, 251)');
    const [imageUrl, setImageUrl] = useState(data[0].imgUrl);
    const decrease = () => {
        if (count > 1) {
            setCount(count => count - 1);
        }
    }
    const increase = () => {
        if (count < 100) {
            setCount(count => count + 1);
        }
    }
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-image-wrap">
                            <img src={imageUrl} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-wrap">
                            <p className="text-uppercase product-category">mens</p>
                            <p className="text-uppercase product-title">cycling jersey u-power</p>
                            <div className="d-flex flex-wrap align-items-center">
                                <p className="col-lg-2 price"><sup>$</sup>139.99</p>
                                <p className="actual-price"><sup>$</sup>210.00</p>
                            </div>
                            <p className="product-detail-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid, voluptas itaque accusamus labore inventore quos officia, quidem est asperiores, quae provident ducimus saepe laudantium veniam quaerat maxime impedit natus.</p>
                            <div className="row option-wrap">
                                <div className="col-lg-6 size-wrap">
                                    <p className="text-uppercase">size</p>
                                    <div className="size-btn-wrap text-uppercase">
                                        <div className="size-btn">
                                            <input type="radio" id="size-s" name="size" value="s" />
                                            <label htmlFor="size-s">s</label>
                                        </div>
                                        <div className="size-btn">
                                            <input type="radio" id="size-m" name="size" value="m" />
                                            <label htmlFor="size-m">m</label>
                                        </div>
                                        <div className="size-btn">
                                            <input type="radio" id="size-l" name="size" value="l" />
                                            <label htmlFor="size-l">l</label>
                                        </div>
                                        <div className="size-btn">
                                            <input type="radio" id="size-xl" name="size" value="xl" />
                                            <label htmlFor="size-xl">xl</label>
                                        </div>
                                        <div className="size-btn">
                                            <input type="radio" id="size-xxl" name="size" value="xxl" />
                                            <label htmlFor="size-xxl">xxl</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 color-wrap">
                                    <p className="text-uppercase">color</p>
                                    <div className="color-btn-wrap">
                                        <div className="color-btn">
                                            <input type="radio" id="color-purple" name="color" value="purple" />
                                            <label htmlFor="color-purple" onClick={(e) => setImageUrl(data[0].imgUrl)} style={{ backgroundColor: "#D38AFB" }}></label>
                                        </div>
                                        <div className="color-btn">
                                            <input type="radio" id="color-green" name="color" value="green" />
                                            <label htmlFor="color-green" onClick={(e) => setImageUrl(data[1].imgUrl)} style={{ backgroundColor: "#8EFF77" }}></label>
                                        </div>
                                        <div className="color-btn">
                                            <input type="radio" id="color-red" name="color" value="red" />
                                            <label htmlFor="color-red" onClick={(e) => setImageUrl(data[2].imgUrl)} style={{ backgroundColor: "#F16474" }}></label>
                                        </div>
                                        <div className="color-btn">
                                            <input type="radio" id="color-blue" name="color" value="blue" />
                                            <label htmlFor="color-blue" onClick={(e) => setImageUrl(data[3].imgUrl)} style={{ backgroundColor: "#7BD4F9" }}></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-uppercase quantity-p">quantity</p>
                                <div className="row">
                                    <div className="col-lg-2 d-flex">
                                        <button className="count-btn" onClick={decrease}>-</button><p className="count-result">{count}</p><button className="count-btn" onClick={increase}>+</button>
                                    </div>
                                    <div className="col-lg-4 d-flex justify-content-center">
                                        <button className="com-btn text-uppercase">add to cart</button>
                                    </div>
                                    <div className="col-lg-2 d-flex align-items-center justify-content-center">
                                        <RiHeartFill className="product-like-icon" />
                                        <BsFillShareFill className="product-share-icon" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ProductInner;

