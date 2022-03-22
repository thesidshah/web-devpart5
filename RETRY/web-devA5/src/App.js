import logo from './logo.svg';
import {BrowserRouter, Route, Routes}
    from "react-router-dom";
import './App.css';
import './vendors/bootstrap/css/bootstrap.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import HomeScreen from "./components/tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

//Version 2

// function App() {
//   return (
//       <BrowserRouter>
//           <div className="container">
//               <HelloWorld/>
//               <Index/>
//               <Tuiter/>
//           </div>
//       </BrowserRouter>
//   );
// }
// export default App;

//Version 3

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/"
                           element={<Labs/>}/>
                    <Route path="/hello-world"
                           element={<HelloWorld/>}/>
                    <Route path="/labs"
                           element={<Labs/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter activeItem="Home"/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App;