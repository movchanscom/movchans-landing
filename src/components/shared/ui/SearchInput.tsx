'use client';

import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  KeyboardEvent,
  useRef,
  useState,
} from 'react';
import SearchIcon from '/public/icons/magnifying-glass.svg';
import { useSearchParams } from 'next/navigation';
import CloseIcon from '/public/icons/close.svg';

type SearchInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  onSearch: (value: string) => void;
};

const SearchInput: FC<SearchInputProps> = (props) => {
  const { onSearch, ...inputProps } = props;
  const params = useSearchParams();
  const [inputText, setInputText] = useState<string>(
    params.get('searchname') || ''
  );

  const handleSearch = () => {
    onSearch(inputText);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const clearSearchInput = () => {
    setInputText('');
    onSearch('');
  };

  return (
    <div className='flex w-full items-center gap-3 rounded-[2.5rem] bg-gray-100 py-2 pl-2 pr-4'>
      <button
        className='rounded-full bg-basic-white p-2'
        onClick={handleSearch}
      >
        <SearchIcon />
      </button>
      <input
        {...inputProps}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        className='b3m-body-reg w-full bg-transparent text-basic-black outline-none placeholder:text-gray-700'
        onKeyDown={handleKeyDown}
      />
      {inputText && (
        <button className='p-1 pr-0' onClick={clearSearchInput}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
