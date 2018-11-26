import React,{ Component } from 'react'


import Ul from '@c/commons/ul'
import SmallLi from '@c/commons/smallLi'
import LoadMore from '@c/commons/loadmore'
import Footer from '@c/commons/footer'
import scroll from 'better-scroll'

import axios from 'axios';

class FontContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            recommends: [],
            page:1,
        }
        this.loadMore = this.loadMore.bind(this);
        this.backTop = this.backTop.bind(this);
    }

    componentWillMount(){
        this.getSwiperList();
    }

    render(){
        // if(this.state.recommends.length <=0) return false;
        return (
            <div style={{width:'100%',height:'571px',overflow:'hidden'}} ref={el => this.scrollWrapper = el}>
                <div >
                    <Ul>
                        {this.renderItem()}
                    </Ul>
                    <LoadMore loadMore={this.loadMore}></LoadMore>
                    <Footer backTop={this.backTop}></Footer>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.scroll = new scroll(this.scrollWrapper,{
            click: true,
            mouseWheel:true,
        })
    }
   
    backTop(){
        this.scroll.scrollTo(0,0,500)
    }
    renderItem(){
        return this.state.recommends.map((recommend,index) =>{
            return (
                <SmallLi key={index}
                    {...recommend}
                >        
                </SmallLi>
            )
        })
    }
    loadMore(){
        this.getSwiperList();
    }

    async getSwiperList(){
        let result =await axios({
            url:'/cnd/API/Works',
            method:'get',
            params:{
                cate: 2,
                page: this.state.page++,
                userID: '',
                isOriginal:'', 
                pageSize: 12
            }
        }).then(res=>res);
        this.state.recommends = this.state.recommends.concat(result.data)
        this.setState({recommends:this.state.recommends});
    }
}
export default FontContainer