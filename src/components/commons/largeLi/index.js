import React,{ Component } from 'react'
import { StyledLi } from './styledComponent'
import {withRouter} from 'react-router-dom'
import qs from 'querystring'

class Largeli extends Component {
    render(){
        let { cover,instruct,timeSpan,readCount,title,newsID,history} =this.props;
        let query = {newsID};
        return(
            <StyledLi onClick={()=>history.push({pathname:'/detail',search: '?' + qs.stringify(query)})}>
                <img src={cover} alt=""/>
                <div className='right'>
                    <h5 className='line-ellipsis'>{title}</h5>
                    <div className="icon-box">
                            <i className="icon icon-shijian"></i> {timeSpan}
                            <i className="icon icon-liulan"></i> {readCount}
                    </div>
                    <div className="text">{instruct}</div>
                </div>
            </StyledLi>
        )
    }
}
export default withRouter(Largeli)