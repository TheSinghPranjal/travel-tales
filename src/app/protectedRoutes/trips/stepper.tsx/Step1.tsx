import React from 'react';
import TextField from '@mui/material/TextField';
import './Step.css'

const Step1 = () => {
    return (
        <div className="step1-container">
            <h3 className="section-title">Personal Information</h3>
            <div className="form-columns">
                <div className="form-column">
                    <TextField fullWidth label="First Name" variant="outlined" placeholder="Enter First Name" className="" />
                    <TextField fullWidth label="Phone Number" variant="outlined" placeholder="Enter Phone Number" className="" />
                    <TextField fullWidth label="Email" variant="outlined" placeholder="Enter Email" className="" />
                </div>
                <div className="form-column">
                    <TextField fullWidth label="Last Name" variant="outlined" placeholder="Enter Last Name" className="" />
                    <TextField fullWidth label="Alternate Number" variant="outlined" placeholder="Enter Alternate Number" className="" />
                    <TextField fullWidth label="Alternate Email" variant="outlined" placeholder="Enter Alternate Email" className="" />
                </div>
            </div>
        </div>
    );
};

export default Step1;
