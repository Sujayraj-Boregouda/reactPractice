import { useEffect, useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(() => {
    return parseInt(localStorage.getItem('count') || 0);
  })

  const [result, setResult] = useState('Even');

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count])

  useEffect(() => {
    setResult(count % 2 === 0 ? "Even" : "Odd" )
  }, [count])

 
  function resetCounter(){
    setCount(0);
  }

  return (
    <>
    <div className='mx-100 bg-slate-600 h-96 text-white text-center pt-96 pb-96'>
      <h1 className='text-4xl mb-10'>Count: {count}</h1>
      <h2 className='text-2xl mb-10'>Result : {result}</h2>
        <div className='inline-flex mt-5'>
          <Button className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded mr-2" onClick={() => setCount(count + 1)} disabled={count >=20}>Increse Count</Button>
          <Button className="bg-transparent hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded ml-2" onClick={() => setCount(count - 1)} disabled={count <=0}>Decrease Count</Button>
        </div>
        <div>
          <Button className="bg-black hover:bg-red-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded mt-5" onClick={resetCounter}>Reset Counter</Button>
        </div>
      </div>
    </>
  )
}

export default App
