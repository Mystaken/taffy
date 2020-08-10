import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { Page } from '../../../components/layouts/page';
import { ComicDetails } from '../../../containers/home/comic-details';

const ComicDetailsPage: FunctionComponent = () => {
  const router = useRouter();
  const comicId = router.query.id as string;

  return (
    <Page>
      <ComicDetails comicId={comicId} />
    </Page>
  );
};

export default ComicDetailsPage;
