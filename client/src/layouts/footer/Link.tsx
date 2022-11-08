import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import s from './footer.module.scss';
import { ILinkItem, ISLinkPart } from './interface';

const styles: ISLinkPart = {
  link: s.link,
  linkItem: s['link__item'],
  linkTitle: s['link__title'],
  linkList: s['link-list'],
};

const customerServiceLink = [
  'Help & Contact Us',
  'Returns & Refunds',
  'Online Stores',
  'Terms & Conditions',
];
const companyFooter = ['About Us', 'Blog', 'FAQ Page', 'Contact Us'];
const socialMediaFooter = ['Twitter', 'Instagram', 'Tumblr', 'Pinterest'];
const archiveFooter = ['Designer Shoes', 'Gallery', 'Pricing', 'Feature Index'];

export function LinkComponent() {
  const LinkItemFooter = ({ title, list }: ILinkItem) => (
    <Grid item className={s['link__item']}>
      <p className={s['link__title']}>{title}</p>
      <ul className={s['link-list']}>
        {list.map((item) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </ul>
    </Grid>
  );

  return (
    <Grid container rowSpacing="3rem" className={s.link}>
      <LinkItemFooter title="Customer Service" list={customerServiceLink} />
      <LinkItemFooter title="Company" list={companyFooter} />
      <LinkItemFooter title="Social Meida" list={socialMediaFooter} />
      <LinkItemFooter title="Archive" list={archiveFooter} />
    </Grid>
  );
}
