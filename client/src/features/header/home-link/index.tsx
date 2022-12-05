import clsx from 'clsx';
import { Link } from 'react-router-dom';
import LogoWebsite from '~/components/ui/logo';

function HomeLink({ textSize = 'text-35' }) {
  return (
    <section className="home-link">
      <Link to="/home" className={clsx('block text-center text-txt-1 no-underline', textSize)}>
        <LogoWebsite />
      </Link>
    </section>
  );
}

export { HomeLink };
