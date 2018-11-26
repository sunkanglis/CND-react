import styled from 'styled-components'
import sprite from '@as/images/sprite.png'

export const StyledLi = styled.li`
    height:80.55px;
    margin-bottom:10px;
    width:100%;
    display:flex;
    justify-content:space-between;
    img{
        width:158px;
    }
    .right{
        flex:1 1;
        background-color:#fff;
        overflow:hidden;
        padding:5px 10px;
        .line-ellipsis{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        h5{
            font-size:13px;
            color:#343434;
        }
        .icon-box{
            font-size:12px;
            color: #888;
            padding-top:3px;
            overflow:hidden;
            .icon{
                display:inline-block;
                height:.346667rem;
                width:.56rem;
                background: url(${sprite}) no-repeat;
                background-size:.533333rem auto;
                &.icon-liulan{
                    margin-left:.266667rem;
                    background-position:0 -0.426667rem;
                }
                &.icon-shijian{
                    
                    height:14px;
                    background-position:0 0px;
                }
            }
        }
        .text{
            padding: 0 1px;
            margin-top:5px;
            height:33px;
            font-size:12px;
            color:#888;
            line-height:16.5px;
            word-wrap: break-word;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
`