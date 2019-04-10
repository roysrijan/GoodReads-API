
import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';

class About extends Component {
    constructor(props)
    {
        var a= decodeURI(window.location.search)
        .replace('?', '')
        .split('&')
        .map(param => param.split('='))
        .reduce((values, [ key, value ]) => {
          values[ key ] = value
          return values
        }, {})
        console.log(a.imgpath)
        super(props)
        this.state={
            imgpath:window.localStorage.getItem('imgpath'),
            name:window.localStorage.getItem('name'),
            rating:window.localStorage.getItem('rating'),
            desc:window.localStorage.getItem('desc')
        }
    }
  render() {
      let rating='';
      for(var i=1;i<=this.state.rating;i++){
          rating+='<span class="float-right"><i class="fa fa-star checked"></i></span>'
      }
      for(var i=this.state.rating;i<5;i++)
      {
          rating+='<span class="float-right"><i class="fa fa-star"></i></span>'
      }
    return (
        <div class="container">
        <h2 class="text-center">Bookreads User Rating Form / Comment Form</h2>
        
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-2">
                        <img src={this.state.imgpath} class="img img-rounded img-fluid"/>
                        <p class="text-secondary text-center">15 Minutes Ago</p>
                    </div>
                    <div class="col-md-10">
                        <p>
                            <a class="float-left" href="#"><strong>{this.state.name}</strong></a>
                            <span dangerouslySetInnerHTML={{ __html: rating }} />
                            
    
                       </p>
                       <div class="clearfix"></div>
                        <p>{this.state.desc}</p>
                        <p>
                            <a class="float-right btn btn-outline-primary ml-2"> <i class="fa fa-reply"></i> Review</a>
                            <a class="float-right btn text-white btn-danger"> <i class="fa fa-heart"></i> Like</a>
                       </p>
                    </div>
                </div>
                    <div class="card card-inner">
                </div>
            </div>
        </div>
        </div>
    );
  }
}

export default About;
