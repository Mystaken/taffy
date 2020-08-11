import { FunctionComponent } from 'react';
import { Grid, Card, Button, makeStyles } from '@material-ui/core';

const GetVIPPage: FunctionComponent<{
  width: number;
  height: number;
  onClick?: () => void;
}> = ({ width, height, onClick }) => {
  const classes = makeStyles(_ => ({
    page: {
      width: `${width}px`,
      height: `${height}px`
    },
    content: {
      height: '100%'
    }
  }))();

  return (
    <Card className={classes.page}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.content}>
        <Button color="primary" size="large" onClick={onClick}>
          Get VIP Membership
        </Button>
      </Grid>
    </Card>
  );
};

export const comicReaderPageRenderer = (
  pages: {
    page?: string;
  }[],
  opt: {
    imgWidth: number;
    imgHeight: number;
    onGetVIP?: () => void;
  }
) => {
  const Row = ({ index, style }: any) => {
    const page = pages[index];
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          width: `${opt.imgWidth}px`,
          height: `${opt.imgHeight}px`,
          ...style
        }}>
        {page.page ? (
          <img
            style={{ maxHeight: '100%', maxWidth: '100%' }}
            src={page.page}
          />
        ) : (
          <Grid container direction="column">
            <GetVIPPage
              width={opt.imgWidth}
              height={opt.imgHeight}
              onClick={opt.onGetVIP}
            />
          </Grid>
        )}
      </div>
    );
  };
  return Row;
};
