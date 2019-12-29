import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar/Navbar';
import Footer from '../Footer/Footer';
import Categories from './Categories/Categories';
import ContentItems from './Content/ContentPage';

const useStyles = makeStyles(theme => ({}));

function OrderPage() {
    const [CategoriesModal, setCategoriesModal] = React.useState(null);
    const feedback = data => {
        setCategoriesModal(data);
        console.log(data);
    };
    return (
        <div>
            <Navbar feedback={feedback} />
            {CategoriesModal ? <Categories /> : <ContentItems />}
            <Footer />
        </div>
    );
}

export default OrderPage;
