import { Container, Stack } from '@mui/material';
import FlowerImg from '~/assets/images/flower.jpg';
import clsx from 'clsx';

function Special() {
  return (
    <section className={clsx('special', 'mt-80 bg-white-3')}>
      <Container className="container">
        <Stack direction="row" className="items-center justify-between py-80">
          <div className="w-[45%] basis-[45%]">
            <img src={FlowerImg} alt="special scene" className="block h-full w-full" />
          </div>
          <section className="w-1/2 basis-1/2">
            <h3 className="font-sourceSerifPro text-35 leading-normal">
              Suprise Your <em className="font-semibold text-red-1">Special Day</em>! Let us arrange a smile.
            </h3>
            <p className="mt-25 text-16 text-txt-2">
              Where flowers are our inspiration to create lasting memories. Whatever the occasion...
            </p>
            <ul className="mt-25 ml-20 text-18">
              <li className="home-special-list-style text-txt-2">Hand picked just for you.</li>
              <li className="home-special-list-style mt-20 text-txt-2">Unique flower arrangements</li>
              <li className="home-special-list-style mt-20 text-txt-2">Best way to say you care.</li>
            </ul>
          </section>
        </Stack>
      </Container>
    </section>
  );
}

export { Special };
