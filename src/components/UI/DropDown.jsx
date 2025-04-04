import React from 'react';

const DropDown = ({ onSortChange }) => {
    return (
        <div className="dropdown">
            <select className="btn btn-secondary" onChange={(e) => onSortChange(e.target.value)}>
                <option value="''"> - Сортировка - </option>
                <option value="title">По названию</option>
                <option value="price">По цене</option>
                <option value="stock">По количеству</option>
            </select>
        </div>
    );
};

export default DropDown;
