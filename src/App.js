import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Setting";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className="container">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />} />
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
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
