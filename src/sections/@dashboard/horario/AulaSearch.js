import { useEffect, useState } from 'react';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Typography, Autocomplete, InputAdornment, Popper } from '@mui/material';
// hooks
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import InputStyle from '../../../components/InputStyle';
import SearchNotFound from '../../../components/SearchNotFound';
import useAuth from 'src/hooks/useAuth';

// ----------------------------------------------------------------------

const PopperStyle = styled((props) => <Popper placement="bottom-start" {...props} />)({
  maxWidth: '380px !important',
});

// ----------------------------------------------------------------------

export default function AulaSearch({ onAulaIdChange }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  const isMountedRef = useIsMountedRef();

  const [searchQuery, setSearchQuery] = useState('');

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const { aulas } = user;
    setSearchResults([...aulas]);
  }, []);

  const handleChangeSearch = async (value) => {
    try {
      setSearchQuery(value);
      const { aulas } = user;
      const response = aulas.filter(e => !value ? true : e.aula_nombre.toLowerCase().includes(value.toLowerCase()));

      if (isMountedRef.current) {
        setSearchResults(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (aula_id) => {
    onAulaIdChange(aula_id);
  };

  return (
    <Autocomplete
      size="small"
      autoHighlight
      popupIcon={null}
      PopperComponent={PopperStyle}
      options={searchResults}
      onInputChange={(event, value) => handleChangeSearch(value)}
      getOptionLabel={(option) => option.aula_nombre}
      noOptionsText={<SearchNotFound searchQuery={searchQuery} />}
      renderInput={(params) => (
        <InputStyle
          {...params}
          stretchStart={380}
          placeholder="Buscar aula..."
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <Iconify icon={'eva:search-fill'} sx={{ ml: 1, width: 20, height: 20, color: 'text.disabled' }} />
              </InputAdornment>
            ),
          }}
        />
      )}
      renderOption={(props, option, { inputValue }) => {
        const { aula_id, aula_nombre } = option;
        const matches = match(aula_nombre, inputValue);
        const parts = parse(aula_nombre, matches);

        return (
          <li {...props}>
            <Link sx={{width: "100%"}} underline="none" onClick={() => handleClick(aula_id)}>
              {parts.map((part, index) => (
                <Typography
                  key={index}
                  component="span"
                  variant="subtitle2"
                  color={part.highlight ? 'primary' : 'textPrimary'}
                >
                  {part.text}
                </Typography>
              ))}
            </Link>
          </li>
        );
      }}
    />
  );
}
