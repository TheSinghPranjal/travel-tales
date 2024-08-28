'use client';
import Select from 'react-select';
import React, { FC, useState } from 'react';

interface CustomSelectProps {
  isClearable: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  options: Array<{ label: string; value: any }>;
  value?: any;
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
  } = props;


  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        value={value}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
        name="color"
        options={options}
      />

      {/* Uncomment this if you want to add checkboxes to control the select's behavior */}
      {/* <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >
        <Checkbox
          checked={localIsClearable}
          onChange={() => setIsClearable((state) => !state)}
        >
          Clearable
        </Checkbox>
        <Checkbox
          checked={localIsSearchable}
          onChange={() => setIsSearchable((state) => !state)}
        >
          Searchable
        </Checkbox>
        <Checkbox
          checked={localIsDisabled}
          onChange={() => setIsDisabled((state) => !state)}
        >
          Disabled
        </Checkbox>
        <Checkbox
          checked={localIsLoading}
          onChange={() => setIsLoading((state) => !state)}
        >
          Loading
        </Checkbox>
        <Checkbox
          checked={localIsRtl}
          onChange={() => setIsRtl((state) => !state)}
        >
          RTL
        </Checkbox>
      </div> */}
    </>
  );
};

export default CustomSelect;
