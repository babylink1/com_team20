import "./index.scss";
import {
  Card,
  CardContent,
  CardActions,
  Avatar,
  Button,
  ImageList,
  ImageListItem,
  Typography,
  Container,
  Stack,
  AvatarGroup,
  ImageListItemBar,
  Box,
  Rating,
} from "@mui/material";
import {
  MoreHoriz as MoreHorizIcon,
  PinDrop as PinDropIcon,
} from "@mui/icons-material";

import { useState } from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
    author: "swabdesign",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
    author: "Pavel Nekoranec",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
    author: "Charles Deluvio",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
    author: "Christian Mackie",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
    author: "Darren Richardson",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
    author: "Taylor Simpson",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
    author: "Ben Kolde",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
    author: "Philipp Berndt",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
    author: "Jen P.",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
    author: "Douglas Sheppard",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
    author: "Fi Bell",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
    author: "Hutomo Abrianto",
  },
];

const SelectionMain = () => {
  const btnMore = () => {};
  const [ratingVal, setRatingVal] = useState(3);

  return (
    <div className="events-selection-wrap">
      <Card sx={{ minWidth: 500 }}>
        <CardContent>
          <div className="selection-top">
            <div className="left">
              <Avatar alt="Avatar" />
              @LLj &nbsp;
              <span className="date">2023-10-6 22:58:52</span>
              &emsp;
              <Rating
                name="simple-controlled"
                value={ratingVal}
                onChange={(event, newValue) => {
                  setRatingVal(newValue);
                }}
              />
            </div>

            <div className="right">
              <Button variant="contained" color="primary" size="small">
                Apply
              </Button>
              &nbsp;
            </div>
          </div>
          <div className="selection-title">
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ flex: 1 }} variant="h5">
                New Events Theme
              </Typography>
              <Container
                sx={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PinDropIcon color="warning" />
                <Typography variant="subtitle1">New City</Typography>
              </Container>
            </Container>
          </div>
          <div className="main-content">
            <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
              <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar position="below" title={item.author} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="\src\assets\imgs\1.jpg" />
            <Avatar alt="Travis Howard" src="\src\assets\imgs\2.jpg" />
            <Avatar alt="Cindy Baker" src="\src\assets\imgs\3.jpg" />
          </AvatarGroup>
        </CardActions>
      </Card>
      <Card sx={{ minWidth: 500, marginTop: "20px" }}>
        <CardContent>
          <div className="selection-top">
            <div className="left">
              <Avatar alt="Avatar" />
              @LLj &nbsp;
              <span className="date">2023-10-6 22:58:52</span>
              &emsp;
              <Rating
                name="simple-controlled"
                value={ratingVal}
                onChange={(event, newValue) => {
                  setRatingVal(newValue);
                }}
              />
            </div>

            <div className="right">
              <Button variant="contained" color="primary" size="small">
                Apply
              </Button>
              &nbsp;
            </div>
          </div>
          <div className="selection-title">
            <Container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ flex: 1 }} variant="h5">
                New Events Theme
              </Typography>
              <Container
                sx={{
                  flex: "0 0 150px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <PinDropIcon color="warning" />
                <Typography variant="subtitle1">New City</Typography>
              </Container>
            </Container>
          </div>
          <div className="main-content">
            <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
              <ImageList variant="masonry" cols={3} gap={8}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar position="below" title={item.author} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </div>
        </CardContent>
        <CardActions sx={{ justifyContent: "end" }}>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src="\src\assets\imgs\1.jpg" />
            <Avatar alt="Travis Howard" src="\src\assets\imgs\2.jpg" />
            <Avatar alt="Cindy Baker" src="\src\assets\imgs\3.jpg" />
          </AvatarGroup>
        </CardActions>
      </Card>
    </div>
  );
};

export default SelectionMain;
