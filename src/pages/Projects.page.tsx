import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import projects from './projects.json';
import { convertProjectStateDate } from '../utils/convertProjectStateDate';
import { useEffect, useState } from 'react';

export function Projects() {
    const [projectsPurchaseState, setProjectPurchaseState] = useState<
        { id: string; isPurchased: boolean }[]
    >([]);
    const handlePurchaseClick = (id: string) => {
        const oldState = projectsPurchaseState.filter(
            (project) => project.id !== id,
        );
        // TODO: I can prevent this loop if things gets dirty since it will loop again. but it is more readable
        const project = projectsPurchaseState.find(
            (project) => project.id === id,
        );

        setProjectPurchaseState([
            ...oldState,
            { id, isPurchased: !project!.isPurchased },
        ]);
    };

    // Initialize the page
    useEffect(() => {
        projects.sort((project1, project2) => {
            if (project1.start_date > project2.start_date) {
                return -1;
            }
            if (project1.start_date < project2.start_date) {
                return 1;
            }
            return 0;
        });
        setProjectPurchaseState(
            projects.map(({ id }) => {
                return { id, isPurchased: false };
            }),
        );
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            <Stack rowGap={2}>
                <Typography variant="h3" sx={{ fontWeight: 900 }}>
                    Treeconomy - {'{Application Name}'}
                </Typography>
                <Typography>Project List</Typography>
                <Grid container spacing={2}>
                    {projects.map((project, index) => {
                        const projectPurchaseState =
                            projectsPurchaseState.find(
                                (projectPurchaseState) =>
                                    projectPurchaseState.id ===
                                    project.id,
                            );

                        return (
                            <Grid item xs={12} md={3}>
                                <Card key={index}>
                                    <CardMedia
                                        component="img"
                                        alt={project.name}
                                        sx={{
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        }}
                                        image={project.image}
                                    />
                                    <CardContent>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                justifyContent:
                                                    'space-between',
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 900,
                                                }}
                                            >
                                                {project.name}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    textAlign:
                                                        'right',
                                                }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontWeight: 900,
                                                    }}
                                                >
                                                    {
                                                        project.available_credits
                                                    }{' '}
                                                    credits
                                                </Typography>
                                                <Typography variant="body2">
                                                    {convertProjectStateDate(
                                                        project.start_date,
                                                    )}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color={
                                                projectPurchaseState?.isPurchased
                                                    ? 'error'
                                                    : 'primary'
                                            }
                                            onClick={() =>
                                                handlePurchaseClick(
                                                    project.id,
                                                )
                                            }
                                            sx={{ borderRadius: 100 }}
                                        >
                                            purchase
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Stack>
        </Box>
    );
}
