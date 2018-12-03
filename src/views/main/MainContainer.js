import React,{Component} from 'react';
import { Tabs } from 'antd-mobile';
import { StickyContainer } from 'react-sticky';
import uuid from 'uuid'

import { MainWrapper ,TabItem } from "./styledComponent";
import Header from '@c/commons/header'
import ConsultArticleContainer from './consultArticle/ConsultArticleContainer'
import HomeContainer from './home/HomeContainer'
import FontContainer from './fonttype/FontContainer'
import ProductionContainer from './production/ProductionContainer'
import {withRouter} from 'react-router-dom'

import {connect} from 'refit-connect'

class MainContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            tabs:[
                {id: uuid(), title: '首页' , component:<HomeContainer />},
                {id: uuid(),  title: <div>作品<i className='fa fa-sort-desc' style={{marginLeft:'5px'}}></i></div> ,
                    component:<ProductionContainer /> },
                {id: uuid(), title: '资讯/文章',component:<ConsultArticleContainer/> },
                {id: uuid(), title: '字体',component:<FontContainer/> },
                {id: uuid(), title: '地图',component:'字体12312' },
            ],
            page:0
        }
    }
    componentWillMount(){
        if(this.props.location.pathname !== '/main')
        this.setState({page:2})
    }

    render(){
        // console.log('render');
        return(
            <MainWrapper>
                <Header></Header>
                    <StickyContainer >
                        <Tabs tabs={this.state.tabs}
                            // initalPage={'t2'}
                            tabBarActiveTextColor='#c30413'
                            tabBarUnderlineStyle ={{borderColor:'#c30413'}}
                            swipeable = {false}
                            // prerenderingSiblingsNumber={0}
                            page={this.state.page}
                            onTabClick= {(tab,index)=>{
                                if(this.props.main.tabIndex === index ){
                                    this.props.main_actions.changePdIsShow()
                                }
                                if(index !== 2){
                                    this.props.history.push('/main')
                                }else{
                                    this.props.history.push('/main/consult')
                                }
                                this.setState({page:index})
                                this.props.main_actions.changeTabIndex(index)
                            }}
                        >
                            {this.renderTabItems()}
                        </Tabs>    
                    </StickyContainer>
            </MainWrapper>
        )
    }
    renderTabItems(){
        return this.state.tabs.map(item => {
           return(
                <TabItem key={item.id} >
                    {item.component}
                </TabItem>
           ) 
        })
    }
    
}

export default withRouter(connect(MainContainer,[{name:'main'}]))