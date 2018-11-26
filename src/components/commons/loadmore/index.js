import React , { Component } from 'react';

class LoadMore extends Component{
    render(){
        let { loadMore } = this.props;
        return (
            <div style={{width:'100%',padding:"0 .533333rem"}}>
                <div style={{
                    width:"100%",
                    height:'1.12rem',
                    lineHeight:'1.12rem',
                    backgroundColor:'#c30413',
                    color:'#fff',
                    textAlign:'center',
                    fontSize:'.4rem',
                    borderRadius:'4px'
                }}
                    onClick={loadMore}
                >
                    加载更多
                </div>
            </div>
        )
    }
}

export default LoadMore