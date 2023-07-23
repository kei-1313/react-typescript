import React from 'react'

function Example() {
  let stryOrNum: string | number | boolean = 'Hello';

  const arry1: number[] = [1, 2, 3];
  const arry3: Array<number> = [1, 2, 3];

  type Person = { name: string, age?: number }
  const obj1: Person = { name: 'kudo' };

  const users: Person[] = [
    { name: 'edogawa' },
    { name: 'tuburaya', age: 10 },
    { name: 'miyano' }
  ]
  return (
    <div>
      <div>{stryOrNum}</div>
      <ul>
        {arry1.map((item, index) => {
          return (
            <li key={index}>
              <p>{item}</p>
            </li>
          )
        })}
      </ul>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={index}>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </li>
          )
        })}
      </ul>
      <p>{obj1.name}</p>
    </div>
  )
}

export default Example