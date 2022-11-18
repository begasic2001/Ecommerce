import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useForm } from 'react-hook-form';
import { CustomTextField } from '~/components/input';
import s from '../function.module.scss';
import { ISearchProps } from '../interface.type';

export function Search({ searchProps }: ISearchProps) {
  const { showSearch, searchRef, handleSearch } = searchProps;

  const { control, handleSubmit } = useForm();

  const submitSearch = (value: { [x: string]: string }) => {
    const params = {
      name_like: value['search'],
      _page: 1,
      _limit: 12,
    };

    handleSearch(params);
  };

  return (
    <>
      {!showSearch && (
        <IconButton ref={searchRef.btn}>
          <SearchIcon sx={{ width: '2.5rem', height: '2.5rem' }} />
        </IconButton>
      )}
      {showSearch && (
        <form onSubmit={handleSubmit(submitSearch)}>
          <CustomTextField
            name="search"
            control={control}
            placeholder="Nhập hoa, chậu yêu thích..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" ref={searchRef.inputBtn}>
                  <SearchIcon sx={{ width: '2rem', height: '2rem' }} />
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
