import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import img from '../icons/brightness_3-24px.svg';
import whiteMoon from '../icons/white-moon.svg';
import {fonts} from '../globalStyles/fonts';

import { Context } from '../Context';
import { lightTheme, darkTheme } from './Theme';

type Title = {
    title: string
}

export default function Header({title}: Title) {    
    const {isDark, toggleTheme} = useContext(Context);
    const Heading = styled.header`
        ${fonts}
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-block: 28px;
        background-color: ${isDark ? darkTheme.background : lightTheme.background};
        padding-inline: 64px;

        a {
            text-decoration: none;
            font-family: "NunitoSans ExtraBold";
            font-size: 32px;
            color: ${isDark ?  darkTheme.buttonText : lightTheme.buttonText};
        }

        button {
            font-family: "NunitoSans SemiBold";
            background-image: ${isDark ? `url(${whiteMoon})` : `url(${img})`};
            background-repeat: no-repeat;
            background-position: 0% 50%;
            padding-inline-start: 32px;
            border: none;
            background-color: ${isDark ? darkTheme.background : lightTheme.background};
            color: ${isDark ?  darkTheme.buttonText : lightTheme.buttonText};
            cursor: pointer;
        }

        @media (max-width: 900px) {
            padding-inline: 20px;

            a {
                font-size: 20px;
            }
        }
    `;
    
    return (
        <Heading>
            <Link to="/">
                {title}
            </Link>
            <button type="button" onClick={toggleTheme}>{isDark ? 'Light mode' : 'Dark mode'}</button>
        </Heading>
    )
}