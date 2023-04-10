import {
  Autocomplete,
  Grid,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
  styled,
  ListItem,
  List,
  Divider,
} from "@mui/material";
import { useAppDispatch } from "../../app/hooks";
import PostModal from "./PostModal";
import { useLoaderData } from "react-router-dom";
import User from "../userinfo/User";
import React, { useState } from "react";
import {
  Image,
  YouTube,
  Videocam,
  Twitter,
  Link,
  Share,
} from "@material-ui/icons";
import SearchBarComponent from "../../components/SearchBarComponent";
import { flipModal, selectModal } from "./postSlice";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  borderRadius: "50%",
  height: "100",
  width: "100",
});

type Post = {
  uid: string;
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
};

const postData = [
  {
    _id: "6429e85c67c82e3682c18262",
    uid: "123",
    id: "17958356858517754",
    caption:
      `Joel: "Sand is overrated. It's just tiny, little rocks."\n` +
      "\n" +
      `Clementine: "I know. It's like, what's the big deal about sand?"\n` +
      "\n" +
      `Joel: "I don't know. People like it, I guess. They like the way it feels between their toes."\n` +
      "\n" +
      'Clementine: "Yeah, but you know what I like even more than sand?"\n' +
      "\n" +
      'Joel: "What?"\n' +
      "\n" +
      'Clementine: "Snow."\n' +
      "\n" +
      'Joel: "Snow?"\n' +
      "\n" +
      `Clementine: "Yeah. Snow is great. You can make snowballs, snowmen, snow forts. And when it melts, it's like everything's new again."\n` +
      "\n" +
      "#EternalSunshineOfTheSpotlessMind #Romance #Drama #ScienceFiction #Memory #Love #Relationships #JimCarrey #KateWinslet #FilmQuotes #Sand #Snow #Nostalgia #Rejuvenation #Hope #Renewal #Nature #Winter #SnowDays",
    socialUsername: "seenaliev",
    username: "pdrojack",
    media_type: "IMAGE",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.29350-15/334610161_1194164434619322_7147326841348662688_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=8I0AQ4neIEIAX-jhtxI&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBZ5YY-9Ao5k8PWb1uBHdtEz3aRy1xg2FyJO419RXRMhQ&oe=642F8C4D",
    __v: 0,
  },
  {
    _id: "6429e85c67c82e3682c18266",
    uid: "123",
    id: "17998668805668808",
    caption:
      `Jesse: "I feel like this is, uh, some dream world we're in, you know?"\n` +
      "\n" +
      `Celine: "Yeah, it's so weird. It's like our time together is just ours. It's our own creation. It must be like I'm in your dream, and you're in mine, or something."\n` +
      "\n" +
      `Jesse: "It's really beautiful. Yeah, and it's like a promise that we'll never forget each other, no matter what happens."\n` +
      "\n" +
      `Celine: "Yeah, it's the promise of what could be, and... what might happen. You know?"\n` +
      "\n" +
      `Jesse: "Yeah, and it's like, if we never meet again, if, if we never see each other again, and we're both old, and we're both married, and we're both living separate lives, you'll always know where I am. You'll always know where I am, and that I'm okay, and, and that I'm happy. And I'll always know that you're happy."\n` +
      "\n" +
      `Celine: "That's true. That's the best thing you can give someone, to let them know that they're not alone."\n` +
      "\n" +
      "#DreamWorld #Unforgettable #Promise #Beautiful #WhatCouldBe #NeverForget #AlwaysKnow #NotAlone #Connection #Love #Romance #Relationships #Eternal #Timeless #BeforeSunrise #EthanHawke #JulieDelpy #FilmQuotes",
    socialUsername: "seenaliev",
    username: "pdrojack",
    media_type: "IMAGE",
    media_url:
      "https://scontent.cdninstagram.com/v/t51.29350-15/334761167_1439854586551148_2888756674189959343_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5o9aybEn754AX-nJzXg&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAw9lVGAMPJ4-ZWzjrlZBWXUSSIfJ1lhcWGmlwiaV9Ixw&oe=642DF03A",
    __v: 0,
  },
];

const Item = ({ item, onClick }) => {
  return (
    <>
      <ListItem
        onClick={onClick}
        style={{ marginTop: 5, backgroundColor: "white", fontSize: 5 }}
        alignItems="flex-start"
      >
        <ListItemAvatar style={{ margin: "0px" }}>
          {item.media_type === "IMAGE" ||
          item.media_type === "CAROUSEL_ALBUM" ? (
            <Image />
          ) : (
            <Videocam />
          )}
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{
                  display: "block",
                  overflowWrap: "break-word",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  width: "95%",
                }}
                fontSize={12}
                component="span"
                variant="body2"
                color="text.primary"
                // width={200}
              >
                {item.caption}
              </Typography>
            </React.Fragment>
          }
        />
        <YouTube />
        <Twitter />
        <Link />
      </ListItem>
      <Divider />
    </>
  );
};

const Posts = () => {
  const dispatch = useAppDispatch();
  // const data: any = useLoaderData();

  const [selectedPost, setSelectedPost] = useState<null | Post>(null);

  // console.log(data)

  return (
    <Grid
      style={{ backgroundColor: "#EFEBE0" }}
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
    >
      <Grid container lg={8} md={8} sm={11} xs={11}>
        <User />
      </Grid>

      {/* Autocomplete search */}
      <Grid container lg={8} md={8} sm={11} xs={11}>
        <SearchBarComponent />
      </Grid>

      <Grid
        lg={8}
        md={8}
        sm={11}
        xs={11}
        alignContent={"center"}
        justifyContent="center"
      >
        <List sx={{ width: "100%" }}>
          {postData.map((item) => (
            <Item
              item={item}
              onClick={() => {
                setSelectedPost(item);
                dispatch(flipModal());
              }}
            />
          ))}
        </List>
      </Grid>

      <Typography margin={1} variant="body2">
        By Fuzgram
      </Typography>

      <Grid lg={12}>
        <PostModal post={selectedPost} />
      </Grid>
    </Grid>
  );
};

export default Posts;
