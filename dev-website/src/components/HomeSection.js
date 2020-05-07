import React, {Component} from 'react';
  

const homeSectionStyle = {
    //position:'absolute',

}

class HomeSection extends Component{
    render(){
        return (
            <div className="HomeSection">
                <h1 style={{homeSectionStyle}}>
                    Hi im John and I write code.
                </h1>
            </div>
          );
          
        }
}

export default HomeSection;
