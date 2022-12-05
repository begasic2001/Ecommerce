import { Container } from '@mui/system';
import clsx from 'clsx';
import { CartTableFeature } from '~/features/user/cart';

function Cart() {
  return (
    <section className={clsx('cart', 'mt-50')}>
      <Container className="container">
        <CartTableFeature />
      </Container>
    </section>
  );
}

export default Cart;
