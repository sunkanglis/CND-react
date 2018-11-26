import React,{ Component } from 'react'
import { StyledLi } from './styledComponent'


class SmallLi extends Component{
    render(){
        let {className,cover,title,readCount,goodCount,nickName,timeSpan} = this.props;
        return(
            <StyledLi>
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

export default SmallLi