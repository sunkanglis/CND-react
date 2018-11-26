import React,{ Component } from 'react'

import Ul from '@c/commons/ul'
import mainWrapper from '@c/HOC/mainWrapper'
import SmallLi from '@c/commons/smallLi'
import axios from 'axios';

class FontContainer extends Component {
    constructor(props){
        super(props)
        this.state ={
            recommends: [],
            page:1,
        }
       
    }
    componentWillMount(){
        this.getSwiperList();
    }
    render(){
        return(
            <Ul>
                {this.renderItem()}
            </Ul>
        )
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
export default mainWrapper(FontContainer)