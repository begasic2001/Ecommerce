import { Link } from 'react-router-dom';
import LogoWebsite from '~/components/logo';
import s from '../menu.module.scss';

export function HomeLink() {
  return (
    <Link to="/home" className={s.home}>
      <LogoWebsite />
    </Link>
  );
}
