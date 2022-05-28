import "./App.css"
import Header from "./components/Header/Header"
import Profile from "./components/Profile/Profile"
import Sidebar from "./components/Sidebar/Sidebar"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Setting"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DialogsContainer from "./components/Dialogs/DialogsContainer"

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/profile" element={ <Profile />}  />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
