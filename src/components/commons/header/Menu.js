import React , {Component} from 'react';
import {StyledMenu} from './styledComponent'


class Menu extends Component {
    state={
        menus:[
            {id:1,title:'首页'},
            {id:2,title:'作品'},
            {id:3,title:'资讯'},
            {id:4,title:'文章'},
            {id:5,title:'字体'},
        ]
    }
    render(){
        return(
            <StyledMenu>
                <div className='menu'>
                    <div className='login'>
                        <img src="http://img.cndesign.com/Content/images/tx_130.jpg" alt=""/>
                        <span>请登录</span>
                    </div>
                    <ul>
                        {
                            this.state.menus.map(menu => {
                                return (
                                    <li key={menu.id}>
                                        <span></span>
                                        {menu.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h1 className='register'>
                        注册
                    </h1>
                </div>
            </StyledMenu>
        )
    }
}

export default Menu