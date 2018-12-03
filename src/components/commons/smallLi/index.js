import React,{ Component } from 'react'
import { StyledLi } from './styledComponent'
import {withRouter} from 'react-router-dom'
import qs from 'querystring'

class SmallLi extends Component{
    render(){
        let {className,cover,title,readCount,goodCount,nickName,timeSpan,history,worksID} = this.props;
        let query = {id : worksID}
        return(
            <StyledLi onClick={()=>history.push({pathname:'/detail', search: '?' + qs.stringify(query)})}>
                <img src={cover} alt='' />
                <div className = 'info'>
                    <h3>
                        <span>{title}</span>
                    </h3>
                    <p className='origin'>
                        <span>原创</span>-<span>{className}</span>
                    </p>
                    <p className="count-box">
                        <span >
                            <i className="icon icon-liulan"></i> {readCount}
                        </span>
                        <span>
                            <i className="icon icon-zan"></i> {goodCount}
                        </span>
                    </p>
                    <p className="author">
                        <span className="nickName">{nickName}</span>
                        <span className="time fr">{timeSpan}</span>
                    </p>
                </div>
            </StyledLi>
        )
    }
}

export default withRouter(SmallLi)