// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  dashboard: getIcon('ic_dashboard'),
  kanban: getIcon('ic_invoice')
};

const navConfig = [
  // PRINCIPAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Materiales',
    items: [
      { title: 'Horario', path: '/principal/horario', icon: ICONS.dashboard }
      //{ title: 'Psicología', path: '/principal/psicologia', icon: ICONS.kanban }
    ]
  }
];

export default navConfig;
