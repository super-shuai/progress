const mongoose = require('mongoose')

// 链接数据库

let conn = mongoose.createConnection()

conn.on('connection', function () {
    console.log('链接成功了')
})

let StudentSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: String,
    age: Number
})
let Student = coon.model('Student', StudentSchema)

let HomeWorkSchema = new mongoose.Schema({
    title: String,
    content: String,
    Student: {
        ref: 'Student',
        type: mongoose.SchemaTypes.ObjectId
    }
})

let HomeWork = conn.model('HomeWork', HomeWorkSchema);

( async() => {
    let user = await Student.create({username: 'zf', password: 'ls'})
    let home = await HomeWork.create({title:'标题', content: '内容', student: user.id})

    let r = await (await HomeWork.findById('')).populated('student')

    r.title = '标题2'
    await r.save()

    conn.close()

    // mongoose.createIndex()
    // mongoose.Aggregate()
})()