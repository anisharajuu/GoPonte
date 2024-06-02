
import './App.css';
// import { RouterProvider } from 'react-router-dom';
// import routes from './routes/Routes';
import { Routes, Route } from 'react-router-dom';
import Main from './layout/Main';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';



function App() {
  return (
    <Routes>
      <Route path ="/" element = {<Main />}>
        <div className="max-w-[100%] mx-auto App">
            <RouterProvider router={routes}/>
        </div>
      </Route>
    </Routes>
    // <div className="max-w-[100%] mx-auto App">
    //       <RouterProvider router={routes}/>
    // </div>
  );
}

export default App;
