import React ,{Component} from 'react'
import {StyledClassfiy} from './styledComponent'


class Classfiy extends Component{
    state={
        classfies:[
            {id:1,cate:'all',content:'全部'},
            {id:2,cate:'1',content:'平面'},
            {id:3,cate:'3',content:'包装'},
            {id:4,cate:'4',content:'室内'},
            {id:5,cate:'6',content:'工业'},
            {id:6,cate:'7',content:'网页'},
            {id:7,cate:'10',content:'插画'},
            {id:8,cate:'12',content:'艺术'},
            {id:9,cate:'13',content:'摄影'},
            {id:10,cate:'14',content:'其他'},
        ]
    }
    render(){
        return(
            <StyledClassfiy>
                {
                    this.state.classfies.map(classfiy=>{
                        return(
                            <div key={classfiy.id} cate={classfiy.cate} onClick={()=>this.props.changeCate(classfiy.cate)}>
                                {classfiy.content}
                            </div>
                        )
                    })
                }

            </StyledClassfiy>
        )
    }
}

export default Classfiy