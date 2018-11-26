import React ,{ Component} from 'react'
import { Carousel } from 'antd-mobile';
// import {connect} from 'react-redux'
import connect from '@connect'

class HomeSwiper extends Component {
    render(){
        let {swiperList} = this.props.home;
        if(swiperList.length <=0) return false;
        return (
            <div style={{paddingTop:'10px'}}>
                <Carousel
                    autoplay= {true}
                    infinite = {true}
                    dotStyle={{margin:'5px 5px'}}
                    dotActiveStyle={{backgroundColor:'#007aff',margin:'5px 5px'}}
                    
                    >
                    {swiperList.map(val => (
                        
                        <img
                            key={val.advertID}
                            src={val.cover}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                    
                    ))}
                </Carousel>
            </div>
        )
    }
    componentWillMount(){
        this.props.home_actions.getSwiperList()
    }
}

export default connect(HomeSwiper,[{name:'home',state:['swiperList']}])

// // 原生写法
// const mapStateToProps = (state) =>{
//     // 返回什么 这个组件就接受什么
//     return {
//         swiperList:state.home.swiperList
//     }
// }
// const mapDispatchToProps = (dispatch) =>{
//     // 必须返回一个对象
//     return {
//         getSwiperList(){
//             dispatch(actionCreators.getSwiperList())
//         }
//     }
// }
// // connect函数返回值是一个高阶组件
// // 通过传入不同的参数控制容器组件给ui组件传入哪些与store相关的信息
// export default connect(mapStateToProps,mapDispatchToProps)(HomeSwiper)


