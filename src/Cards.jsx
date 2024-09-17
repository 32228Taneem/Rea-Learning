import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';  // Import Grid for layout

export default function Cards() {
  return (
    <Grid container spacing={2} sx={{ padding: 2 }} mt={10}>
      {/* First Card */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ height: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://rare-gallery.com/mocahbig/1356706-Doraemon-HD-Wallpaper.jpg"
            alt="Doremon"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Doremon
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Doraemon is a fictional character in the Japanese manga and anime series of the same name created by Fujiko F. Fujio.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ height: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQOQ8W5O8O0k--oUhagfZ6Bfk8dhjPSZ9U_0t7Ffv-LHi5Gtl9Dr82VUTnSkhFxb72chUhSJyfDVq0jykrijaaU02ZEDyFctQsPgEIScw"
            alt="Nobi Nobita"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Nobi Nobita
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Nobita is a preteen boy who gets help from Doraemon, a male robotic earless cat from the 22nd century.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ height: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://www.syfy.com/sites/syfy/files/2019/11/courage-the-cowardly-dog.jpg"
            alt="Courage the Cowardly Dog"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Courage the Cowardly Dog
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Courage the Cowardly Dog is an American animated black horror comedy television series created by John R. Dilworth.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ height: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://i.pinimg.com/736x/b2/48/dc/b248dca04c9152d6d67c1a6b7e4f27ce.jpg"
            alt="Shinchan "
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Shinchan 
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Shin-chan  is a Japanese manga and anime series written by Yoshito Usui. It has 56 (including the New Crayon Shin-chan series) manga volumes.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ height: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://i.pinimg.com/736x/93/33/8a/93338a4000a7293d5dab18fd24ccf5d9.jpg"
            alt="Phineas and Ferb"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Phineas and Ferb
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Phineas and Ferb is one of Disney Channel's most successful animated franchises. It received high viewership in the United States on cable television 
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ height: 400 }}>
          <CardMedia
            component="img"
            height="200"
            image="https://i.pinimg.com/736x/62/2f/50/622f50678b6ad608417f706243c25000.jpg"
            alt="Mr. Bean"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Mr. Bean
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Mr. Bean: The Animated Series is a British animated sitcom produced by Tiger Aspect Productions in association with Richard Purdum Productions and Varga Holdings.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
