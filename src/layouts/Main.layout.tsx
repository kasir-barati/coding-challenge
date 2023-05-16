import { Box, BoxProps } from '@mui/material';
import { PropsWithChildren } from 'react';

export function MainLayout({
    children,
    ...boxProps
}: PropsWithChildren<BoxProps>) {
    const { sx, ...props } = boxProps;
    return (
        <Box
            {...props}
            sx={{
                justifyContent: 'center',
                textAlign: 'left',
                display: 'flex',
                padding: 13,
                ...sx,
            }}
        >
            {children}
        </Box>
    );
}
