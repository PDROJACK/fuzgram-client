import { Grid, ImageList, ImageListItem, ImageListItemBar, styled } from '@mui/material'
import React from 'react'

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    borderRadius: "50%",
    height: "100",
    width: "100"
});

type Post = {
    url: string,
    caption: string,
    thumbnail: string,
    content: string
}

const postData: Post[] = 
[
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    },
    {
        url: "https://via.placeholder.com/150",
        caption: "Lorem ipsem hehe haha",
        thumbnail: "https://via.placeholder.com/150",
        content: "Lorem ipsem hehe haha"
    }
]

const Posts = () => {
    return (
        <Grid lg={8} md={10} sm={10} xs={12}>
            <ImageList cols={3}>
                {/* <ImageListItem key="Subheader" cols={3}>
                </ImageListItem> */}
                {postData.map((item) => (
                    <ImageListItem key={item.thumbnail}>
                    <img
                        src={`${item.thumbnail}?w=150&fit=crop&auto=format`}
                        srcSet={`${item.thumbnail}?w=150&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.caption}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.caption}
                    />
                </ImageListItem>
                ))}
            </ImageList>
        </Grid>
    )
}

export default Posts;