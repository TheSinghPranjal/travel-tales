'use client'
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

const Step2 = () => {
    const [selectedCountry, setSelectedCountry] = React.useState('');
    const [selectedState, setSelectedState] = React.useState('');

    // Define countries and their respective states
    const countries = {
        USA: ['California', 'Texas', 'New York'],
        Canada: ['Ontario', 'Quebec', 'British Columbia'],
        India: ['Maharashtra', 'Delhi', 'Karnataka'],
    };

    // Handle country change
    const handleCountryChange = (event: SelectChangeEvent) => {
        setSelectedCountry(event.target.value);
        setSelectedState(''); // Reset state selection when country changes
    };

    // Handle state change
    const handleStateChange = (event: SelectChangeEvent) => {
        setSelectedState(event.target.value);
    };

    return (
        <div className='flex justify-center'>
            {/* Country Dropdown */}
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

            {/* State Dropdown */}
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
                    {selectedCountry && countries[selectedCountry].map((state: any) => (
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
