import React from 'react'
import './navbar.css'



export const NavBar: React.FC = () => {

    return (
        <div>
            <nav>
                <div className="nav__wrap">
                    <div className="logo__title">
                        <a href="/"><img src="https://i.imgur.com/N6TjLgP.png"/></a>
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a>Bières</a>
                        </li>
                        <li className="nav__item">
                            <a>Contactez-nous</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

