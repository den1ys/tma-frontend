// @mui
import { Container, Box } from '@mui/material';
// routes
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
// sections
import { UserCard } from '../sections/@dashboard/user/cards';

// ----------------------------------------------------------------------

export default function PageOne() {
  const { themeStretch } = useSettings();

  const _userCards = [
    {
      "id": 1,
      "courseName": "AJEDREZ",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/1/300/400"
    },
    {
      "id": 2,
      "courseName": "ÁLGEBRA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/11/300/400"
    },
    {
      "id": 3,
      "courseName": "ÁLGEBRA II",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/21/300/400"
    },
    {
      "id": 4,
      "courseName": "ÁLGEBRA SESIÓN 1",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/31/300/400"
    },
    {
      "id": 5,
      "courseName": "ÁLGEBRA SESIÓN 2",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/41/300/400"
    },
    {
      "id": 6,
      "courseName": "ARITMÉTICA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/6/300/400"
    },
    {
      "id": 7,
      "courseName": "ARITMÉTICA II",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/51/300/400"
    },
    {
      "id": 8,
      "courseName": "ARITMÉTICA SESIÓN 1",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/61/300/400"
    },
    {
      "id": 9,
      "courseName": "ARITMÉTICA SESIÓN 2",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/71/300/400"
    },
    {
      "id": 10,
      "courseName": "ARTE",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/81/300/400"
    },
    {
      "id": 11,
      "courseName": "ASESORÍA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/91/300/400"
    },
    {
      "id": 12,
      "courseName": "BIOLOGÍA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/101/300/400"
    },
    {
      "id": 13,
      "courseName": "BIOLOGÍA SESIÓN 2",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/13/300/400"
    },
    {
      "id": 14,
      "courseName": "CIENCIA Y TECNOLOGÍA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/111/300/400"
    },
    {
      "id": 15,
      "courseName": "COMBINATORIA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/121/300/400"
    },
    {
      "id": 16,
      "courseName": "COMPUTACIÓN",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/131/300/400"
    },
    {
      "id": 17,
      "courseName": "COMUNICACIÓN",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/141/300/400"
    },
    {
      "id": 18,
      "courseName": "CTA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/151/300/400"
    },
    {
      "id": 19,
      "courseName": "DANZA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/161/300/400"
    },
    {
      "id": 20,
      "courseName": "ECOLOGÍA",
      "courseLevel": "Secundaria",
      "companyName": "Saco Oliveros",
      "companyLogo": "https://trismegisto.sacooliveros.edu.pe/logo.jpg",
      "courseCover": "https://picsum.photos/id/171/300/400"
    }
  ];

  return (
    <Page title="User: Cards">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {_userCards.map((course) => (
            <UserCard key={course.id} course={course} />
          ))}
        </Box>
      </Container>
    </Page>
  );
}
