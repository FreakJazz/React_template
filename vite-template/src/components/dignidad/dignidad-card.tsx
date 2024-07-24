/**
 * @file HomeModule.tsx
 * @description This component displays a process. It fetches the processes based on the current type and displays them as clickable cards. If no items are found, it shows a "No Data Found" message.
 * @author Jazmin Rodriguez
 */

import React, { FC, useState, useEffect, useCallback } from 'react';
import _ from 'lodash';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Process } from '../../types/process';
import { useMediaQuery, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Loading from '../../layouts/loading/Loading';
import { getDignidad } from '../../services/dignidad';
import { useDispatch, useSelector } from "react-redux";
import { NoFound } from '../../layouts/noFound/no-found';
import { dignidadItemAction } from "../../slices/dignidad";
import { Dignidad } from '../../types/dignidad';
import { Link as RouterLink } from 'react-router-dom';
import { RootState, AppDispatch } from '../../store';
import { processItemAction } from "../../slices/process";

/**
 * ProcessCard
 *
 * This component displays a processes.
 * It fetches the processes based on the current type and displays them as clickable cards.
 * If no items are found, it shows a "No Data Found" message.
 *
 * @returns {JSX.Element} The rendered component.
 */

export const DignidadCard: FC = () => {
    const isMd = useMediaQuery('(min-width: 960px)');
    const dispatch = useDispatch<AppDispatch>();
    const getProcess = useSelector((state: RootState) => state.process.process);
    const [isLoading, setIsLoading] = useState(true);
    const [dignidad, setDignidad] = useState<Dignidad[]>([]);

    const populateDignidades = useCallback(async () => {
    // Verifica si getProcess está definido y tiene un codigoProceso válido
    if (!getProcess || typeof getProcess.codigoProceso !== 'number') {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const data = await getDignidad(getProcess.codigoProceso);
      setDignidad(data.data);
    } catch (error) {
      console.error('Error fetching dignidades:', error);
    } finally {
      setIsLoading(false);
    }
  }, [getProcess]);

  const handleCardClick = (item: Dignidad) => {
    dispatch(dignidadItemAction(item));
  };

  useEffect(() => {
    populateDignidades();
  }, [populateDignidades]);

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
            {_.isEmpty(dignidad) ? (
              <NoFound />
            ) : (
                dignidad.map((item) => (
                <Grid
                  item
                  sm={4}
                  xs={12}
                  key={item.codigoDignidad}
                >
                    <Card 
                     onClick={() => handleCardClick(item)}
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
                        display="inline-flex"
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
                            src={!item.imagenDignidad ? '/assets/genericImage.jpg' : `${item.imagenDignidad}.png`}
                            alt={item.imagenDignidad}
                            width={isMd ? '100px' : '50px'}
                            height='auto'
                          />
                        </div>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            color="text.primary"
                            variant="h6"
                          >
                            {item.nombreDignidad}
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
