import { Link } from 'react-router-dom';
import { CartIcon } from '~/components/icons';

function Cart() {
  return (
    <section className="cart">
      <Link to="/user/cart" className="ml-20 block">
        <CartIcon size="2.5rem" stroke="#757575" />
      </Link>
    </section>
  );
}

export { Cart };
