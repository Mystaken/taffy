import React, { FunctionComponent, useEffect, useState } from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import { DialogActions, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export interface RatingSelectDialogProps {
  onSubmitRate?: (rating: number) => void;
  defaultRating?: number;
}

export const RatingSelectDialog: FunctionComponent<
  RatingSelectDialogProps & DialogProps
> = ({ onSubmitRate, open, onClose, defaultRating = 3 }) => {
  const [selectedRating, setSelectedRating] = useState(defaultRating);

  useEffect(() => {
    setSelectedRating(defaultRating);
  }, [open]);

  const handleOnRate = () => {
    onSubmitRate?.(selectedRating);
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogActions>
        <Rating
          name="half-rating"
          value={selectedRating}
          color="secondary"
          precision={0.5}
          onChange={(_, rating) => {
            if (rating) {
              setSelectedRating(rating);
            }
          }}
        />
        <Button onClick={handleOnRate} color="primary">
          Rate
        </Button>
      </DialogActions>
    </Dialog>
  );
};
