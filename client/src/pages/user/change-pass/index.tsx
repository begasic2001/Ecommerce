import { Container, Stack } from '@mui/material';
import clsx from 'clsx';
import { TabFeature } from '~/features/user/tab';
import { ChangePassFeature } from '~/features/user/change-pass';

function ChangePass() {
  return (
    <section className={clsx('info', 'mt-50')}>
      <Container className="container">
        <Stack direction="row" className="justify-between">
          <TabFeature />
          <ChangePassFeature />
        </Stack>
      </Container>
    </section>
  );
}

export default ChangePass;
