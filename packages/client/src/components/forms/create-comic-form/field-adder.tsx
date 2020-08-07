import React, { FunctionComponent } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useFieldArray } from 'react-hook-form';
import { FieldAdderProps } from './types';

export const FieldAdder: FunctionComponent<FieldAdderProps> = ({
  control,
  register,
  label,
  fieldName,
  disabled = false
}) => {
  const genresField = useFieldArray({
    control,
    name: fieldName
  });
  return (
    <div>
      <Typography display="inline">{label}:</Typography>
      {genresField.fields.map((item, index) => (
        <span key={index}>
          {index > 0 ? ',' : null}
          <TextField
            type="text"
            name={`${fieldName}[${index}].value`}
            defaultValue={`${item.value}`}
            inputRef={register({ required: true })}
            disabled={disabled}
          />
        </span>
      ))}
      <Button color="primary" onClick={() => genresField.append({ value: '' })}>
        Add
      </Button>
    </div>
  );
};
