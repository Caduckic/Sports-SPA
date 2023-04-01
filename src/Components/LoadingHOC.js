import React, { Component } from "react";

/*  
  This component is used to wrap around components that would most likely have a load time in real use, 
  it is used by at least 2 other components (MerchItem and UserInfo),
  it is outside at the top level due to it's potential use by any component
*/
const LoadingHOC = (OriginalComponent) => {
  return class extends Component {
    state = { isLoading: true }

    componentDidMount() {
      setTimeout(() => 
        this.setState({ isLoading: false }),
        (Math.random() * 700) + 300)
    }

    render() {
      if (this.state.isLoading) {
        console.log("loading")
        return (
          <div className="Loader">
            <div className="LoaderCircle"></div>
          </div>
        )
      }
      return (
        <OriginalComponent {...this.props}/>
      )
    }
  }
}

export default LoadingHOC