import { useRoutes, BrowserRouter } from 'react-router-dom'
import Header from '../../components/Header/header'
import Home from '../Home'
import Footer from '../../components/Footer'
import LastEntries from '../LastEntries'
import LastDepartures from '../LastDepartures'
import Tools from '../Tools'
import Agrochemical from '../Agrochemical'
import AgrochemicalEntries from '../AgroEntries'
import AgrochemicalExits from '../AgroExits'
import ProductsLocalStorageProvider from '../../context'
import ProductsFromDbProvider from '../../context'
import ToolsEntries from '../ToolsEntries'
import ToolsExits from '../ToolExits'
import './App.css'
import AgroDepartures from '../ToolsDepartures'

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/last-entries', element: <LastEntries /> },
    { path: '/last-departures', element: <LastDepartures /> },
    // { path: '/tools', element: <Tools /> },
    // {
    //   path: '/agrochemical',
    //   element: <Agrochemical />,
    // },
    { path: 'agrochemical/entries', element: <AgrochemicalEntries /> },
    { path: 'agrochemical/exits', element: <AgrochemicalExits /> },
    { path: 'tools/entries', element: <ToolsEntries /> },

    { path: 'tools/exits', element: <ToolsExits /> },

    // { path: "/*", element: <NotFound /> },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
      <ProductsFromDbProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </ProductsFromDbProvider>
    </BrowserRouter>
  )
}

export default App
