import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import './FoodItem.css';

function FoodItem(props) {
    useEffect(() => {
        const gallery = document.querySelector('#gallery');
        const getVal = function(elem, style) {
            return parseInt(
                window.getComputedStyle(elem).getPropertyValue(style)
            );
        };
        const getHeight = function(item) {
            return item.querySelector('.content').getBoundingClientRect()
                .height;
        };
        const resizeAll = function() {
            const altura = getVal(gallery, 'grid-auto-rows');
            const gap = getVal(gallery, 'grid-row-gap');
            gallery.querySelectorAll('.gallery-item').forEach(function(item) {
                const el = item;
                el.style.gridRowEnd =
                    'span ' +
                    Math.ceil((getHeight(item) + gap) / (altura + gap));
            });
        };
        gallery.querySelectorAll('#card').forEach(function(item) {
            item.classList.add('byebye');

            item.addEventListener('load', function() {
                const altura = getVal(gallery, 'grid-auto-rows');
                const gap = getVal(gallery, 'grid-row-gap');
                const gitem = item.parentElement.parentElement;
                gitem.style.gridRowEnd =
                    'span ' +
                    Math.ceil((getHeight(gitem) + gap) / (altura + gap));
                item.classList.remove('byebye');
            });
        });
        window.addEventListener('resize', resizeAll);
    }, []);

    return (
        <div className='gallery-item'>
            <div className='content'>
                <img src={props.src} alt='' id='card' />

                <IconButton color='inherit'>
                    <FontAwesomeIcon icon={faCartPlus} />
                </IconButton>
            </div>
        </div>
    );
}

export default FoodItem;
