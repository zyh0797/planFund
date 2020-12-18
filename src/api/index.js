/* 与后台交互模块 */
import ajax from './ajax'

/**
 * 用户注册
*/
let url = 'http://127.0.0.1:8081/'

export default{
    selectAllFunds: () => ajax(url)
}

