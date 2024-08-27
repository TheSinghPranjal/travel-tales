import { OutlinedInput } from '@mui/material';
import TextField from '@mui/material/TextField';

export interface CustomOutlinedInputProps {
    fullWidth?: boolean;
    disabled?: boolean;
    label?: string;
    error?: boolean;
    helperText?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    containerClassName?: string;
    variant?: 'outlined' | 'filled' | 'standard' | undefined;
}

const CustomOutlinedInput = (props: CustomOutlinedInputProps) => {

    const { fullWidth,
        disabled,
        label,
        error,
        helperText,
        placeholder,
        onChange,
        onBlur,
        onFocus,
        value,
        type,
        containerClassName,
        variant } = props


    return (
        <>
            <TextField
                id="outlined-basic"
                label={label}
                variant={variant}
                onChange={onChange}
            />
        </>
    )


}

export default CustomOutlinedInput; 