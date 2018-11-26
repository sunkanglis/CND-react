import styled from 'styled-components'
import sprite from '@as/images/sprite.png'

export const StyledLi = styled.li`
    width:4.586667rem;
    height:6.293333rem;
    margin-bottom:.266667rem;
    background-color:#fff;
    .info{
       overflow:hidden;
       padding-left:.186667rem;
        h3{
            padding-top:.186667rem;
            span{
                display:inline-block;
                max-width:3.333333rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                color:#111;
            }
        }
        .origin{
            font-size:.32rem;
            color:#686868;
            padding:.133333rem 0;
        }
        .count-box{
            margin-right:.266667rem;
            height:.586667rem;
            color: #cbcbcb;
            font-size:.32rem;
            border-bottom:.026667rem solid #cbcbcb;
            .icon{
                display:inline-block;
                height:.346667rem;
                width:.56rem;
                background: url(${sprite}) no-repeat;
                background-size:.533333rem auto;
                &.icon-liulan{
                    background-position:0 -0.426667rem;
                }
                &.icon-zan{
                    margin-left:.266667rem;
                    height:.453333rem;
                    background-position:0 -0.826667rem;
                }
            }
        }
        .author{
            height:1.066667rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .time{
                padding-right:.533333rem;
                color:#777;
            }
            .nickName{
                max-width:2.506667rem;
            }
        }
    }
`