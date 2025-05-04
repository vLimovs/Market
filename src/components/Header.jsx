import React from 'react'
import { Link } from 'react-router'

const Header = ({ id }) => {
    return (
        <header className='header'>
            <div className="header__content container">
                {id && (
                    <Link className='header__content-btn button' to={'/'}>Назад</Link>
                )}
                <p className='header__content-title'>{id ? `Товар №${id}` : 'Market 🛒'}</p>
            </div>
        </header>
    )
}

export default Header