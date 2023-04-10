import { Button, Divider, Drawer, List, Toolbar } from "@mui/material";
import { selectUser } from "../features/userinfo/userSlice";
import { useAppSelector } from "../app/hooks";
import InstagramLogin from "./InstagramAuth";

const drawerWidth = 240;

function SideBar() {
  const user = useAppSelector(selectUser);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <List>
        {user.integrations.map((u) => {
          return <Button variant="outlined">{u.name}</Button>;
        })}
        <InstagramLogin />
      </List>
      <Divider />
    </Drawer>
  );
}

export default SideBar;
