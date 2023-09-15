import { useRoutes, BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header/header'
import Home from '../Home'
import Footer from '../../components/Footer'
import LastEntries from '../LastEntries'
import LastDepartures from '../LastDepartures'
import Tools from '../Tools'
import Agrochemical from '../Agrochemical'
import ProductsLocalStorageProvider from '../../context'
import './App.css'

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/last-entries', element: <LastEntries /> },
    { path: '/last-departures', element: <LastDepartures /> },
    { path: '/tools', element: <Tools /> },
    { path: '/agrochemical', element: <Agrochemical /> },
    // { path: "/*", element: <NotFound /> },
  ])
  return routes
}
function App() {
  return (
    <ProductsLocalStorageProvider>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </ProductsLocalStorageProvider>
  )
}

export default App
