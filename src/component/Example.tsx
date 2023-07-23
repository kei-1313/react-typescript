import React from 'react'

function Example() {
  let stryOrNum: string | number | boolean = 'Hello';

  return (
    <div>
      <div>{stryOrNum}</div>
    </div>
  )
}

export default Example