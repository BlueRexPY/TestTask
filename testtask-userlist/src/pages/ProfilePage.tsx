import {
  Button,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../utils/types";
import axios from "axios";
import { DEFAULT_API, HOME_ROUTE, MOCK_USER } from "../utils/consts";

const ProfilePage = () => {
  const [user, setUser] = useState<IUser>(MOCK_USER);
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      await axios
        .get<IUser>(DEFAULT_API + "/users/" + params.id)
        .then((res) => setUser(res.data))
        .then(() => setLoading(false));
    };
    fetch();
  }, []);

  return (
    <div className="wrapper">
      <Card
        sx={{
          width: "100%",
          height: "auto",
          maxWidth: 460,
          bgcolor: "background.paper",
        }}
      >
        <CardContent>
          <Typography variant="h2" gutterBottom>
            {loading ? <Skeleton /> : user.name}
          </Typography>
          <Typography variant="h5">
            {loading ? <Skeleton /> : user.email}
          </Typography>
          <Typography variant="h5">
            {loading ? <Skeleton /> : user.phone}
          </Typography>
          <Typography variant="h5">
            {loading ? <Skeleton /> : user.website}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => navigate(HOME_ROUTE)}>Back</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProfilePage;
