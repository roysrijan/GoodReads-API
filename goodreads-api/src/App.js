import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
      status:'',
      value:'',
      imgpath: ''
    }
    this.handleChange=this.handleChange.bind(this)
    this.click=this.click.bind(this)
  }

  handleChange(e){
    this.setState({
      status:'list-group-item active'
    })
    if(e.target.value.trim()==""){
      this.setState({
        value:'',
        status:''
      })
      throw ""
    }

    fetch('http://localhost:8080/book',{
    method: 'post',
    mode:'cors', 
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }, 
    body:'name='+e.target.value+'&test=1'
    
  }).then(function(response) {
    return response.json();
  })
  .then(myJson=>{if(myJson.length==0){throw "";};myJson.forEach(m=>{this.setState({value:(JSON.parse(JSON.stringify(m).replace('[','').replace(']','')))})}) ;}).catch(err=>{//alert("no book found"+err);
  this.setState({
    status:'',
    value:''
  })})
  }
  click(e){
    window.localStorage.setItem('imgpath',this.state.value.imgpath)
    window.localStorage.setItem('name',this.state.value.name)
    window.localStorage.setItem('rating',this.state.value.rating)
    window.localStorage.setItem('desc',this.state.value.description)
  }
  render() {
    return (
      <div className="App">
        <div className="container h-100 d-flex justify-content-center align-items-center">
        <form>
        <h1 className="display-3">Search, Book!</h1>
          <div className="form-row">
            <div className="col-7">
              <input type="text" className="form-control" onChange={this.handleChange} placeholder="Search Book Here" />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-2">Submit</button>
            </div>
          </div>
          <div className="form-row">
            <div className="col-7"><div className="list-group">
        <a href="/about" id="YOUR_ID" className={this.state.status} onClick={this.click}>{this.state.value.name}</a>
        
        </div></div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
