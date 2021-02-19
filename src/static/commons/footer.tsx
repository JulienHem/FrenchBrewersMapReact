import React, {useEffect, useState} from 'react'
import './footer.css'
import axios from "axios";

export const Footer: React.FC = () => {

    const [breweryNbr, setBreweryNbr] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/api/breweries')
            .then(response => {
                setBreweryNbr(response.data['hydra:totalItems'])
                }
            )
    }, [])

    return (
        <div>
            <div className="footer--wrapper">
                <div className="na-footer">
                    <div className="footer__wrapper--1">
                        <div className="footer_container">
                            <div className="footer_tagline">
                                <h1 className="footer__title">LA FRENCH BREWERS MAP</h1>
                                <p className="footer__subtext">Une carte faite par des passionnés</p>
                            </div>
                            <div className="footer_tagline">
                                <h3>Nous recensons à ce jour</h3>
                                <p> {breweryNbr} brasseries</p>
                            </div>
                            <div className="footer_tagline">
                                <h3>Dans nos</h3>
                                <p> 13 régions</p>
                            </div>
                        </div>
                    </div>

                    <div className="footer__wrapper--2">
                        <div className="footer_container">
                            <div className="footer_tagline">
                                <h1 className="footer__title">LA FRENCH BREWERS MAP</h1>
                                <p className="footer__subtext">Une carte faite par des passionnés</p>
                            </div>
                            <div className="footer_tagline">
                                <h3>Pour nous contacter c'est simple</h3>
                                <p>Remplissez ce formulaire</p>
                            </div>
                            <div className="footer_tagline">
                                <h3>Dans nos</h3>
                                <p>13 régions</p>
                            </div>
                        </div>
                    </div>

                    <div className=" footer__wrapper--1">
                        <div className="footer_container">
                            <div className="footer_tagline">
                                <h1 className="footer__title">LA FRENCH BREWERS MAP</h1>
                                <p className="footer__subtext">Une carte faite par des passionnés</p>
                            </div>
                            <div className="footer_tagline">
                                <h3>Nous recensons à ce jour</h3>
                                <p>{breweryNbr} brasseries</p>
                            </div>
                            <div className="footer_tagline">
                                <h3>Dans nos</h3>
                                <p>13 régions</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
