import React from 'react';

function BookCard(props) {
    const [Span, setSpan] = React.useState(0);
    const imageRef = React.useRef();

    React.useEffect(() => {
        imageRef.current.addEventListener('load', handleSpan);
    }, []);

    const handleSpan = () => {
        const Height = imageRef.current.clientHeight;
        const Span = Math.ceil(Height / 10);
        setSpan(Span);
    };

    return (
        <li>
            <img ref={imageRef} alt='' src={props.book.img} className='item' />
        </li>
    );
}

export default BookCard;
