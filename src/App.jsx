import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router'
import './App.css'
import AppLayout from './pages/AppLayout'
import { Home } from './pages/Home'
import { UserPage } from './pages/UserPage'
import { TaskPage } from './pages/TaskPage'
import { EventPage } from './pages/EventPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<AppLayout />}>
          <Route index element={<Home /> }/>
          <Route path="tareas" element={<TaskPage />} />
          <Route path="eventos" element={<EventPage />} />
          <Route path="usuarios" element={<UserPage />} />
        </Route>
    )
  )

    return(
      <>
        <RouterProvider router={router}/>
      </>
    )
}

export default App
