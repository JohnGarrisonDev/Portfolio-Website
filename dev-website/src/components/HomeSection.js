import React, {Component} from 'react';
  

const homeSectionStyle = {
    textAlign:'center'

}

class HomeSection extends Component{
    render(){
        return (
            <div className="HomeSection">
                <h1 style={homeSectionStyle}>
                    Hi I'm John and I write code.
                </h1>
            </div>
          );
          
        }
}

export default HomeSection;
