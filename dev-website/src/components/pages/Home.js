import React, {Component} from 'react';
import '../../styles/Home.css'
  

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
                THIS IS A TEST
            </div>
          );
          
        }
}

export default HomeSection;
