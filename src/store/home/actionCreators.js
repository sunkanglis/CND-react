import { GET_SWIPERLIST } from './actionTypes'
import axios from 'axios'

export default {
    getSwiperList(){
        return {
            type: GET_SWIPERLIST,
            payload : axios.get('/cnd/Api/Base/SliderBannel')
        }
    }
}