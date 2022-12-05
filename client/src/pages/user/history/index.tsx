import { Container, Stack } from '@mui/material';
import clsx from 'clsx';
import { HistoryFeature } from '~/features/user/history';
import { TabFeature } from '~/features/user/tab';

function History() {
  return (
    <section className={clsx('history', 'mt-50')}>
      <Container className="container">
        <Stack direction="row" className="justify-between">
          <TabFeature />
          <HistoryFeature />
        </Stack>
      </Container>
    </section>
  );
}

export default History;
