import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Header from '../components/Header'
import CurrentStore from '../store/CurrentStore'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const ItemPage = () => {
    const { id } = useParams()
    const { current, fetchCurrent } = CurrentStore()
    useEffect(() => {
        fetchCurrent(id)
    }, [])
    return (
        <>
            <Header id={id} />
            {current && (
                <div className="dynamic container">
                    <div className="main__products-item">
                        <span className="main__products-item--discount">{Math.floor(current.discountPercentage)}%</span>
                        <div className="main__products-item--overview">
                            <img src={current.thumbnail} alt="" />
                            <div>
                                <h1>{current.title}</h1>
                                <p>{current.description}</p>
                                <span>Stock: {current.stock} pcs</span>
                            </div>
                        </div>
                        <div className="main__products-item--btn">
                            <span>${current.price}</span>
                            <div>
                                <a>Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={5}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        navigation={true}
                        loop={true}
                        className="main__products-swiper"
                    >
                        {current.images && current.images.map((item, idx) => (
                            <SwiperSlide className="main__products-swiper-slide">
                                <img src={item} alt=""/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </>
    )
}

export default ItemPage
