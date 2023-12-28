import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button"
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../app/globals.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function DataPreVisual() {
    return (
        <Grid container spacing={2} className="DataPreVisualStyle">
            <Grid item xs={2} />
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{mx:'auto'}} >Share</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:'center'}}>
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" sx={{mx:'auto'}}>Share</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item xs={2} />
        </Grid>
    );
}

export default DataPreVisual;