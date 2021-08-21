import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Context} from '../Context';
import Header from './Header';
import InputFields from './InputFields';
import { fonts } from '../globalStyles/fonts';
import { lightTheme, darkTheme } from './Theme';

export default function CountryList() {
    const {countries, isLoading, isDark} = useContext(Context); 
    
    const Section = styled.section`
        background-color: ${isDark ? darkTheme.mainBackground : lightTheme.mainBackground};
        font-size: 14px;

        & > * {
            max-width: 1248px;
            margin-inline: auto;
        }
    `;

    const Container = styled.article`
        ${fonts}
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 32px;
        column-gap: 32px;

        a {
            text-decoration: none;
            color: ${isDark ? darkTheme.linkColor : lightTheme.linkColor};
            margin-block-start: 48px;
            border-radius: 12px;
            box-shadow: 1px 1px 5px ${isDark ? darkTheme.boxShadow : lightTheme.boxShadow};
            background-color: ${isDark ? darkTheme.background : lightTheme.background};

            div {
                p {
                    font-family: "NunitoSans Light"
                    b {
                        font-family: "NunitoSans SemiBold"
                    }
                }
            }
        }

        header {
            display: flex;
            flex-direction: column-reverse;

            h2 {
                font-family: "NunitoSans SemiBold";
                padding-inline: 16px;
            }
        }

        div {
            padding: 16px;
            padding-top: 0px;

            p:first-child {
                margin-top: 0px;
            }
        }

        @media (max-width: 1000px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-column-gap: 48px;
            column-gap: 48px;
            margin-inline: 32px;

            img {
                height: 200px;
            }
        }

        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            margin-inline: 62px;
        }
    `;

    const Image = styled.img`
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
    `;


    return (  
        <Section>
            <Header title="Where in the world?" />
            <InputFields />
            <Container>
                {isLoading && <h1>Loading...</h1>}
                {!isLoading && countries && countries.map(country => {
                    return (
                        <Link to={`/${country.alpha2Code}`} key={country.alpha2Code}>
                            <header>
                                <h2>
                                    {country.name}
                                </h2>
                                <Image src={country.flag} alt="Flag"/>
                            </header>

                            <div>
                                <p><b>Population: </b>{country.population}</p>
                                <p><b>Region: </b>{country.region}</p>
                                <p><b>Capital: </b>{country.capital}</p>
                            </div>
                        </Link>
                    )
                })}
            </Container>
        </Section>
    )
}
