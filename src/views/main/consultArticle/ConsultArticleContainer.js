import React, { Component } from 'react'
import { Route,Redirect,withRouter} from 'react-router-dom'
import Ul from '@c/commons/ul'
import {StyledConsultArticleTab ,StyledTabItem} from './styledComponent'


import ConsultArticleContent from './ConsultArticleContent'
import connect from '@connect'

class ConsultArticleContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            tabs:[
                {id:1,title:'资讯',route:'/consult'},
                {id:2,title:'文章',route:'/article'},
            ],
            active:this.props.location.pathname
        }
    }
    // 当二级路由切换的时候 修改状态
    componentWillReceiveProps(props,state){
        this.setState({active:props.location.pathname})
    }

    render () {
        let {match,history} = this.props;
        return (
            <div style={{width:'100%',height:'571px',overflow:'hidden'}}>
               <StyledConsultArticleTab>
                    {
                        this.state.tabs.map(tab=>{
                            return(
                                <StyledTabItem key={tab.id}
                                    active={this.state.active === `${match.path}${tab.route}`}
                                    onClick={()=>
                                    history.push(`${match.path}${tab.route}`)}
                                >{tab.title}</StyledTabItem>
                            )
                        })
                    }
                </StyledConsultArticleTab>
                <Route path={`${match.path}/consult`} exact render={
                    () => <ConsultArticleContent primaryID={3} />
                }/>
                <Route path={`${match.path}/article`} exact render={
                     () => <ConsultArticleContent primaryID={13} />
                } />
                
            </div>
        )
    }
    componentWillUnmount(){
        console.log(this.props)
    }
}

export default withRouter(connect(ConsultArticleContainer,[{name:'main'}]))