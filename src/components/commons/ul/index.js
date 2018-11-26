import React ,{ Component } from 'react';

class Ul extends Component{
    render(){
        return(
            <ul className='UL' style={{
                width:'100%',padding:'10px',
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'space-between'
            }}>
                {this.props.children}
            </ul>
        )
    }
}

export default Ul