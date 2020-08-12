import React, { FunctionComponent, useEffect } from 'react';
import { Typography, TextField, Button, IconButton } from '@material-ui/core';
import { useFieldArray } from 'react-hook-form';
import { HighlightOff } from '@material-ui/icons';

import { FieldAdderProps } from './types';

export const FieldAdder: FunctionComponent<FieldAdderProps> = ({
  control,
  register,
  label,
  fieldName,
  disabled = false,
  defaultValues = []
}) => {
  const fieldArray = useFieldArray({
    control,
    name: fieldName
  });
  useEffect(() => {
    defaultValues.forEach(value => fieldArray.append({ value }));
  }, []);
  return (
    <div>
      <Typography display="inline">{label}:</Typography>
      {fieldArray.fields.map((item, index) => (
        <span key={index}>
          {index > 0 ? ',' : null}
          <TextField
            type="text"
            name={`${fieldName}[${index}].value`}
            defaultValue={`${item.value}`}
            inputRef={register({ required: true })}
            disabled={disabled}
          />
          <IconButton color="primary" onClick={() => fieldArray.remove(index)}>
            <HighlightOff />
          </IconButton>
        </span>
      ))}
      <Button color="primary" onClick={() => fieldArray.append({ value: '' })}>
        Add More
      </Button>
    </div>
  );
};
