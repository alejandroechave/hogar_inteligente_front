import React from "react";
import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="images/logo.png" width="100" alt="Hogar Inteligente" />
                <h1>Hogar Inteligente</h1>
                <a href="`${process.env.REACT_APP_API_URL}/admin/login`" className="ingresar-btn">
                <i class="bi bi-box-arrow-in-right"></i> Ingresar </a>
            </div>
        </header>
    );
}

export default Header;
