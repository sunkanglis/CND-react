import React,{Component} from 'react'

import { StyledDetailContainer } from './StyledComponent'
import IdDetail from './IdDetail'
import NewsIdDetail from './NewsIdDetail'
import urlObj from 'url'



class DetailContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            id:true
        }
    }
    componentWillMount(){
        let obj = urlObj.parse(this.props.location.search, true).query;
        if(obj.id){
            this.setState({id:true})
        }else{
            this.setState({id:false})
        }
    }
    render(){
       
        return (
            <StyledDetailContainer>
                {this.state.id && <IdDetail></IdDetail>}
                {!this.state.id && <NewsIdDetail></NewsIdDetail>}
            </StyledDetailContainer>
        )
    }
    
    
}
export default DetailContainer