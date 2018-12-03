import React,{Component} from 'react'
import Header from '@c/commons/header'
import { StyledDetail } from './StyledComponent'
import scroll from 'better-scroll';
import Footer from '@c/commons/footer'
import {withRouter} from 'react-router-dom'
import urlObj from 'url'


class NewsIdDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            detail:{}
        }
    }

    componentWillMount(){
        this.getDetail();
    }

    render(){
        let {title,readCount,replyCount,content}=this.state.detail;
        if(content === undefined) return false;
        return(
            <StyledDetail>
                <Header></Header>
                <div style={{height:'16.4rem',overflow:'hidden'}} ref={el => this.scrollWrapper =el}>
                <div className="container">
                    <div className="title-box">
                        <h1 className='title'>{title}</h1>
                        <div className="intro-box">
                            <span className="ib_tags">国际咨询</span>
                            <div className="ib_info">
                                2017-13-13
                                <i className='icon icon-liulan'></i>
                                {readCount}
                                <i className='icon icon-zan'></i>
                                0
                                <i className='icon icon-pinlun'></i>
                                {replyCount}
                            </div>
                        </div>
                    </div>
                    <div className="insert-html" dangerouslySetInnerHTML={{__html:content[0].content}}></div>
                    <Footer backTop={()=>this.backTop()}></Footer>
                </div>
                </div>
            </StyledDetail>
        )
    }
    componentDidUpdate(){
        this.scroll = new scroll(this.scrollWrapper,{
            click:true,
            mouseWheel:true,
        })
    }

    async getDetail(){
        let {newsID} = urlObj.parse(this.props.location.search, true).query;
        let result = await this.axios({
            url:'/cnd/API/Article',
            method:'get',
            params:{
                newsID,
            }
        }).then(res=>res);
        this.setState({detail:result.data.Data});
    }

    backTop(){
        this.scroll.scrollTo(0,0,500)
    }
}
export default withRouter(NewsIdDetail)