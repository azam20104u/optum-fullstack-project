import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateDoctor from "./component/CreateDoctor.js";
import GetDoctor from "./component/GetDoctor.js";
import GetDoctors from "./component/GetDoctors.js";
import UpdateDoctor from "./component/UpdateDoctor.js";
import DeleteDoctor from "./component/DeleteDoctor.js";
import HeaderComponent from "./component/HeaderComponent.js";
import FooterComponent from "./component/FooterComponent.js";

function App() {
  return (
    // <div className="App">
    //   <CreateDoctor />
    //   <GetDoctor />
    //   <GetDoctors />
    //   <UpdateDoctor />
    //   <DeleteDoctor />
    // </div>
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" Component={GetDoctors}></Route>
            {/* <Route exact path="/home" Component={GetDoctors}></Route> */}
            <Route exact path="/create-doctor" Component={CreateDoctor}></Route>
            <Route exact path="/update-doctor/:id" Component={CreateDoctor}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
