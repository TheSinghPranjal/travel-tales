'use client';
import { Button, ThemeProvider } from '@mui/material';
import React from 'react';

export interface CustomButtonProps {
    buttonText?: string;
    buttonId: string;
    btnClassName?: string;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleKeyPress?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
    buttonIconClassName?: string;
    buttonVariant?: 'contained' | 'outlined';
    customTheme?: unknown;
    badgeCount?: number;
    hideable?: boolean;
    toolTipText?: string;
}

const CustomButton = (props: CustomButtonProps) => {
    const {
        buttonText,
        btnClassName,
        handleClick,
        buttonId,
        isDisabled,
        buttonVariant,
        customTheme,
        buttonIconClassName,
        badgeCount,
        handleKeyPress,
        toolTipText,
    } = props;

    return (
        <div>
            <Button
                className={btnClassName}
                onClick={(event) => { event.stopPropagation(); handleClick?.(event); }}
                id={buttonId}
                disabled={isDisabled}
                variant={buttonVariant}
                onKeyPress={(event) => handleKeyPress?.(event)}
                title={toolTipText}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default CustomButton;
