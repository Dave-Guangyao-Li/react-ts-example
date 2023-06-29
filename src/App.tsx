// import { useState } from 'react'
import ColorInfo from './ColorInfo'

function App() {
  const colorData = [
    { title: 'Primary', code: '#E15E8F' },
    { title: 'Secondary', code: '#9F5EE1' },
    { title: 'Subtext', code: '#5EA2E1' },
    // Add more color data as needed
  ]
  return (
    <>
      <div className='container'>
        <div className='component-title'>
          <span>Colors</span>
        </div>
        <div className='contents'>
          {colorData.map((color, index) => (
            <ColorInfo key={index} title={color.title} code={color.code} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
