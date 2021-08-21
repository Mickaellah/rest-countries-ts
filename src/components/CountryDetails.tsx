import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import style from 'styled-components';
import {Link} from 'react-router-dom';

import {Context} from '../Context';
import Header from './Header';
import goBackDark from '../icons/go_back.svg';
import goBackWhite from '../icons/go_back-white.svg';
import { lightTheme, darkTheme } from './Theme';

export default function CountryDetails() {
    const {countries, isDark} = useContext(Context);
    type Id = {
        id: string
    }
    const {id} = useParams<Id>();
    

    const selectedCountry = countries.filter(country => country.alpha2Code === id);

    const Section = style.section`
        padding: 0;
        background-color: ${isDark ? darkTheme.mainBackground : lightTheme.mainBackground};
        padding-block-end: 52px;
        font-size: 16px;
    `;

    const Back = style.div`
        margin-block-start: 48px;
        margin-inline-start: 32px;

        a {
            padding-inline: 24px;
            padding-block: 8px;
            box-shadow: 1px 1px 5px ${isDark ? darkTheme.boxShadow : lightTheme.boxShadow};
            text-decoration: none;
            border-radius: 5px;
            background-image: ${isDark ? `url(${goBackWhite})` : `url(${goBackDark})`};
            background-repeat: no-repeat;
            background-position: 10% 50%;
            padding-inline-start: 36px;
            color: ${isDark ? "#fbffff" : "#454645"};
            background-color: ${ isDark ? darkTheme.background : lightTheme.background};
        }
    `;

    const Container = style.section`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 48px;
        column-gap: 48px;
        margin-block-start: 64px;
        margin-inline: 32px;
        color: ${isDark ? "#fbffff" : "#454645"};

        img {
            width: 100%;
        }

        @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
        }
    `;

    const Content = style.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    `;

    const Border = style.div`
        margin-block-start: 48px;

        p {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            color: ${isDark ? "#fbffff" : "#454645"};
            margin-inline-start: -16px;
            a {
                padding-inline: 24px;
                padding-block: 8px;
                box-shadow: 1px 1px 5px ${isDark ? darkTheme.boxShadow : lightTheme.boxShadow};
                margin-inline-start: 16px;
                border-radius: 5px;
                text-decoration: none;
                margin-block-start: 16px;
                color: black;
                color: ${isDark ? "#fbffff" : "#454645"};
                background-color: ${ isDark ? darkTheme.background : lightTheme.background};
            }
        }
    `;

    return (                                                                            
        <Section>
            <Header title="Where in the world?" />
            <Back>
                <Link to="/">Back</Link>
            </Back>
            {selectedCountry.map(country => {
                return (
                    <Container key={country.alpha2Code}>
                        <img src={country.flag} alt="Flag"/>
                        <article>
                            <header>
                                <h2>{country.name}</h2>
                            </header>

                            <Content>
                                <div>
                                    <p><b>Native Name:</b> {country.nativeName}</p>
                                    <p><b>Population:</b> {country.population}</p>
                                    <p><b>Region:</b> {country.region}</p>
                                    <p><b>Sub Region:</b> {country.subregion}</p>
                                    <p><b>Capital:</b> {country.capital}</p>
                                </div>
                                <div>
                                    <p><b>Top Level Domain:</b> {country.topLevelDomain}</p>
                                    <p><b>Currencies:</b> {country?.currencies?.map(currency => currency.name)}</p>
                                    <p><b>Languages:</b> {country?.languages?.map(language => {
                                            return (
                                                <span key={language.name}>
                                                    {language.name}
                                                </span>
                                            )
                                        })}
                                    </p>
                                </div>
                            </Content>

                            <Border>
                                <div>
                                    <b>
                                        Border Countries:
                                    </b>
                                    <p>
                                        {country?.borders?.map(border => {
                                            const findCountry = countries.find(el => el.alpha3Code == border);
                                            return (
                                                <Link to={`/${findCountry?.alpha2Code}`} key={border}>
                                                    {findCountry?.name}
                                                </Link>
                                            )
                                        })}
                                    </p>
                                </div>
                            </Border>
                        </article>
                    </Container>
                )
            })}
        </Section>
    )
}
