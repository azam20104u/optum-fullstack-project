import "./App.css";
import CreateDoctor from "./component/CreateDoctor.js";
import GetDoctor from "./component/GetDoctor.js";
import GetDoctors from "./component/GetDoctors.js";
import UpdateDoctor from "./component/UpdateDoctor.js";
import DeleteDoctor from "./component/DeleteDoctor.js";

function App() {
  return (
    <div className="App">
      <CreateDoctor />
      <GetDoctor />
      <GetDoctors />
      <UpdateDoctor />
      <DeleteDoctor />
    </div>
  );
}

export default App;
