// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  dashboard: getIcon('ic_dashboard')
};

const navConfig = [
  // PRINCIPAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Materiales',
    items: [
      { title: 'Horario', path: '/principal/horario', icon: ICONS.dashboard }
    ]
  }
];

export default navConfig;
