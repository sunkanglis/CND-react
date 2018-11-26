import React,{Component} from 'react';
import {StyledFooter} from './styledComponent'

class Footer extends Component{
    render(){
        let { backTop } = this.props;
        return(
            <StyledFooter>
                <div className='footnav'>
                    <i> <span> 触屏版&nbsp;&nbsp;</span>|&nbsp;&nbsp;电脑版</i>
                    <i onClick={backTop}>⇪ 回顶部</i>
                </div>
                <p>Copyright© 2006 - 2017 CNDESIGN</p>
                <div style={{height:'80px'}}></div> 
            </StyledFooter>
        )
    }
    backtop(){
      console.log(this,'backtop')
    }
}
export default Footer