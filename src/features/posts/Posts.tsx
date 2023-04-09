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
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
  },
  {
    url: "https://via.placeholder.com/150",
    caption: "Lorem ipsem hehe haha",
    thumbnail: "https://via.placeholder.com/150",
    content: "Lorem ipsem hehe haha",
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
  const data: any = useLoaderData();

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
          {data.data.map((item) => (
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
