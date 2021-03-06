import React, { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, TextField, Button, Typography, Input } from '@material-ui/core';

import { UpdateComicFormProps } from './types';
import { UpdateComicFormSubmission } from '../../../services/comics/update-comic';
import { FieldAdder } from '../field-adder';
import { FormArrayValue } from '../field-adder/types';

const comicToValues = (comic: Comic) => ({
  title: comic.title,
  description: comic.description,
  genres: comic.genres.map(g => ({ values: g })),
  categories: comic.genres.map(c => ({ values: c })),
  authors: comic.genres.map(a => ({ values: a }))
});
export const EditComicForm: FunctionComponent<UpdateComicFormProps> = ({
  disabled = false,
  comic,
  onSubmit
}) => {
  const { register, handleSubmit, control, setValue } = useForm();

  useEffect(() => {
    const values = comicToValues(comic);
    Object.entries(values).forEach(([k, v]) => setValue(k, v));
    setValue('genres.0', 'abc');
  }, [comic]);

  const handleOnSubmit = (data: {
    title: string;
    description: string;
    genres?: FormArrayValue[];
    categories?: FormArrayValue[];
    authors?: FormArrayValue[];
    cardImage: FileList;
    mobileCoverImage: FileList;
    desktopBackgroundImage: FileList;
    desktopForegroundImage: FileList;
    bannerImage: FileList;
  }) => {
    const submitValues: UpdateComicFormSubmission = {
      title: data.title,
      description: data.description,
      genres: (data.genres ?? []).map(g => g.value),
      categories: (data.categories ?? []).map(c => c.value),
      authors: (data.authors ?? []).map(a => a.value),
      cardImage: data.cardImage[0],
      mobileCoverImage: data.mobileCoverImage[0],
      desktopBackgroundImage: data.desktopBackgroundImage[0],
      desktopForegroundImage: data.desktopForegroundImage[0],
      bannerImage: data.bannerImage[0]
    };
    onSubmit?.(submitValues);
  };

  return (
    <Grid
      container
      component="form"
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
        defaultValues={comic.categories}
      />
      {/** Comic Authors */}
      <FieldAdder
        control={control}
        register={register}
        fieldName="authors"
        label="Authors"
        defaultValues={comic.authors}
      />
      {/** Comic Genres */}
      <FieldAdder
        control={control}
        register={register}
        fieldName="genres"
        label="Genres"
        defaultValues={comic.genres}
      />

      {/** Comic Cover Image */}
      <div>
        <Typography display="inline">Cover Image: </Typography>
        <Input
          type="file"
          name="coverImage"
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      {/** Comic Cover Image */}
      <div>
        <Typography display="inline">Card Image: </Typography>
        <Input
          type="file"
          name="cardImage"
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      {/** Comic Mobile Cover Image */}
      <div>
        <Typography display="inline">Mobile Cover Image: </Typography>
        <Input
          type="file"
          name="mobileCoverImage"
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      {/** Comic Desktop Cover Image */}
      <div>
        <Typography display="inline">Desktop Background Image: </Typography>
        <Input
          type="file"
          name="desktopBackgroundImage"
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      {/** Comic Desktop Cover Image */}
      <div>
        <Typography display="inline">Desktop Foreground Image: </Typography>
        <Input
          type="file"
          name="desktopForegroundImage"
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      {/** Comic Banner Image */}
      <div>
        <Typography display="inline">Banner Image: </Typography>
        <Input
          type="file"
          name="bannerImage"
          inputRef={register}
          inputProps={{ multiple: false }}
        />
      </div>

      <Grid item>
        <Button color="primary" type="submit" disabled={disabled}>
          Update Comic
        </Button>
      </Grid>
    </Grid>
  );
};
