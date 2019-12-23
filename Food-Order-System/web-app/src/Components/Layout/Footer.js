import React from 'react';

function Footer() {
    return (
        /* Footer */

        <footer className='page-footer font-small stylish-color-dark pt-4'>
            {/* Footer Links */}
            <div className='container text-center text-md-left'>
                {/* Grid row */}
                <div className='row'>
                    {/* Grid column */}
                    <div className='col-md-4 mx-auto'>
                        {/* Content */}
                        <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
                            Footer Content
                        </h5>
                        <p>
                            Here you can use rows and columns to organize your
                            footer content. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </p>
                    </div>
                    {/* Grid column */}
                    <hr className='clearfix w-100 d-md-none' />
                    {/* Grid column */}
                    <div className='col-md-2 mx-auto'>
                        {/* Links */}
                        <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
                            Links
                        </h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!'>Link 1</a>
                            </li>
                            <li>
                                <a href='#!'>Link 2</a>
                            </li>
                            <li>
                                <a href='#!'>Link 3</a>
                            </li>
                            <li>
                                <a href='#!'>Link 4</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <hr className='clearfix w-100 d-md-none' />
                    {/* Grid column */}
                    <div className='col-md-2 mx-auto'>
                        {/* Links */}
                        <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
                            Links
                        </h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!'>Link 1</a>
                            </li>
                            <li>
                                <a href='#!'>Link 2</a>
                            </li>
                            <li>
                                <a href='#!'>Link 3</a>
                            </li>
                            <li>
                                <a href='#!'>Link 4</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                    <hr className='clearfix w-100 d-md-none' />
                    {/* Grid column */}
                    <div className='col-md-2 mx-auto'>
                        {/* Links */}
                        <h5 className='font-weight-bold text-uppercase mt-3 mb-4'>
                            Links
                        </h5>
                        <ul className='list-unstyled'>
                            <li>
                                <a href='#!'>Link 1</a>
                            </li>
                            <li>
                                <a href='#!'>Link 2</a>
                            </li>
                            <li>
                                <a href='#!'>Link 3</a>
                            </li>
                            <li>
                                <a href='#!'>Link 4</a>
                            </li>
                        </ul>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}
            <hr />
            {/* Call to action */}
            <ul className='list-unstyled list-inline text-center py-2'>
                <li className='list-inline-item'>
                    <h5 className='mb-1'>Register for free</h5>
                </li>
                <li className='list-inline-item'>
                    <a href='#!' className='btn btn-danger btn-rounded'>
                        Sign up!
                    </a>
                </li>
            </ul>
            {/* Call to action */}
            <hr />
            {/* Social buttons */}
            <ul className='list-unstyled list-inline text-center'>
                <li className='list-inline-item'>
                    <a className='btn-floating btn-fb mx-1'>
                        <i className='fab fa-facebook-f'> </i>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a className='btn-floating btn-tw mx-1'>
                        <i className='fab fa-twitter'> </i>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a className='btn-floating btn-gplus mx-1'>
                        <i className='fab fa-google-plus-g'> </i>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a className='btn-floating btn-li mx-1'>
                        <i className='fab fa-linkedin-in'> </i>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a className='btn-floating btn-dribbble mx-1'>
                        <i className='fab fa-dribbble'> </i>
                    </a>
                </li>
            </ul>
            {/* Social buttons */}
            {/* Copyright */}
            <div className='footer-copyright text-center py-3'>
                © 2018 Copyright:
                <a href='https://mdbootstrap.com/education/bootstrap/'>
                    {' '}
                    MDBootstrap.com
                </a>
            </div>
        </footer>
    );
}

export default Footer;
