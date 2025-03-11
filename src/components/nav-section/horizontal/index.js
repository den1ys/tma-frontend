import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
// @mui
import { Stack } from '@mui/material';
//
import { NavListRoot } from './NavList';
import useAuth from 'src/hooks/useAuth';

// ----------------------------------------------------------------------

const hideScrollbar = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

NavSectionHorizontal.propTypes = {
  navConfig: PropTypes.array,
};

function NavSectionHorizontal({ navConfig }) {

  const[config_1, set_config_1] = useState(navConfig);

  const { user } = useAuth();

  useEffect(() => {
    const { tiene_acompanamiento } = user;

    if (!tiene_acompanamiento) {
      const objeto = config_1;

      objeto[0].items = objeto[0].items.filter(x => x.title !== "Acompañamiento");

      set_config_1(objeto);
    }
  }, []);

  return (
    <Stack direction="row" justifyContent="center" sx={{ bgcolor: 'background.neutral', borderRadius: 1, px: 0.5 }}>
      <Stack direction="row" sx={{ ...hideScrollbar, py: 1 }}>
        {navConfig.map((group) => (
          <Stack key={group.subheader} direction="row" flexShrink={0}>
            {group.items.map((list) => (
              <NavListRoot key={list.title + list.path} list={list} />
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default memo(NavSectionHorizontal);
