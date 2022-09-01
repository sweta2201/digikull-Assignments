import React from 'react'
import './App.css'

import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      newUser : '',
      val : ''
    }
  }



  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => this.setState({ users: res.data }))
      .then(err => err)

  }

  handleChange = (e) => {
    this.setState({newUser : e.target.value})
    this.setState({val : e.target.value})
  }

  handleAdd =() => {
    // console.log(this.state.users)
    axios.post('https://jsonplaceholder.typicode.com/users').then(res => {
      console.log(res)
      this.setState({users:[...this.state.users,{name:this.state.newUser}]})
    })
    this.setState({val : ''})
  }

  render() {
    console.log(this.state.users)
    return (
      <div className='App'>
        <div className='mainContainer'>
          <div className='heading'>
            <h1>Digikull Student</h1>
          </div>
          <div className='inputContainer'>
            <h2>Hello User</h2>
            <input value={this.state.val} onChange={this.handleChange} />
            <button onClick={this.handleAdd}>Add</button>
          </div>
          <div className='userContainer'>
               <ol>
                {
                  this.state.users.map((item,ind) => {
                   return <li key={ind}>{item.name}</li>
                   })
                }
                </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
