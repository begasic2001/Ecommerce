import { Grid } from '@mui/material';
import s from './footer.module.scss';

export function LinkPart() {
  return (
    <Grid container rowSpacing="3rem" className={s.link}>
      <Grid item className={s['link__item']}>
        <p className={s['link__title']}>Customer Service</p>
        <ul className={s['link-list']}>
          <li>Help & Contact Us</li>
          <li>Returns & Refunds</li>
          <li>Online Stores</li>
          <li>Terms & Conditions</li>
        </ul>
      </Grid>
      <Grid item className={s['link__item']}>
        <p className={s['link__title']}>Company</p>
        <ul className={s['link-list']}>
          <li>About Us</li>
          <li>Blog</li>
          <li>FAQ Page</li>
          <li>Contact Us</li>
        </ul>
      </Grid>
      <Grid item className={s['link__item']}>
        <p className={s['link__title']}>Social Media</p>
        <ul className={s['link-list']}>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Tumblr</li>
          <li>Pinterest</li>
        </ul>
      </Grid>
      <Grid item className={s['link__item']}>
        <p className={s['link__title']}>Archive</p>
        <ul className={s['link-list']}>
          <li>Designer Shoes</li>
          <li>Gallery</li>
          <li>Pricing</li>
          <li>Feature Index</li>
        </ul>
      </Grid>
    </Grid>
  );
}
