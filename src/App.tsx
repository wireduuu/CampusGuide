import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-full h-screen flex flex-col items-center justify-center bg-green-600'>
      <div className='flex gap-4'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='w-24 h-24' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='w-24 h-24 animate-spin-slow' alt='React logo' />
        </a>
      </div>
      <h1 className='text-4xl text-white font-bold my-8'>Vite + React + TailwindCSS</h1>
      <div className='text-center'>
        <button
          className='bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-100 transition'
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </main>
  )
}

export default App
