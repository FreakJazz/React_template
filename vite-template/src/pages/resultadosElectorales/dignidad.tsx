
import Box from '@mui/material/Box';
import { Seo } from '../../components/seo';
import { usePageView } from '../../hooks/use-page-view';
import { DignidadCard } from '../../components/dignidad/dignidad-card';

const Page = () => {
  usePageView();

  return (
    <>
      <Seo title="Resultados electorales" />
      <Box
        component="main"
        sx={{
          display: 'grid',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50',
            py: 8,
          }}
        >
          <DignidadCard />
        </Box>
      </Box>
    </>
  );
};

export default Page;
