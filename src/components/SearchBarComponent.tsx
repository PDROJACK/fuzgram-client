import {
  Autocomplete,
  CircularProgress,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import api from "../app/api";
import { throttle } from "lodash";

function SearchBarComponent() {
  const [searchResults, setSearchResults] = useState([{ caption: "hello" }]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (x) => {
    setLoading(true);
    console.log(x);
    const res = await api.get("/search", {
      params: {
        keyword: x,
        username: window.location.pathname.split("/")[1],
        socialUsername: window.location.pathname.split("/")[2],
      },
    });

    if (res.data !== null) setSearchResults(res.data);

    setLoading(false);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    throttledSearch(value);
  };
  const throttledSearch = throttle(handleSearch, 1000);
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      style={{ width: "100%" }}
      loading={loading}
      options={searchResults.map((option) => option)}
      filterOptions={(x) => x}
      getOptionLabel={(x) => x.caption}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={handleChange}
          label="Asynchronous"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(props, options) => {
        return <Item item={options} />;
      }}
    />
  );
}

const Item = ({ item }) => {
  return (
    <>
      <ListItem
        style={{ marginTop: 5, backgroundColor: "white", fontSize: 5 }}
        alignItems="flex-start"
      >
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
      </ListItem>
    </>
  );
};

export default SearchBarComponent;
