import React from 'react';
import FoodItem from './FoodItem/FoodItem';
import './FoodItem/FoodItem.css';

function FoodList() {
    const [Items, setItems] = React.useState([
        { id: '001', src: 'https://source.unsplash.com/random/?tech,care' },
        { id: '002', src: 'https://source.unsplash.com/random/?tech,studied' },
        {
            id: '003',
            src: 'https://source.unsplash.com/random/?tech,substance'
        },
        { id: '004', src: 'https://source.unsplash.com/random/?tech,past' },
        { id: '005', src: 'https://source.unsplash.com/random/?tech,lamp' },
        { id: '006', src: 'https://source.unsplash.com/random/?tech,yet' }
    ]);
    return (
        <div className='gallery' id='gallery'>
            {Items.map(item => (
                <FoodItem src={item.src} />
            ))}
        </div>
    );
}

export default FoodList;
