import React, {useContext} from 'react';
import style from 'styled-components';

import {Context} from '../Context';
import img from '../icons/search-24px.svg';
import darkSearch from '../icons/dark-search.svg';
import arrow from '../icons/expand.svg';
import darkArrow from '../icons/dark-expand.svg';

import { fonts } from '../globalStyles/fonts';
import { lightTheme, darkTheme } from './Theme';

export default function InputFields() {
    const {regions, isDark, country, region, handleSubmit, handleInputChange, handleSelect} = useContext(Context);

    const Form = style.form`
        ${fonts}
        display: flex;
        flex-direection: row;
        justify-content: space-between;
        margin-block-start: 48px;

        input {
            padding-block: 16px;
            padding-inline: 64px;
            border: none;
            box-shadow: 1px 1px 5px ${isDark ? darkTheme.boxShadow : lightTheme.boxShadow};
            border-radius: 8px;
            background-image: ${isDark ? `url(${img})` : `url(${darkSearch})`};
            background-repeat: no-repeat;
            background-position: 10% 50%;
            background-color: ${ isDark ? darkTheme.background : lightTheme.background};

            ::placeholder {
                font-family: "NunitoSans Light";
                font-size: 14px;
                color: ${isDark ? 'hsl(0, 0%, 52%)' : '#909090'};
            }
        }

        select {
            font-size: 14px;
            font-family: "NunitoSans Light";
            padding-block: 16px;
            padding-inline: 64px;
            border: none;
            box-shadow: 1px 1px 5px ${isDark ? darkTheme.boxShadow : lightTheme.boxShadow};
            border-radius: 8px;
            background-color: ${ isDark ? darkTheme.background : lightTheme.background};
            color: ${isDark ? 'hsl(0, 0%, 52%)' : '#1d1d1d'};
            appearance: none;
            background-image: ${isDark ? `url(${darkArrow})` : `url(${arrow})`};
            background-repeat: no-repeat;
            background-position: 95% 50%;
        }

        select::-ms-expand {
            display: none;
        }

        @media (max-width: 1000px) {
            margin-inline: 20px;
        }

        @media (max-width: 600px) {
            display: flex;
            flex-direction: column;
            margin-inline: 20px;

            select {
                margin-block-start: 32px;
                max-width: 250px;
            }
        }
    `;
    return (
        <Form onSubmit={handleSubmit}>
            <input type="text" name="search" value={country} onChange={handleInputChange} placeholder="Search for a country..."/>
            <select value={region} onChange={(value) => handleSelect(value)}>
                <option value="filter by region" >Filter by region</option>
                {regions.map((reg, index) => {
                    return (
                        <option key={index} value={reg}>
                            {reg}
                        </option>
                )}
                )}
            </select>
        </Form>
    )
}
