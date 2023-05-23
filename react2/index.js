const { useState, useEffect } = React;

function App() {

  const [ b, setb ] = useState([',a', 'b', 'c', ',a', 'b', 'c'])

  return (

    <div>
      <h1>reac tdnv</h1>
      {

        b.map(a => {

          return (

            <h4>{a}</h4>

          )

        })
      }
    </div>

  )

}

ReactDOM.render(<App />, document.getElementById("root"));