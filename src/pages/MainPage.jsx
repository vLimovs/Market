import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import DropDown from '../components/UI/DropDown';
import ProductCard from '../components/ProductCard';
import ProductsStore from '../store/ProductsStore';
import { OrbitProgress } from 'react-loading-indicators';

const MainPage = () => {
    const { data, fetchData } = ProductsStore();
    const [amount, setAmount] = useState(12);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        fetchData(amount, (page - 1) * amount, sortBy, 'asc');
    }, [page, amount, sortBy]);

    const nextPage = () => setPage(prev => prev + 1);
    const prevPage = () => setPage(prev => prev - 1);

    return (
        <>
            <Header />
            {data ? (
                <main className="main container">
                    <div className="main__pagination">
                        <button disabled={page === 1} className="button" onClick={prevPage}>Назад</button>
                        <output>Страница: №{page}</output>
                        <button className="button" onClick={nextPage}>Вперёд</button>
                    </div>
                    <div className="main__dropdown">
                        <DropDown onSortChange={setSortBy} />
                    </div>
                    <div className="main__products">
                        {data.map((item, idx) => (
                            <div className='main__products-item' key={idx}>
                                <ProductCard item={item} />
                            </div>
                        ))}
                    </div>
                    <div className="main__pagination">
                        <button disabled={page === 1} className="button" onClick={prevPage}>Назад</button>
                        <output>Страница: №{page}</output>
                        <button className="button" onClick={nextPage}>Вперёд</button>
                    </div>
                </main>
            ) : (<center className='loading'>
                <OrbitProgress color="#FFFF" size="large" text="" textColor="" />
            </center>)}
        </>
    );
};

export default MainPage;
