import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import { CustomTable } from './components/Table/CustomTable'
import AppLayout from './pages/AppLayout'

function App() {

  const data1 = [
    {
      id: 1,
      title: "Nombre"
    },
    {
      id: 2,
      title: "Apellido"
    },
    {
      id: 3,
      title: "Email"
    },
  ]
  const data2 = [
    {
      id: 1,
      title: "Evento"
    },
    {
      id: 2,
      title: "Fecha"
    },
    {
      id: 3,
      title: "Lugar"
    },
  ]
  const data3 = [
    {
      id: 1,
      title: "Tarea"
    },
    {
      id: 2,
      title: "Descripcion"
    },
    {
      id: 3,
      title: "Realizada"
    },
  ]

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<AppLayout />}>
          <Route path="tareas" element={<CustomTable data={data3}/>} />
          <Route path="eventos" element={<CustomTable data={data2}/>} />
          <Route path="usuarios" element={<CustomTable data={data1}/>} />
        </Route>
    )
  )



  // return (
  //   <>
  //     <NavBar />
  //     <CustomTable data={data}/>
  //   </>
  // )

    return(
      <>
        <RouterProvider router={router}/>
      </>
    )
}

export default App
