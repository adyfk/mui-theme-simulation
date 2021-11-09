import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import filesSchema from "@/clone-mui/files-schema.json";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
const ThemeEditor = dynamic(() => import("./content/theme-editor"));

const drawerWidth = 240;

const Main: React.FC = ({ children }) => {
  const [openEditor, setOpenEditor] = useState(false);
  const router = useRouter();
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <ThemeEditor open={openEditor} setOpen={setOpenEditor} />
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MUI Theme Simulation
            <Typography sx={{ display: "block" }} variant="caption" noWrap component="a">
              {`@mui => 5.0.6`}
            </Typography>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <Button color="inherit" variant="outlined" onClick={() => setOpenEditor(true)}>
              Theme Editor
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {filesSchema.map(({ folder }) => {
              return (
                <ListItem onClick={() => router.push(`/component/${folder}`)} button key={folder}>
                  <ListItemText primary={folder} />
                </ListItem>
              );
            })}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Main;
