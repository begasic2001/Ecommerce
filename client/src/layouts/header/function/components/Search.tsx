import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useForm } from 'react-hook-form';
import { CustomTextField } from '~/components/input';
import s from '../function.module.scss';
import { ISearchProps } from '../interface';

export function Search({ searchProps }: ISearchProps) {
  const { searchValue, handleSearchValue, showSearch, searchRef } = searchProps;

  const { control, handleSubmit } = useForm();

  const submitSearch = (e: any) => {
    console.log(e);
  }

  return (
    <>
      {!showSearch && (
        <IconButton ref={searchRef.btn}>
          <SearchIcon className={s['icon__search']} />
        </IconButton>
      )}
      {showSearch && (
        <form onSubmit={handleSubmit(submitSearch)}>
          <CustomTextField
            control={control}
            name="search"
            defaultValue={searchValue}
            onChange={handleSearchValue}
            placeholder="Nhập hoa, chậu yêu thích..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" ref={searchRef.inputBtn}>
                  <SearchIcon className={s['icon__search-input']} />
                </InputAdornment>
              ),
            }}
            ref={searchRef.input}
            className={s.search}
          />
        </form>
      )}
    </>
  );
}
