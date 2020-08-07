import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Button, Typography, Input } from '@material-ui/core';
import { FieldAdder } from './field-adder';
import { CreateComicFormProps, FormArrayValue } from './types';
import { CreateComicFormSubmission } from '../../../services/comic/comic.service';

/*

  title: Joi.string().required(),
  description: Joi.string().required(),
  genres: Joi.array().items(Joi.string()).required(),
  categories: Joi.array().items(Joi.string()).required(),
  authors: Joi.array().items(Joi.string()).required()
*/

export const CreateComicForm: FunctionComponent<CreateComicFormProps> = ({
  disabled = false,
  onSubmit
}) => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      genres: []
    }
  });

  const handleOnSubmit = (data: {
    title: string;
    description: string;
    genres?: FormArrayValue[];
    categories?: FormArrayValue[];
    authors?: FormArrayValue[];
    coverImage: FileList;
    desktopCoverImage: FileList;
    mobileCoverImage: FileList;
    comicBannerImage: FileList;
  }) => {
    console.log(data);
    const submitValues: CreateComicFormSubmission = {
      title: data.title,
      description: data.description,
      genres: (data.genres ?? []).map(g => g.value),
      categories: (data.categories ?? []).map(c => c.value),
      authors: (data.authors ?? []).map(a => a.value),
      coverImage: data.coverImage[0],
      desktopCoverImage: data.desktopCoverImage[0],
      mobileCoverImage: data.mobileCoverImage[0],
      comicBannerImage: data.comicBannerImage[0]
    };
    onSubmit?.(submitValues);
  };

  return (
    <Grid
      container
      component={'form'}
      direction="column"
      spacing={2}
      onSubmit={handleSubmit(handleOnSubmit)}>
      {/** Comic Title */}
      <TextField
        label="Comic Title"
        type="text"
        name="title"
        inputRef={register({
          required: true
        })}
        autoFocus
        disabled={disabled}
      />
      {/** Comic Description */}
      <TextField
        label="Comic Description"
        type="text"
        name="description"
        inputRef={register({
          required: true
        })}
        autoFocus
        disabled={disabled}
        multiline
        rows={3}
      />
      {/** Comic Categories */}
      <FieldAdder
        control={control}
        register={register}
        fieldName="categories"
        label="Categories"
      />
      {/** Comic Authors */}
      <FieldAdder
        control={control}
        register={register}
        fieldName="authors"
        label="Authors"
      />
      {/** Comic Genres */}
      <FieldAdder
        control={control}
        register={register}
        fieldName="genres"
        label="Genres"
      />

      <div>
        <Typography display="inline">Cover Image: </Typography>
        <Input
          type="file"
          name={'coverImage'}
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      <div>
        <Typography display="inline">Mobile Cover Image: </Typography>
        <Input
          type="file"
          name={'mobileCoverImage'}
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      <div>
        <Typography display="inline">Desktop Cover Image: </Typography>
        <Input
          type="file"
          name={'desktopCoverImage'}
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      <div>
        <Typography display="inline">Banner Image: </Typography>
        <Input
          type="file"
          name={'comicBannerImage'}
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>
      <Grid item>
        <Button color="primary" type="submit" disabled={disabled}>
          Create Comic
        </Button>
      </Grid>
    </Grid>
  );
};
