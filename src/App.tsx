import React from 'react';
import './App.css';
import Example from './component/Example';
import Example02 from './component/Example02';
import Example03 from './component/Example03';

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

  console.log(nullish);



  return (
    <div className="App">
      <h1>
        TypeScript
      </h1>
      <h2>{str}</h2>
      <h2>{num}</h2>
      <h2>{definedStr}</h2>
      <h2>{nullStr}</h2>

      <Example />
      <Example02 />
      <Example03 />
    </div>
  );
}

export default App;
