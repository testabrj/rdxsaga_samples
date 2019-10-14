import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import  Link  from '@material-ui/core/Link';
const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      margin:50
    },
    media: {
      height: 140,
    },
  });
const BookCard = (props) => {

    const classes = useStyles();
    const book = props.book;
    let book_name = book.preview_url.split("/");
    book_name = book_name[book_name.length-1];

    return ( <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={book.thumbnail_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {book_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              These books are available through open book API
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href={book.info_url} target='_blank'>Info</Link>
          </Button>
          <Button size="small" color="primary">
            <Link href={book.preview_url} target='_blank' >Preview</Link>
          </Button>
        </CardActions>
      </Card> );
}
 
export default BookCard;