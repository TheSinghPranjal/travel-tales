'use client';
import Select from 'react-select';
import React, { FC } from 'react';

interface CustomSelectProps {
  isClearable: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  options: Array<{ label: string; value: any }>;
  value?: any;
  customSelectClassName?: string;
}

const CustomSelect: FC<CustomSelectProps> = (props) => {
  const {
    isClearable,
    isDisabled,
    isLoading,
    isRtl,
    isSearchable,
    options,
    value,
    customSelectClassName
  } = props;

  // Handler to log selected option
  const handleChange = (selectedOption: any) => {
    if (selectedOption) {
      console.log('Selected place:', selectedOption.label);
      console.log('Selected value:', selectedOption.value);
    } else {
      console.log('Selection cleared');
    }
  };

  return (
    <>
      <Select
        className={customSelectClassName}
        classNamePrefix="select"
        value={value}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        options={options}
        onChange={handleChange}
      />
    </>
  );
};

export default CustomSelect;
