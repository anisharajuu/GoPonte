
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { UserProvider } from './UserContext';
import routes from './routes/Routes';
import { BusinessProvider } from './BusinessContext';

function App() {
  return (
    <div className="max-w-[100%] mx-auto App">
      <BusinessProvider>
        <UserProvider>
          <RouterProvider router={routes}>

          </RouterProvider>
        </UserProvider>
      </BusinessProvider>
    </div>
  );
}

export default App;
