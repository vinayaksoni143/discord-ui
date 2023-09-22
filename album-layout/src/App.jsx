import React from 'react'
import { Typography, AppBar,Button, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './style'

const cards=[1,2,3,4,5,6,7,8,9,10,11,12]

const App = () => {

    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position='relative'>
                <Toolbar>
                    <PhotoCamera  className={classes.icon} />
                    <Typography variant='h6'>Photo Album</Typography>
                </Toolbar>
            </AppBar>

            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm' >
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
                        <Typography variant='h5' align='center' color='textSecondary' paragraph>This is a photo album</Typography>
                    </Container>
                    <div>
                        <Grid container spacing={2} justifyContent='center'>
                            <Grid item>
                                <Button variant='contained' color='primary' className={classes.buttons}>See my photos</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' style={{color:'#f06c62'}} className={classes.buttons}>Secondary</Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                        {cards.map((card)=>(
                            <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
                            <Card className={classes.card} >
                                <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='Image title' />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                        Heading
        
                                    </Typography>
                                    <Typography>
                                        This is a media card
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>View</Button>
                                    <Button size='small' color='primary'>Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        
                    
                        ))}
                        </Grid>
                        
                </Container>
                <footer className={classes.footer}>
                    <Typography variant='h6' gutterBottom align='center'>Footer</Typography>
                    <Typography variant='subtitle1' align='center' color='textSecondary'>Something here</Typography>
                </footer>
            </main>
        </>
    )
}

export default App;