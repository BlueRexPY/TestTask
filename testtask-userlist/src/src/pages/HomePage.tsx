import { Box, List, ListSubheader, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserListItem from "../components/UserListItem";
import { DEFAULT_API, MOCK_USER } from "../utils/consts";
import { IUser } from "../utils/types";

const HomePage = () => {
  const [userList, setuserList] = useState<IUser[]>([MOCK_USER]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        await axios
        .get<IUser[]>(DEFAULT_API + "/users/")
        .then((res) => setuserList(res.data))
        .then(() => setLoading(false));
      } catch (error) {
        //Handle service errors gracefully
        window.open(`https://stackoverflow.com/search?q=`+error, "_blank")
      }
    };
    fetch();
  }, []);

  return (
    <div className="wrapper">
      <Box
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        <List
          subheader={<ListSubheader component="div">Users list</ListSubheader>}
        >
          {loading ? (
            <Skeleton />
          ) : (
            userList.map((item) => {
              return <UserListItem name={item.name} id={item.id} />;
            })
          )}
        </List>
      </Box>
    </div>
  );
};

export default HomePage;
