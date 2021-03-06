import React from 'react';
import { FormattedMessage } from 'react-intl';
import img from '../../img';

const Header = () => {
    return (
        <div className="jumbotron p-4">
            <div className="container">
                <div className="row d-flex align-items-center justify-content-around">
                    <div className="col-sm-4 d-none d-sm-block">
                        <ul className="list-unstyled">
                            <li>pierre.bourdet1@gmail.com</li>
                            <li>
                                <a href="https://github.com/ak3l">Github</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-5 col-12">
                        <h2>Pierre Bourdet</h2>
                        <h3>{<FormattedMessage id="header.title" />}</h3>
                        <p className="d-block d-sm-none">
                            <a href="https://github.com/ak3l">Github</a>
                        </p>
                    </div>
                    <div className="col-sm-3 d-none d-md-block">
                        <img alt="id" src={img.id} className="img-thumbnail" height="100" width="100" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
