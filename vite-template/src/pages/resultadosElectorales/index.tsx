
import Box from '@mui/material/Box';
import { Seo } from '../../components/seo';
import { usePageView } from '../../hooks/use-page-view';
import { ProcessCard } from '../../components/process/process-card';

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
          <ProcessCard />
        </Box>
      </Box>
    </>
  );
};

export default Page;
