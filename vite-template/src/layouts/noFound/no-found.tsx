/**
 * @file NoFound.tsx
 * @description This component displays a message indicating that no data is available. It is styled to be centered both vertically and horizontally within its container.
 * @author Jazmin Rodriguez
 */

import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

/**
 * NoFound
 *
 * This component displays a message indicating that no data is available.
 * It uses Material-UI components to create a centered layout with a divider
 * and a message.
 *
 * @returns {JSX.Element} The rendered component.
 */

export const NoFound: React.FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '20vh',
                width: '100%'
            }}>
            <Divider sx={{ width: '100%', mb: 2 }} />
            <Typography variant="h6">
                NO EXISTEN DATOS
            </Typography>
        </Box>
    );
};

