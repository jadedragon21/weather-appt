import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://bedfordny.gov/wp-content/uploads/2018/07/sunshine-sun-clip-art-with-transparent-background-free-free-clipart-sun-2361_2358-2.png"
          title="Contemplative Reptile"
        />
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="h2">
         
          <li>Monday</li>   
            100°                        
          </Typography>
          
          <Typography variant="body2" color="textSecondary" component="p">
           Sunny with a chance of meatballs
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
