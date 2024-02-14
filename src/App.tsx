import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './app/router'
import { Provider } from 'react-redux'
import { store } from './app/store/store'

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  )
}

export default App
