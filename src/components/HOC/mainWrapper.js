import React ,{ Component } from 'react'


import LoadMore from '@c/commons/loadmore'
import Footer from '@c/commons/footer'
import scroll from 'better-scroll'

const mainWrapper = (UiComponent)=>{
    return class extends Component{
        constructor(props){
            super(props)
            this.loadMore = this.loadMore.bind(this);
            this.backTop = this.backTop.bind(this);
        }
        render(){
            console.log(this.props)
            return(
                <div style={{width:'100%',height:'15.226667rem',overflow:'hidden'}} ref={el => this.scrollWrapper = el}>
                    <div >
                        
                        <UiComponent {...this.props}></UiComponent>
                        
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
        loadMore(){
            this.getSwiperList();
        }
    }
}

export default mainWrapper