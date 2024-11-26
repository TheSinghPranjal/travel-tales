'use client'
import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import './Step4.css';

const Step4 = () => {
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

    const handleFormChange = (field: any, value: any) => {
        const updatedFormData = { ...formData, [field]: value };
        setFormData(updatedFormData);
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
    };

    const handleBillingChange = (field: any, value: any) => {
        const updatedBillingData = { ...billingData, [field]: value };
        setBillingData(updatedBillingData);
        localStorage.setItem('billingData', JSON.stringify(updatedBillingData));
    };

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
                            onChange={(e: any) => handleFormChange('firstName', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Phone number:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.phoneNumber}
                            onChange={(e: any) => handleFormChange('phoneNumber', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Email:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.email}
                            onChange={(e: any) => handleFormChange('email', e.target.value)}
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
                            onChange={(e: any) => handleFormChange('lastName', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Secondary phone number:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.secondaryPhoneNumber}
                            onChange={(e: any) => handleFormChange('secondaryPhoneNumber', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Secondary email:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={formData.secondaryEmail}
                            onChange={(e: any) => handleFormChange('secondaryEmail', e.target.value)}
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
                            onChange={(e: any) => handleBillingChange('firstName', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Address 1:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.addressLine1}
                            onChange={(e: any) => handleBillingChange('addressLine1', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Billing email:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.billingEmail}
                            onChange={(e: any) => handleBillingChange('billingEmail', e.target.value)}
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
                            onChange={(e: any) => handleBillingChange('lastName', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Address 2:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.addressLine2}
                            onChange={(e: any) => handleBillingChange('addressLine2', e.target.value)}
                        />
                    </div>
                    <div className="form-row">
                        <label>Pin code:</label>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={billingData.pincode}
                            onChange={(e: any) => handleBillingChange('pincode', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Step4;