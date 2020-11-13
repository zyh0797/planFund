const fs = require('fs')

const url = './fund.json'
const encoding = 'utf8'

//获取全部数据
const getAll = function(){
    let data = fs.readFileSync(url).toString()
    return JSON.parse(data)
}

//根据id获取数据
const getById = function(id){
    let data = getAll().data
    let result = {}
    for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
            result = data[i]
            break
        }
    }
    return result
}

//根据基金编号获取数据
const getByFundId = function(id){
    let data = getAll().data
    let result = {}
    for(let i = 0; i < data.length; i++){
        if(data[i].fund_id == id){
            result = data[i]
            break
        }
    }
    return result
}

//添加数据
const insert = function(pramas){
    let data = getAll().data
    for(let i = 0; i < data.length; i++){
        if(data[i].id == pramas.id){
            return '添加失败，已存在相同id数据'
        }
    }

    data.push(pramas)
    let obj = {}
    obj.data = data
    let str = JSON.stringify(obj)
    return fs.writeFile(url,str,(err) => {
        if(err){
           return err
        }
        return '添加成功'
    })
}

//根据id修改数据
const updateById = function(id,params){
    let data = getAll().data
    for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
            for(let key in params){
                if(data[i][key]){
                    data[i][key] = params[key]
                }
            }
        }
    }

    let obj = {}
    obj.data = data

    let str = JSON.stringify(obj)
    return fs.writeFile(url,str,(err) => {
        if(err){
           return err
        }
        return '修改成功'
    })
}

//根据id删除数据
const deleteById = function(id){
    let data = getAll().data
    for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
            data.splice(i,1)    //找到删除
            console.log('delete',i)
        }
    }
    let obj = {}
    obj.data = data
    let str = JSON.stringify(obj)

    return fs.writeFile(url,str,(err) => {
        if(err){
           return err
        }
        return '删除成功'
    })
}

//console.log(getById(19))
// console.log(deleteById(19))
var obj = { "id" : 19,   "fund_id" : "163402",  "fund_name" : "兴全趋势投资混合(LOF)","invested":5000,"prime_cost":1.1725,"share_held":3654.75}
console.log(insert(obj))
//console.log(getById(19))