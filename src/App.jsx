import './App.css'
import NavBar from './components/NavBar/NavBar'
import { CustomTable } from './components/Table/CustomTable'

function App() {

  const data = [
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

  return (
    <>
      <NavBar />
      <CustomTable data={data}/>
    </>
  )
}

export default App
