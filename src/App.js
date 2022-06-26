import './App.css';
import Sidebar from'./components/Sidebar'
import Feed from'./components/Feed'
import Rightbar from'./components/Rightbar'
import Navbar from'./components/Navbar'
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import AddPost from './components/AddPost';
import {useState} from "react"



function App() {

  const [mode,setMode]=useState("light")
  const darkTheme = createTheme({
  palette:{
    mode:mode
  }
})
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack direction="row"  justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed/>
          <Rightbar/>
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
