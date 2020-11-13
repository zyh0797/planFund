/* 封装的全局方法 */
import { Message } from 'element-ui'

export default {
    showMsg: function(message,type){
        Message({
            message,
            type,
            offset:200,
            center: true
        })
    }
}