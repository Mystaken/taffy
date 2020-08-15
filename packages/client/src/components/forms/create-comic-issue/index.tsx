import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import {
  Grid,
  TextField,
  Input,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';

import { CreateComicIssueFormProps } from './types';

export const CreateComicIssueForm: FunctionComponent<CreateComicIssueFormProps> = ({
  disabled,
  onSubmit
}) => {
  const { register, handleSubmit } = useForm();
  const handleOnSubmit = (values: {
    coverImage: FileList;
    issue: FileList;
    membership: boolean;
    title: string;
  }) => {
    onSubmit?.({
      coverImage: values.coverImage[0],
      issue: values.issue[0],
      membership: values.membership ? 'VIP' : 'Free',
      title: values.title
    });
  };
  return (
    <Grid
      container
      component="form"
      direction="column"
      spacing={2}
      onSubmit={handleSubmit(handleOnSubmit)}>
      <TextField
        label="Issue Title"
        type="text"
        name="title"
        inputRef={register({
          required: true
        })}
        autoFocus
        disabled={disabled}
      />

      {/** Comic Issue Cover Image */}
      <div>
        <Typography display="inline">Cover Image: </Typography>
        <Input
          type="file"
          name="coverImage"
          inputRef={register({
            required: true
          })}
          inputProps={{ multiple: false }}
        />
      </div>

      {/** Comic Issue Pages */}
      <div>
        <Typography display="inline">Pages: </Typography>
        <Input
          type="file"
          name="issue"
          inputRef={register({
            required: true
          })}
          inputProps={{ multiple: false }}
        />
      </div>

      <FormControlLabel
        control={
          <Checkbox
            name="membership"
            inputRef={register({
              required: false
            })}
          />
        }
        label="VIP Membership"
      />
      <Grid item>
        <Button color="primary" type="submit" disabled={disabled}>
          Create Comic Issue
        </Button>
      </Grid>
    </Grid>
  );
};
