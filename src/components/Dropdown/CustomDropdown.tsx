'use client'
import { useState } from 'react';
import Select, { ActionMeta, OptionProps, createFilter, components, MultiValueProps } from 'react-select';
import PropTypes from 'prop-types'
import React, {
    ReactNode,
    useEffect,
    type FC,
} from 'react'

import './CustomDropdown.css';

export const CustomDropdownType = {
    selectDropDownId: PropTypes.string.isRequired,
    dropDownClassName: PropTypes.string,
    selectDropDownName: PropTypes.string,
    handleSelectOptionChange: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
    selectValue: PropTypes.any,
    isMultiSelect: PropTypes.bool,
    selectOptions: PropTypes?.array?.isRequired,
    handleClose: PropTypes.func,
    renderToBody: PropTypes.bool,
    isClearable: PropTypes.bool,
    isClearableForSingleSelect: PropTypes.bool,
    placeholder: PropTypes.string,
    forceRefreshId: PropTypes.any,
    isLoading: PropTypes.bool,
    isSearchable: PropTypes.bool
}

export type CustomDropdownPropTypes = PropTypes.InferProps<typeof CustomDropdownType>


const CustomDropdown: FC<CustomDropdownPropTypes> = (props) => {



    const [selectedOption, setSelectedOption] = useState(null);
    const [isRtl, setIsRtl] = useState(false);
    const {
        selectDropDownId,
        dropDownClassName,
        handleSelectOptionChange,
        isSearchable,
        selectValue,
        selectOptions,
        selectDropDownName,
        isMultiSelect,
        isDisabled,
        handleClose,
        renderToBody,
        isClearable,
        isLoading,
        isClearableForSingleSelect,
        placeholder,
        forceRefreshId
    } = props;


    // const handleSelectOptionChange = () => {
    //     setSelectedOption(selected);
    // }

    return (
        <div className="App">
            <Select
                classNamePrefix="select"
                className={dropDownClassName ?? ''}
                defaultValue={selectedOption}
                onChange={handleSelectOptionChange}
                options={selectOptions}
                isSearchable={isSearchable ?? false}
                isDisabled={isDisabled ?? false}
                isLoading={isLoading ?? false}
                isClearable={isClearable ?? false}
            />
        </div>


    );
}

export default CustomDropdown