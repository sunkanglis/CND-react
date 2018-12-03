import styled from 'styled-components';
import motif from '@as/css/colorMotif'


export const StyledHeader = styled.header`
    width:100%;
    height:1.386667rem;
    background-color:${motif.baseColor};
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:space-between;
    div{
        padding:.32rem;
        i{
            display:inline-block;
            width:.592533rem;
            height:.685067rem;
            &.left-back{
                background:url(http://m.cndesign.com/assets/img/sprite-head.png) no-repeat;
                background-size:1rem auto;
                background-position:-0.08rem -1px;
            }
            &.left-menu{
                background:url(http://m.cndesign.com/assets/img/sprite-head.png) no-repeat;
                background-size:1rem auto;
                background-position:-0.08rem -3.146667rem;
            }
            &.left-quiet{
                background:url(http://m.cndesign.com/assets/img/sprite-head.png) no-repeat;
                background-size:1rem auto;
                background-position:-0.08rem -4.64rem;
            }
            &.right-one{
                background:url(http://m.cndesign.com/assets/img/sprite-head.png) no-repeat;
                background-size:1rem auto;
                background-position:-0.08rem -2.4rem;
            }
            &.right-two{
                margin-left:.346667rem;
                background:url(http://m.cndesign.com/assets/img/sprite-head.png) no-repeat;
                background-size:1rem auto;
                background-position:-0.08rem -0.8rem;
            }
        }
        img{
            width:1.509067rem;
            height:.555467rem ;
        }
        
    }
`

export const StyledMenu = styled.section`
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.3);
    position: absolute;
    bottom:0;
    top:1.386667rem;
    z-index:11;
    .menu{
        width:46% ;
        height: 100%;
        background-color:#fff;
        div{
            padding: 0;
        }
        .login{
            display:flex;
            flex-direction:column;
            align-items:center;
            img{
                height:2.24rem ;
                width:2.24rem ;
                border-radius:50%;
                margin-top:1.066667rem;
                margin-bottom:.533333rem;
            }
            span{
                font-size:.48rem;
                color:#000;
            }
        }
        ul{
            width:100%;
            color:#000;
            margin-top:.533333rem;
            li{
                height:1.28rem;
                line-height:1.28rem;
                font-size:.426667rem;
                border-bottom : .026667rem solid #ccc;
                span{
                    display: block;
                    float: left;
                    width: .08rem;
                    height: .46rem;
                    margin-right: .2rem;
                    background-color: #c30413;
                    border-radius: .053333rem;
                    margin-top:.426667rem;
                }
            }
        }
        .register{
            line-height:1.386667rem;
            text-align:center;
            color:#d61e1f;
            font-size:.48rem;
        }
    }
`

