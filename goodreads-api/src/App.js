import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={
      status:'list-group-item active',
      value:'',
      imgpath: 'https://images-na.ssl-images-amazon.com/images/I/41769C3ZE8L._SX399_BO1,204,203,200_.jpg'
    }
    this.handleChange=this.handleChange.bind(this)
    this.click=this.click.bind(this)
  }

  async handleChange(e){
    
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
  .then(myJson=>this.setState({value:(JSON.parse(JSON.stringify(myJson).replace('[','').replace(']','')))})).catch(err=>{alert("no book found")})
  }
  click(e){
    var url = "/about?imgpath=" + this.state.value.imgpath+'&name='+this.state.value.name+'&rating='+this.state.value.rating+'&desc='+this.state.value.description;
var element = document.getElementById('YOUR_ID');
element.setAttribute("href",url)
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
        <a href="#" id="YOUR_ID" className={this.state.status} onClick={this.click}>{this.state.value.name}</a>
        
        </div></div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default App;
