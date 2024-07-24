/**
 * @file HomeModule.tsx
 * @description This component displays a menu principal. It fetches the processes based on the current type and displays them as clickable cards. If no items are found, it shows a "No Data Found" message.
 * @author Jazmin Rodriguez
 */

import React, { FC, useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import { useMediaQuery, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Loading from '../../layouts/loading/Loading';
import { getModules } from '../../services/modules';
import { NoFound } from '../../layouts/noFound/no-found';
import { Modules } from '../../types/modules';
import { Link as RouterLink } from 'react-router-dom';
import { paths } from '../../paths';

/**
 * HomeModule
 *
 * This component displays a menu of ordinary processes.
 * It fetches the processes based on the current type and displays them as clickable cards.
 * If no items are found, it shows a "No Data Found" message.
 *
 * @returns {JSX.Element} The rendered component.
 */

export const HomeModule: FC = () => {
  const isMd = useMediaQuery('(min-width: 960px)');
  const [isLoading, setIsLoading] = useState(true);
  const [modules, setModules] = useState<Modules[]>([]);
  const populateModules = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getModules();
      setModules(data.data);
    } catch (error) {
      console.error('Error fetching modules:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    populateModules();
  }, [populateModules]);

  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        pt: '20px',
      }}
    >
      <Loading isLoading={isLoading} />
      <Card
        sx={{
          my: '2%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundImage: 'url("/assets/gradient-bg.svg")',
        }}
      >
        <CardContent>
          <Grid container>
            {_.isEmpty(modules) ? (
              <NoFound />
            ) : (
              modules.map((item) => (
                <Grid
                  item
                  sm={3}
                  xs={12}
                  key={item.codigoModulo}
                >
                    <Card 
                     sx={{
                      my: '2%',
                      padding: '5%',
                      transition: 'transform 0.3s, background-image 0.3s',
                      '&:hover': {
                        transform: 'scale(1.15)',
                        cursor: 'pointer',
                        opacity: 0.8,
                      },
                    }}
                    >
                      <Stack
                        component={RouterLink}
                        display="inline-flex"
                        to={item.href || '/'}
                        alignItems="center"
                        direction={{
                          xs: 'column',
                        }}
                        spacing={3}
                        sx={{
                          px: 4,
                          py: 3,
                          height: '300px',
                          textDecoration: 'none',
                        }}
                      >
                        <div>
                          <img
                            src={!item.imagenModulo ? 'assets/genericImage.jpg' : `${item.imagenModulo}64.png`}
                            alt={item.tituloModulo}
                            width={isMd ? '128px' : '64px'}
                            height='auto'
                          />
                        </div>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            color="text.primary"
                            variant="h6"
                          >
                            {item.tituloModulo}
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                </Grid>
              ))
            )}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
