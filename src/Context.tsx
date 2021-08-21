import React, {useEffect, createContext, useState} from 'react';

type Currencies = {
    code: string,
    name: string,
    symbol: string,
}

type Languages = {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string,
}

type Country = {
    name?: string,
    topLevelDomain?: string[],
    alpha2Code?: string,
    alpha3Code?: string,
    callingCodes?: string[],
    capital?: string,
    altSpellings?: string[],
    region?: string,
    subregion?: string,
    population?: number,
    latlng?: number[],
    demonym?: string,
    area?: number,
    gini?: number,
    timezones?: string[],
    borders?: string[],
    nativeName?: string,
    numericCode?: string,
    currencies?: Currencies[],
    languages?: Languages[],
    translations?: string[],
    flag?: string,
    regionalBlocs?: string[],
    cioc?: string
}


type StateTypes = {
    countries: Country[],
    setCountries: React.Dispatch<React.SetStateAction<any[]>>,
    isLoading?: boolean,
    setIsLoading?: () => void,
    country?: string,
    setCountry?: () => void,
    region?: string,
    setRegion?: () => void,
    handleSubmit: (e: any) => void,
    handleInputChange: (e: any) => void,
    handleSelect: (e: any) => void,
    regions: string[],
    isDark: boolean,
    setIsDark?: () => void,
    toggleTheme: () => void,
}

const initialValue: StateTypes = {
    countries: [],
    setCountries: () => null,
    isLoading: true,
    setIsLoading: () => null,
    country: '',
    setCountry: () => null,
    region: '',
    setRegion: () => null,
    handleSubmit: () => null,
    handleInputChange: () => null,
    handleSelect: () => null,
    regions: [],
    isDark: false,
    setIsDark: () => null,
    toggleTheme: () => null,

}

export const Context  = createContext(initialValue);

export const ContextProvider: React.FC = ({children}) => {
    const [countries, setCountries] = useState<any[]>([]);
    const [isLoading, setIsoading] = useState(true);
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [isDark, setIsDark] = useState(false);

    const getCountries = async () => {
        const response = await fetch("https://restcountries.eu/rest/v2/all");
        const data = await response.json();
        setCountries(data);
        setIsoading(!isLoading);
    }

    function handleInputChange(e: any) {
        setCountry(e.target.value);

        const place = e.target.value;

        const countryName = countries?.filter(item => item?.name.toLowerCase() === place.toLowerCase());
        if (e.target.value !== '') {
            return setCountries(countryName);
        } else {
            return setCountries(countries);
        }
    }

    function handleSubmit(e: any) {
        e.preventDefault();
    }

    function handleSelect(e: any) {
        e.preventDefault();
        setRegion(e.target.value);
        let region = e.target.value;

        let regionNames = countries?.filter(item => item?.region.toLowerCase() === region.toLowerCase());
        setCountries(regionNames);
    }

    function toggleTheme() {
        setIsDark(!isDark);
    }

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <Context.Provider value={{
            countries,
            setCountries,
            isLoading,
            country,
            region,
            handleInputChange,
            handleSubmit,
            handleSelect,
            regions,
            isDark,
            toggleTheme
        }}>
            {children}
        </Context.Provider>
    )
}