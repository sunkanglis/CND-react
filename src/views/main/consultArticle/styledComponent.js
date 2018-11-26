import styled from 'styled-components'
import motif from '@as/css/colorMotif'

export const StyledConsultArticleTab = styled.div`
    width:100%;
    height:45px;
    display:flex;
    background-color:#fff;
    position:fixed;
    z-index:11;
    border-bottom:1px solid #ccc;
    div{
        flex:1 1;
        text-align:center;
        line-height:45px;
    }
`
export const StyledTabItem = styled.div`
    color:${props => props.active?motif.baseColor:'#222'}
`