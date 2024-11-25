'use client'
import * as React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import useLocalStorage from './localStorage';



const steps = ['Personal Information', 'Country and City', 'Payment', 'Summary'];

function Step1Page({ setIsStepValid }: { setIsStepValid: (isValid: boolean) => void }) {
    return <Step1 setIsStepValid={setIsStepValid} />;
}

function Step2Page() {
    return <Typography><Step2 /></Typography>;
}

function Step3Page() {
    return <Typography><Step3 /></Typography>;
}

function Step4Page() {
    return <Typography><Step4 /></Typography>;
}

export default function HorizontalLinearStepper() {
    const [activeStep, setActiveStep] = useLocalStorage('activeStep', 0);
    const [isStepValid, setIsStepValid] = React.useState(false);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        localStorage.removeItem('activeStep');
    };

    const renderStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <Step1Page setIsStepValid={setIsStepValid} />;
            case 1:
                return <Step2Page />;
            case 2:
                return <Step3Page />;
            case 3:
                return <Step4Page />;
            default:
                return null;
        }
    };

    return (
        <div style={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography style={{ marginTop: '16px', marginBottom: '8px' }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '16px' }}>
                        <div style={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div style={{ marginTop: '16px', marginBottom: '8px' }}>{renderStepContent(activeStep)}</div>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingTop: '16px' }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            style={{ marginRight: '8px' }}
                        >
                            Back
                        </Button>
                        <div style={{ flex: '1 1 auto' }} />
                        <Button
                            onClick={handleNext}
                            disabled={activeStep === 0 && !isStepValid}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}
