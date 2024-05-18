
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './UserContext';
import routes from './routes/Routes';

function App() {
  return (
    <div className="max-w-[100%] mx-auto App">
      <UserProvider>
        <RouterProvider router={routes}>

        </RouterProvider>
      </UserProvider>
    </div>
  );
}

export default App;
