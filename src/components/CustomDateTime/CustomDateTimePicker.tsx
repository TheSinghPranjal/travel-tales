'use client';
import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles
import PropTypes from 'prop-types'

export const CustomDatePickerProps = {
    datePickerId: PropTypes.string,
    datePickerClassName: PropTypes.string,
    selectsRange: PropTypes.bool,
    placeholderText: PropTypes.string,
    startDate: PropTypes.any,
    endDate: PropTypes.any,
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    showTimePicker: PropTypes.bool,
    isClearable: PropTypes.bool,
    disable: PropTypes.bool,
    timeInterval: PropTypes.number,
    format: PropTypes.string
}

export type CustomDatePickerPropTypes = PropTypes.InferProps<typeof CustomDatePickerProps>

const CustomDateTimePicker: FC<CustomDatePickerPropTypes> = (props) => {

    const { datePickerId, datePickerClassName, selectsRange, startDate, endDate, minDate, maxDate, onChange, showTimePicker, isClearable, timeInterval, format } = props;

    const handleChange = (date: Date | [Date, Date] | null, event?: React.SyntheticEvent<any> | undefined) => {
        if (onChange) {
            onChange(date, event);
        }
    };

    return (
        <DatePicker
            dateFormat={format ?? "dd/MM/yyyy"}
            id={datePickerId ?? ''}
            placeholderText='Select'
            startDate={startDate}
            endDate={endDate}
            minDate={minDate}
            maxDate={maxDate}
            onChange={handleChange}
            isClearable={isClearable ?? false}
            showTimeSelect={showTimePicker || false}
            timeFormat="HH:mm"
            timeIntervals={timeInterval ?? 1}
            className={`custom__date__picker ${datePickerClassName ?? ''}`}
            selected={new Date()}
        />
    )
}

export default CustomDateTimePicker;
