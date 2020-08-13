import React, { FunctionComponent } from 'react';
import { IssueReaderProps } from './types';
import { useAsync } from '../../../hooks/async.hook';
import { getComicById } from '../../../services/comics/get-comic-by-id';
import { comicReaderPageRenderer } from './utils';
import { useDimension } from '../../../hooks/media-query.hook';
import { PaddinglessContainer } from '../../../components/layouts/paddingless-container';
import { VirtualizedFixedLoader } from '../../../components/loaders/virtualized-fixed-loader';

const DEFAULT_DIMENSIONS = {
  WIDTH: 800,
  HEIGHT: 1200
};

export const IssueReader: FunctionComponent<IssueReaderProps> = ({
  comicId,
  issueNumber
}) => {
  const { value: comic } = useAsync(() => getComicById(comicId), [comicId]);
  const dimensions = useDimension();

  if (!comic) {
    return null;
  }
  if (issueNumber > comic.issues.length) {
    return null;
  }
  let width = dimensions.width;

  const imgWidth =
    width < DEFAULT_DIMENSIONS.WIDTH ? width : DEFAULT_DIMENSIONS.WIDTH;
  const imgHeight =
    imgWidth * (DEFAULT_DIMENSIONS.HEIGHT / DEFAULT_DIMENSIONS.WIDTH);

  const pages: { page?: string }[] = [];
  comic.issues.forEach(issue => {
    if (issue.pages) {
      issue.pages.forEach(p => pages.push({ page: p }));
    } else {
      for (let i = 0; i < issue.numPages; i++) {
        pages.push({});
      }
    }
  });

  const comicRenderer = comicReaderPageRenderer(pages, {
    imgWidth,
    imgHeight,
    onGetVIP: () => {}
  });

  let start = 0;

  for (let i = 0; i < issueNumber - 1; i++) {
    start += comic.issues[i].numPages;
  }

  return (
    <PaddinglessContainer maxWidth="md" style={{ height: '100vh' }}>
      <VirtualizedFixedLoader
        itemSize={imgHeight}
        itemCount={pages.length}
        initialScrollOffset={start * imgHeight}>
        {comicRenderer}
      </VirtualizedFixedLoader>
    </PaddinglessContainer>
  );
};
