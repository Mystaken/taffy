import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { Page } from '../../../components/layouts/page';
import { ComicDetails } from '../../../containers/home/comic-details';
import { pages } from '../../../routing';
import { redirect } from '../../../utils/redirect';
import { useIsDesktop } from '../../../hooks/media-query.hook';
import { Footer } from '../../../components/layouts/footer';
import { FooterContainer } from '../../../components/layouts/footer/footer-container';

const ComicDetailsPage: FunctionComponent = () => {
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const comicId = router.query.id as string;
  if (!comicId) {
    return null;
  }

  const handleOnGetVIP = async () => {
    await redirect(pages.membership.payment);
  };

  const handleOnIssueSelect = async (
    _issue: ComicIssue,
    index: number,
    comic: Comic
  ) => {
    await redirect(pages.comics.comicIssueViewer(comic.id, index + 1));
  };

  return (
    <Page>
      <FooterContainer>
        <ComicDetails
          comicId={comicId}
          onGetVIP={handleOnGetVIP}
          onIssueSelect={handleOnIssueSelect}
          isDesktop={isDesktop}
        />
        <Footer />
      </FooterContainer>
    </Page>
  );
};

export default ComicDetailsPage;
