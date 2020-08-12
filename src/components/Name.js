import React, { useState } from 'react'

const Name = () => {
  const [name, setName] = useState('kool')
  return <h1>{name}</h1>
}

export default Name
