import { CHANGE_TABINDEX ,CHANGE_PDISSHOW} from "./actiontypes";

export default {
    changeTabIndex(val){
        return{
            type:CHANGE_TABINDEX,
            val,
        }
    },
    changePdIsShow(){
        return{
            type:CHANGE_PDISSHOW,
        }
    }
}