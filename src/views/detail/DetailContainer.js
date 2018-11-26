import React,{Component} from 'react'
import Header from '@c/commons/header'
import { StyledDetailContainer } from './StyledComponent'
import scroll from 'better-scroll';
import Footer from '@c/commons/footer'

class DetailContainer extends Component{
    render(){
        return (
            <StyledDetailContainer>
                <Header></Header>
                <div className="author-box">
                    <div className="author-info">
                        <img src="http://img.cndesign.com/Head/20171226/fc259cd76e4744499d230826d92137b1.jpeg" alt=""/>
                        <div className="info">
                            <h6>盈缺创意</h6>
                            <p>浦东&nbsp;&nbsp;平面设计师</p>
                        </div>
                    </div>
                    <div className="focus-box">
                        <i className='icon-focus'></i>
                    </div>
                </div>
                <div style={{height:'562px',overflow:'hidden'}} ref={el => this.scrollWrapper =el}>
                <div className="container">
                    <div className="title-box">
                        <h1 className='title'>SECRAT BOX CLUB密窖清吧 logo设计</h1>
                        <div className="intro-box">
                            <span className="ib_tags">原创-平面</span>
                            <div className="ib_info">
                                2017-13-13
                                <i className='icon icon-liulan'></i>
                                630
                                <i className='icon icon-zan'></i>
                                1
                                <i className='icon icon-pinlun'></i>
                                0
                            </div>
                        </div>
                    </div>
                    <div className='description'>
                        前言
                        ↵这段时间另一个酒吧的案子 
                        ↵密窖和江东定位不一样
                        ↵密窖是清吧
                        ↵风格更偏向干净简约
                        ↵受众多是文青
                        ↵年龄范围25-45
                        ↵品牌项目归属：盈缺品牌设计
                        ↵品牌/设计：刘欢
                        ↵时间：2018/11
                    </div>
                    <img className='pics' src="http://img.cndesign.com/Works/20181126/74231651e64349768236448a2012de27.jpeg" alt=""/>
                    <img className='pics' src="http://img.cndesign.com/Works/20181126/74231651e64349768236448a2012de27.jpeg" alt=""/>
                    <img className='pics' src="http://img.cndesign.com/Works/20181126/74231651e64349768236448a2012de27.jpeg" alt=""/>
                    <img className='pics' src="http://img.cndesign.com/Works/20181126/74231651e64349768236448a2012de27.jpeg" alt=""/>
                    <img className='pics' src="http://img.cndesign.com/Works/20181126/74231651e64349768236448a2012de27.jpeg" alt=""/>
                    <img className='pics' src="http://img.cndesign.com/Works/20181126/74231651e64349768236448a2012de27.jpeg" alt=""/>
                    <Footer backTop={()=>this.backTop()}></Footer>
                </div>
                </div>
                
            </StyledDetailContainer>
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
}
export default DetailContainer