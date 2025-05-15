import { useRoutes } from 'react-router-dom'
import Homepage from './pages/Homepage';

function App() {
  const routes = useRoutes([
    { path: '/', element: <Homepage/> }
  ])

  return routes;
}

export default App
