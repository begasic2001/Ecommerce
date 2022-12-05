import { Grid } from '@mui/material';
import clsx from 'clsx';
import { v4 as uuidv4 } from 'uuid';

interface LinkListItem {
  title: string;
  list: string[];
}

const customerServiceList = ['Help & Contact Us', 'Returns & Refunds', 'Online Stores', 'Terms & Conditions'];
const companyList = ['About Us', 'Blog', 'FAQ Page', 'Contact Us'];
const socialMediaList = ['Twitter', 'Instagram', 'Tumblr', 'Pinterest'];
const archiveList = ['Designer Shoes', 'Gallery', 'Pricing', 'Feature Index'];

function LinkList() {
  return (
    <Grid container rowSpacing="3rem" className="border-b-solid border-b border-b-bd-1 py-50">
      <LinkListItem title="Customer Service" list={customerServiceList} />
      <LinkListItem title="Company" list={companyList} />
      <LinkListItem title="Social Media" list={socialMediaList} />
      <LinkListItem title="Archive" list={archiveList} />
    </Grid>
  );
}

const LinkListItem = ({ title, list }: LinkListItem) => (
  <Grid item className="basis-1/4">
    <p className="text-15 font-bold uppercase text-txt-1">{title}</p>
    <ul>
      {list.map((item) => (
        <li key={uuidv4()} className={clsx('list-none pt-15', 'hover:cursor-pointer hover:text-txt-3')}>
          {item}
        </li>
      ))}
    </ul>
  </Grid>
);

export { LinkList };
