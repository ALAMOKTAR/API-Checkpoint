import UserDetails from "./UserDetails";
import axios from 'axios'
import UserList from "./Userlist";
import { Route,Routes } from "react-router";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route index element={<UserList/>}></Route>
      <Route path="/User/:id" element={<UserDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
