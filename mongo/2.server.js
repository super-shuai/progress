const mongoose = require('mongoose')

// 链接数据库

let conn = mongoose.createConnection()

conn.on('connection', function () {
    console.log('链接成功了')
})

// mongo 可以随机存 任意字段

// schema 骨架 根据这个骨架来创建内容

let StudentSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    }
})

// 通过骨架 来创建模型 集合

let Student = coon.model('Student', StudentSchema)

// 模型可以操作数据， 少的就是空，多的字段不会插入
Student.create({
    username: 'zf',
    aa: 1,
    password: 11,
}).then(() => {
    
})

( async() => {
    // where 基本不用 lt: less than, gt: great than, lte: gte inc 递增
    // $set 新增 $push 数组新增 $addToSet 数组的添加操作 $pop 删除
    // let r = await Student.updateOne({})

    // Student.deletMany({});
    // Student.deletOne()

    // (5)分页查询 每页2条 当前是第几页
    let limit = 2;
    let currentPage = 2;
    Student.find({}).limit(limit).skip((currentPage-1) * limit).exec() // 返回游标


})()