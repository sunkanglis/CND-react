import React , {Component} from 'react';
import { StyledHeader } from "./styledComponent";
import Menu from './Menu'

class Header extends Component {
    state = {
        menuIsShow:false,
        className:'left-menu'
    }
    render(){
        return(
            <StyledHeader>
                <div style={{width:'2.2216rem',height:'100%'}}>
                    <i className={this.state.className} onClick={()=>this.changeState()}>
                    </i>
                </div>
                <div><img src="http://m.cndesign.com/assets/img/m.logo.png" alt=""/></div>
                
                <div style={{width:'2.2216rem',height:'100%'}}>
                    <i className="right-one"></i>
                    <i className="right-two"></i>
                </div>
                {this.state.menuIsShow && <Menu />}
            </StyledHeader>
        )
    }
    changeState(){
        if(this.state.menuIsShow === false){
            this.setState({menuIsShow:!this.state.menuIsShow,className:'left-quiet'})
        }else{
            this.setState({ menuIsShow:!this.state.menuIsShow,className:'left-menu'})
        }
    }
}
export default Header