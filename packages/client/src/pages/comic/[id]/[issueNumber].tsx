import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { Page } from '../../../components/layouts/page';
import { IssueReader } from '../../../containers/home/issue-reader';

const IssueReaderPage: FunctionComponent = () => {
  const router = useRouter();
  const comicId = router.query.id as string;
  const issueNumberStr = router.query.issueNumber as string;
  if (!issueNumberStr || !comicId) {
    return null;
  }
  try {
    const issueNumber = parseInt(issueNumberStr, 10);
    return (
      <Page>
        <IssueReader comicId={comicId} issueNumber={issueNumber} />
      </Page>
    );
  } catch (e) {
    return null;
  }
};

export default IssueReaderPage;
