import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './Step4.css'

const Step4 = () => {
    // State to store data fetched from local storage
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        secondaryPhoneNumber: '',
        email: '',
        secondaryEmail: ''
    });

    useEffect(() => {
        // Load data from local storage when Step4 component mounts
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);

    return (
        <form className="step4-container">
            <h3 className="section-title">Review Information</h3>
            <div className="form-columns">
                <div className="form-column">
                    <div className="form-row">
                        <label>First Name:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.firstName}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Phone Number:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.phoneNumber}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Email:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.email}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                </div>
                <div className="form-column">
                    <div className="form-row">
                        <label>Last Name:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.lastName}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Secondary Phone Number:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.secondaryPhoneNumber}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Secondary Email:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.secondaryEmail}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Step4;
