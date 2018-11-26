import styled from 'styled-components'

export const StyledSortTitle = styled.div`
    width:100%;
    height: 39px;
    padding:20px 10px;
    padding-bottom:0 ;
    font-size:16px;
    span{
        display: block;
        float: left;
        width: .08rem;
        height: .46rem;
        margin-right: .2rem;
        background-color: #c30413;
        border-radius: 2px;
    }
`

export const StyledClassfiy = styled.div`
    height:162.25px;
    width:100%;
    background-color: #fff;
    position:absolute;
    display:flex;
    flex-wrap:wrap;
    z-index:10;
    div{
        width:50%;
        height:31.25px;
        line-height:31.25px;
        text-align:center;
        font-size:15px;
        color:#999;
        border-bottom:1px solid rgb(217,217,217);
        border-right:1px solid rgb(217,217,217);
    }

`