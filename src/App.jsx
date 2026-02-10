import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import Home from './components/Home';
import ViewNotes from './components/ViewNotes';
import Todo from './components/Todo';

const router = createBrowserRouter(
  [
    {
      path : '/',
      element :
      <div >
        <Navbar />
        <Home />
      </div>
    },{
      path : '/notes',
      element :
      <div>
        <Navbar />
        <Notes />
      </div>
    },{
      path : '/notes/:id',
      element :
      <div>
        <Navbar />
        <ViewNotes />
      </div>
    },{
      path: '/todos',
      element :
      <div>
        <Navbar />
        <Todo />
      </div>
    }
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
