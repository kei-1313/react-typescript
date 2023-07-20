import React from 'react';
import './App.css';

function App() {
  const str: string = 'Hello';

  let num: number = 101;

  let bignum: bigint = 103n;
  console.log(bignum);

  let bool: boolean = true;

  let nullish: null = null;
  let undefinedValue: undefined = undefined;
  const nullStr: string = 'nullです';
  const definedStr: string = 'no defined';


  return (
    <div className="App">
      <h1>
        TypeScript
      </h1>
      <h2>{str}</h2>
      <h2>{num}</h2>
      <h2>{definedStr}</h2>
      <h2>{nullStr}</h2>
      {/* <h2>{bignum}</h2> */}
    </div>
  );
}

export default App;
