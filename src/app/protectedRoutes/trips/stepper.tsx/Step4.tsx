import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import './Step4.css';

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

    const [billingData, setBillingData] = useState({
        firstName: '',
        lastName: '',
        billingEmail: '',
        pincode: '',
        addressLine1: '',
        addressLine2: ''
    });

    useEffect(() => {
        // Load data from local storage when Step4 component mounts
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
        const savedBillingData = localStorage.getItem('billingData');
        if (savedBillingData) {
            setBillingData(JSON.parse(savedBillingData));
        }
    }, []);

    return (
        <form className="step4-container">
            <h3 className="section-title">Review Personal Information</h3>

            <div className="form-columns">
                <div className="form-column">
                    <div className="form-row">
                        <label>First name:</label>
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
                        <label>Phone number:</label>
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
                        <label>Last name:</label>
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
                        <label>Secondary phone number:</label>
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
                        <label>Secondary email:</label>
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
            <hr />
            <h3 className="section-title">Review Billing Data</h3>

            <div className="form-columns">
                <div className="form-column">
                    <div className="form-row">
                        <label>First name:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.firstName}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Address 1:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.addressLine1}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Billing email:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.billingEmail}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                </div>
                <div className="form-column">
                    <div className="form-row">
                        <label>Last name:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.lastName}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Address 2:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.addressLine2}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div className="form-row">
                        <label>Pin code:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.pincode}
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
