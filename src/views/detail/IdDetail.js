import React,{Component} from 'react'
import Header from '@c/commons/header'
import { StyledDetail } from './StyledComponent'
import scroll from 'better-scroll';
import Footer from '@c/commons/footer'
import {withRouter} from 'react-router-dom'

import urlObj from 'url'

class IdDetail extends Component {

    constructor(props){
        super(props)
        this.state={
            detail:{}
        }
    }

    render(){
        let {title,userView,data,content,pics}=this.state.detail;
        return(
            <StyledDetail>
                <Header></Header>
                <div className="author-box">
                    
                       { userView !==undefined && this.renderHeader(userView)}
                    
                    <div className="focus-box">
                        <i className='icon-focus'></i>
                    </div>
                </div>
                <div style={{height:'14.986667rem',overflow:'hidden'}} ref={el => this.scrollWrapper =el}>
                <div className="container">
                    <div className="title-box">
                        <h1 className='title'>{title}</h1>
                        { userView !==undefined && this.renderIntroBox(data)}
                    </div>
                    <div className='description'>
                        {content}
                    </div>
                    {  userView !==undefined && this.renderPics(pics)}
                    
                    <Footer backTop={()=>this.backTop()}></Footer>
                </div>
                </div>
            </StyledDetail>
        )
    }

    renderHeader(userView){
        return (
            <div className="author-info">
                <img src={userView.UserHead} alt=""/>
                <div className="info">
                    <h6>{userView.NickName}</h6>
                    <p>{userView.AddressNow.CityName}&nbsp;&nbsp;平面设计师</p>
                </div>
            </div>
        )
    }
    renderIntroBox(data){
        return(
            <div className="intro-box">
                <span className="ib_tags">原创-平面</span>
                <div className="ib_info">
                    2017-13-13
                    <i className='icon icon-liulan'></i>
                    {data.readCount}
                    <i className='icon icon-zan'></i>
                    {data.goodCount}
                    <i className='icon icon-pinlun'></i>
                    {data.replyCount}
                </div>
            </div>
        )
    }
    renderPics(pics){
        return pics.map(pic => {
            return(
                <div key={pic.picID} style={{marginTop:'.266667rem',minHeight:'300px'}}>
                    <img className='pics' src={pic.picPath} alt=""/>
                </div>
                
            )
        })

    }

    componentDidMount(){
        this.getDetail()
        this.scroll = new scroll(this.scrollWrapper,{
            click:true,
            mouseWheel:true,
        })    
    }
    componentDidUpdate(){
        this.scroll.refresh()
    }

    async getDetail(){
        let {id} = urlObj.parse(this.props.location.search, true).query;
        let result = await this.axios({
            url:'/cnd/API/Works',
            method:'get',
            params:{
               id,
               isConfirm:"false"
            }
        }).then(res=>res);
        this.setState({detail:result.data.Data});
    }
    backTop(){
        this.scroll.scrollTo(0,0,500)
    }
}
export default withRouter(IdDetail)