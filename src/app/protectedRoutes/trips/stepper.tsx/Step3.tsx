import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { FaCcVisa, FaCcMastercard, FaStripe } from 'react-icons/fa';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Step3 = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [pincode, setPincode] = useState<string>('');
    const [billingEmail, setBillingEmail] = useState('');
    const [selectedBank, setSelectedBank] = useState('@icici');

    const [errors, setErrors] = useState({
        billingEmail: '',
        firstName: '',
        lastName: '',
        addressLine1: '',
        pincode: '',
    });

    const [touchedFields, setTouchedFields] = useState({
        billingEmail: false,
        firstName: false,
        lastName: false,
        addressLine1: false,
        pincode: false,
    });

    // Save specified fields to localStorage
    useEffect(() => {
        const dataToSave = {
            billingEmail,
            pincode,
            firstName,
            lastName,
            addressLine1,
            addressLine2,
        };
        localStorage.setItem('billingData', JSON.stringify(dataToSave));
    }, [billingEmail, pincode, firstName, lastName, addressLine1, addressLine2]);

    // Load saved data from localStorage when component mounts
    // useEffect(() => {
    //     const savedData = localStorage.getItem('billingData');
    //     if (savedData) {
    //         const parsedData = JSON.parse(savedData);
    //         setBillingEmail(parsedData.billingEmail || '');
    //         setPincode(parsedData.pincode || '');
    //         setFirstName(parsedData.firstName || '');
    //         setLastName(parsedData.lastName || '');
    //         setAddressLine1(parsedData.addressLine1 || '');
    //         setAddressLine2(parsedData.addressLine2 || '');
    //     }
    // }, []);

    const handleBlur = (field: string) => {
        setTouchedFields((prev) => ({ ...prev, [field]: true }));
    };

    const validateFields = () => {
        const newErrors = {
            billingEmail: billingEmail ? '' : 'Billing Email is required',
            firstName: firstName ? '' : 'First Name is required',
            lastName: lastName ? '' : 'Last Name is required',
            addressLine1: addressLine1 ? '' : 'Address Line 1 is required',
            pincode: pincode.length === 6 ? '' : 'Pincode must be 6 digits',
            addressLine2: ''
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === '');
    };

    const PaymentForm = () => {
        const [selectedPayment, setSelectedPayment] = useState<'card' | 'googlePay' | 'bank' | null>(null);
        const [cardNumber, setCardNumber] = useState('');
        const [expiry, setExpiry] = useState('');
        const [cvc, setCvc] = useState('');
        const [isBillingSame, setIsBillingSame] = useState(true);

        const [paymentErrors, setPaymentErrors] = useState({
            cardNumber: '',
            expiry: '',
            cvc: ''
        });

        const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 16);
            setCardNumber(value);
            setPaymentErrors((prevErrors) => ({
                ...prevErrors,
                cardNumber: value.length === 16 ? '' : 'Card number must be 16 digits'
            }));
        };

        const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/[^0-9/]/g, '').slice(0, 5);
            setExpiry(value);
            const [month, year] = value.split('/');
            const validMonth = month && parseInt(month, 10) <= 12;
            const validYear = year && year.length === 2;
            setPaymentErrors((prevErrors) => ({
                ...prevErrors,
                expiry: validMonth && validYear ? '' : 'Enter a valid MM/YY format'
            }));
        };

        const handleCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.replace(/\D/g, '').slice(0, 3);
            setCvc(value);
            setPaymentErrors((prevErrors) => ({
                ...prevErrors,
                cvc: value.length === 3 ? '' : 'CVC must be 3 digits'
            }));
        };

        return (
            <div className="max-w-lg mx-auto p-4">
                <h2 className="text-xl font-semibold mb-4">Payment</h2>
                <Box className="flex justify-around mb-4 " style={{ width: '500px' }}>
                    <Button
                        variant={selectedPayment === 'card' ? 'contained' : 'outlined'}
                        onClick={() => setSelectedPayment('card')}
                    >
                        Card
                    </Button>
                    <Button
                        variant={selectedPayment === 'googlePay' ? 'contained' : 'outlined'}
                        onClick={() => setSelectedPayment('googlePay')}
                    >
                        Google Pay
                    </Button>
                    <Button
                        variant={selectedPayment === 'bank' ? 'contained' : 'outlined'}
                        onClick={() => setSelectedPayment('bank')}
                    >
                        Bank
                    </Button>
                </Box>

                {selectedPayment === 'card' && (
                    <div>
                        <TextField
                            label="Card number"
                            fullWidth
                            placeholder="1234 1234 1234 1234"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            error={!!paymentErrors.cardNumber}
                            helperText={paymentErrors.cardNumber}
                            InputProps={{
                                endAdornment: (
                                    <Box className="flex items-center space-x-2">
                                        <FaCcVisa size={24} />
                                        <FaCcMastercard size={24} />
                                        <FaStripe size={24} />
                                    </Box>
                                )
                            }}
                            className="my-2"
                        />
                        <Box className="flex gap-4">
                            <TextField
                                label="Expiry"
                                placeholder="MM/YY"
                                value={expiry}
                                onChange={handleExpiryChange}
                                error={!!paymentErrors.expiry}
                                helperText={paymentErrors.expiry}
                                className="w-1/2"
                            />
                            <TextField
                                label="CVC"
                                placeholder="CVC"
                                value={cvc}
                                onChange={handleCvcChange}
                                error={!!paymentErrors.cvc}
                                helperText={paymentErrors.cvc}
                                className="w-1/2"
                            />
                        </Box>
                        <div className="flex items-center mt-4">
                            <Checkbox
                                checked={isBillingSame}
                                onChange={(e) => setIsBillingSame(e.target.checked)}
                                color="primary"
                            />
                            <span>Billing is same as shipping information</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            By providing your card information, you allow us to save your card details for future payments.
                        </p>
                        <Box className="flex justify-between mt-6">
                            <Button variant="outlined">Cancel</Button>
                            <Button variant="contained" color="primary">Save</Button>
                        </Box>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="w-4/5 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Payment and Account Information</h2>
            <h3 className="text-lg font-medium mb-2">Contact Information</h3>
            <Box className="flex justify-center items-center w-full gap-4 mb-4">
                <TextField
                    className="w-3/4"
                    type="email"
                    label="Billing Email"
                    variant="outlined"
                    placeholder="Enter Billing Email"
                    value={billingEmail}
                    onChange={(e) => setBillingEmail(e.target.value)}
                    onBlur={() => handleBlur('billingEmail')}
                    error={touchedFields.billingEmail && !!errors.billingEmail}
                    helperText={touchedFields.billingEmail ? errors.billingEmail : ''}
                />
                <TextField
                    className="w-1/4"
                    type="text"
                    label="Pincode"
                    variant="outlined"
                    placeholder="Enter Pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    onBlur={() => handleBlur('pincode')}
                    error={touchedFields.pincode && !!errors.pincode}
                    helperText={touchedFields.pincode ? errors.pincode : ''}
                />
            </Box>
            <TextField
                className="w-full mb-4"
                type="text"
                label="First Name"
                variant="outlined"
                placeholder="Enter First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                onBlur={() => handleBlur('firstName')}
                error={touchedFields.firstName && !!errors.firstName}
                helperText={touchedFields.firstName ? errors.firstName : ''}
            />
            <TextField
                className="w-full mb-4"
                type="text"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onBlur={() => handleBlur('lastName')}
                error={touchedFields.lastName && !!errors.lastName}
                helperText={touchedFields.lastName ? errors.lastName : ''}
            />
            <TextField
                className="w-full mb-4"
                type="text"
                label="Address Line 1"
                variant="outlined"
                placeholder="Enter Address Line 1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                onBlur={() => handleBlur('addressLine1')}
                error={touchedFields.addressLine1 && !!errors.addressLine1}
                helperText={touchedFields.addressLine1 ? errors.addressLine1 : ''}
            />
            <TextField
                className="w-full mb-4"
                type="text"
                label="Address Line 2"
                variant="outlined"
                placeholder="Enter Address Line 2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                onBlur={() => handleBlur('addressLine2')}
            />

            <h3 className="text-lg font-medium mb-2">Payment Information</h3>
            <PaymentForm />
        </div>
    );
};

export default Step3;
