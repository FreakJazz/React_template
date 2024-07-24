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
import { useMediaQuery, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import Loading from '../../layouts/loading/Loading';
import { getProcess } from '../../services/process';
import { NoFound } from '../../layouts/noFound/no-found';
import { useDispatch, useSelector } from "react-redux";
import { Process } from '../../types/process';
import { processItemAction } from "../../slices/process";
import { AppDispatch } from '../../store';
import { Link as RouterLink } from 'react-router-dom';

/**
 * ProcessCard
 *
 * This component displays a processes.
 * It fetches the processes based on the current type and displays them as clickable cards.
 * If no items are found, it shows a "No Data Found" message.
 *
 * @returns {JSX.Element} The rendered component.
 */

export const ProcessCard: FC = () => {
    const isMd = useMediaQuery('(min-width: 960px)');
    const [isLoading, setIsLoading] = useState(true);
    const [process, setProcess] = useState<Process[]>([]);
    const dispatch = useDispatch<AppDispatch>();

    const populateModules = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getProcess();
      setProcess(data.data);
    } catch (error) {
      console.error('Error fetching modules:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCardClick = (item: Process) => {
    dispatch(processItemAction(item));
  };

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
            {_.isEmpty(process) ? (
              <NoFound />
            ) : (
              process.map((item) => (
                <Grid
                  item
                  sm={4}
                  xs={12}
                  key={item.codigoProceso}
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
                        component={RouterLink}
                        to = 'dignidades'
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
                            src={!item.imagenProceso ? '/assets/genericImage.jpg' : `${item.imagenProceso}128.png`}
                            alt={item.tituloProceso}
                            width={isMd ? '200px' : '100px'}
                            height='auto'
                          />
                        </div>
                        <Box sx={{ flexGrow: 1 }}>
                          <Typography
                            color="text.primary"
                            variant="h6"
                          >
                            {item.tituloProceso}
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
