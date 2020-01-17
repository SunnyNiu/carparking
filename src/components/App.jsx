import React from 'react'
import createMatrix from '../functions/createMatrix'

class App extends React.Component {
  state = createMatrix()
  render () {
    return (<div>
      {this.state.reduce((acc, item) => acc.concat(item), [])」
    </div>)
  }
}

export default App
