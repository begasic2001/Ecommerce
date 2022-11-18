import { Grid } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import s from './link.module.scss';
import { ILinkItem } from './interface.type';

const customerServiceLink = [
  'Help & Contact Us',
  'Returns & Refunds',
  'Online Stores',
  'Terms & Conditions',
];
const companyFooter = ['About Us', 'Blog', 'FAQ Page', 'Contact Us'];
const socialMediaFooter = ['Twitter', 'Instagram', 'Tumblr', 'Pinterest'];
const archiveFooter = ['Designer Shoes', 'Gallery', 'Pricing', 'Feature Index'];

function Link() {
  return (
    <Grid container rowSpacing="3rem" className={s.link}>
      <LinkItemFooter title="Customer Service" list={customerServiceLink} />
      <LinkItemFooter title="Company" list={companyFooter} />
      <LinkItemFooter title="Social Meida" list={socialMediaFooter} />
      <LinkItemFooter title="Archive" list={archiveFooter} />
    </Grid>
  );
}

const LinkItemFooter = ({ title, list }: ILinkItem) => (
  <Grid item className={s.linkItem}>
    <p className={s.linkTitle}>{title}</p>
    <ul className={s.linkList}>
      {list.map((item) => (
        <li key={uuidv4()}>{item}</li>
      ))}
    </ul>
  </Grid>
);

export default Link;
