import React ,{Component} from 'react';
import Ul from '@c/commons/ul'
import axios from 'axios'
import LargeLi from '@c/commons/largeLi'
import scroll from 'better-scroll'

import LoadMore from '@c/commons/loadmore'
import Footer from '@c/commons/footer'

class ConsultArticleContent extends Component{
    constructor(props){
        super(props)
        this.state={
            articles:[],
            page:1,
        }
        this.loadMore = this.loadMore.bind(this);
        this.backTop = this.backTop.bind(this);
    }
    componentWillMount(){
       this.getArticles()
    }
    render(){
        return(
            <div style={{height:'14.026667rem',marginTop:'1.2rem'}} ref={el => this.scrollWrapper = el}>
                <div>
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
    renderItem(){
        return this.state.articles.map((article,index) =>{
            return (
                <LargeLi key={index}
                    {...article}
                >        
                </LargeLi>
            )
        })
    }
    backTop(){
        this.scroll.scrollTo(0,0,500)
    }
    loadMore(){
        this.getArticles();
    }
    async getArticles(){
        let result =await axios({
            url:'/cnd/API/Article',
            method:'get',
            params:{
                primaryID: this.props.primaryID,
                status: 3,
                page: this.state.page++,
                pageSize: 12,
            }
        }).then(res=>res);
        this.state.articles = this.state.articles.concat(result.data)
        this.setState({articles:this.state.articles});
    }
}
export default ConsultArticleContent