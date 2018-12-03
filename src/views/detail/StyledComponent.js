import styled from 'styled-components'
import motif from '@as/css/colorMotif'
import sprite from '@as/images/sprite.png'

export const StyledDetailContainer = styled.section`
    width:100%;
    height:100%;
`

export const StyledDetail = styled.div`
    width:100%;
    height:100%;
    .author-box{
        height: 1.413333rem;
        padding:.266667rem;
        color:#222;
        background-color:#efefef;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .author-info{
            display:flex;
            img{
                width:.88rem;
                height:100% ;
                border-radius:50%;
                margin-right:.133333rem;
            }
            .info{
                p{
                    color:#7d7d7d;
                    font-size:.32rem;
                    margin-top:.08rem;
                }
            }
           
        }
        .focus-box{
            width:1.386667rem;
            height:.88rem ;
            background-color:${motif.baseColor};
            border-radius: .133333rem;
            text-align:center;
            .icon-focus{
                display:inline-block;
                width:1.04rem;
                height: .853333rem;
                background:url(http://m.cndesign.com/assets/img/sprite-gr.png) no-repeat;
                background-size:1.6rem;
                background-position: 0 -0.56rem;
            }
        }
    }
    .container{
        width:100%;
        padding:.266667rem;
        .title-box{
            height:2rem;
            border-bottom:.026667rem solid rgb(203,203,203);
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            .title{
                font-size:.453333rem;
                color: #222;
            }
            .intro-box{
                height:.533333rem;
                display:flex;
                justify-content:space-between;
                .ib_tags{
                    display:inline-block;
                    height: .56rem;
                    line-height:.56rem;
                    padding:.026667rem .16rem;
                    background-color: #cbcbcb;
                    color: #fff;
                    border-radius:.106667rem;
                    font-size:.32rem;
                }
                .ib_info{
                    font-size:.32rem;
                    color: #cbcbcb;
                    .icon{
                        display:inline-block;
                        height:.346667rem;
                        width:.56rem;
                        background: url(${sprite}) no-repeat;
                        background-size:.533333rem auto;
                        margin-left:.266667rem;
                        &.icon-liulan{
                            background-position:0 -0.426667rem;
                            margin-right:.053333rem;
                        }
                        &.icon-zan{
                          
                            height:.453333rem;
                            background-position:0 -0.826667rem;
                        }
                        &.icon-pinlun{
                            margin-right:.053333rem;
                            background-position:0 -1.386667rem;
                        }
                    }
                }
            }
        }
        .description{
            margin-top:.266667rem;
            font-size:.4rem;
        }
        .pics{
            width: 100%;
            
        }
        .insert-html{
            p{
                line-height:.693333rem
            }
        }
    }
`