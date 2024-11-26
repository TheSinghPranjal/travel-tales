'use client'
import React, { useState, useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, FormHelperText, InputLabel, MenuItem } from '@mui/material';
import useLocalStorageForStep2 from './localStorageForStep2';



const Step2 = () => {
    const [selectedCountry, setSelectedCountry] = useLocalStorageForStep2<string>('selectedCountry', '');
    const [selectedState, setSelectedState] = useLocalStorageForStep2<string>('selectedState', '');
    const [countries, setCountries] = useState<{ [key: string]: string[] }>({});

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://run.mocky.io/v3/93ebfda9-cc7c-4830-8d96-6e694b62f185');
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleCountryChange = (event: SelectChangeEvent) => {
        const country = event.target.value;
        setSelectedCountry(country);
        setSelectedState('');
    };

    const handleStateChange = (event: SelectChangeEvent) => {
        setSelectedState(event.target.value);
    };

    return (
        <div className='flex justify-center'>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel>Country</InputLabel>
                <Select
                    fullWidth
                    value={selectedCountry}
                    label="Country"
                    onChange={handleCountryChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {Object.keys(countries).map((country) => (
                        <MenuItem key={country} value={country}>
                            {country}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Select a country</FormHelperText>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 200 }} disabled={!selectedCountry}>
                <InputLabel>State</InputLabel>
                <Select
                    value={selectedState}
                    label="State"
                    onChange={handleStateChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {selectedCountry && countries[selectedCountry]?.map((state) => (
                        <MenuItem key={state} value={state}>
                            {state}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>Select a state</FormHelperText>
            </FormControl>
        </div>
    );
};

export default Step2;
