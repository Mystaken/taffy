import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { IssueSelector } from '.';
import { Container } from '@material-ui/core';
import { mockComicIssue } from '../../../fixtures/comic.mock';

const stories = storiesOf('Comic', module);

stories.addParameters({ info: { inline: true } }).addDecorator(withKnobs);

stories.add('Issue Selector', () => {
  const issues: ComicIssue[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(i =>
    mockComicIssue({
      title: `Mock Issue Title ${i}`
    })
  );
  return (
    <Container maxWidth="sm">
      <IssueSelector
        issues={issues}
        onIssueSelect={console.log}></IssueSelector>
    </Container>
  );
});
