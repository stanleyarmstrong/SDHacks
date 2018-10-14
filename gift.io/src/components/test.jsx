import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class HelloWorld extends Component {
   constructor(props) {
      super(props);
      this.state = { 
	 images: [],
      }
}	   

componentDidMount() {
   fetch('http://api.macys.com/v4/catalog/search?searchphrase=adidas&show=product&sortorderby=PRICE_ASCENDING',
	   {method: "GET",
         headers: {
   	    "x-macys-webservice-client-id": "h4ckathon",
   	    "accept": "application/json"
	 }
	 })
   .then(results => {
      return results.json();
   }).then(data => {
      let images = data.results.map((pic) => {
         return(
	   <div key={pic.searchresultgroups}>
	      <h1>
		 {pic.products.summary.brand}
	      </h1>
	   </div>
	 )
      })
      this.setState({images: images});
      console.log("state", this.state.images);
      })
}

   render() {
      return (
	 <div className="container2">
	      <div className="container1">
	         {this.state.images}
	      </div>
	 </div>
      )
   }
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
