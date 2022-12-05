import { Container, Stack } from '@mui/material';
import clsx from 'clsx';
import { TabFeature } from '~/features/user/tab';
import { InfoFormFeature } from '~/features/user/info';

function Info() {
  return (
    <section className={clsx('info', 'mt-50')}>
      <Container className="container">
        <Stack direction="row" className="justify-between">
          <TabFeature />
          <InfoFormFeature />
        </Stack>
      </Container>
    </section>
  );
}

export default Info;
