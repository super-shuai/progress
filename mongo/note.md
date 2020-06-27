
## mongo语句
- 都在用线上数据库
（1）创建数据库 角色 先弄个根用户
（2）在创建一个数据库 分配这个数据库的权限

- show dbs 查看所有数据库 （默认免密，但可以设置）
- use admin 默认的数据库 默认用户名密码是 root
- db.auth(’账号‘,’密码‘) 验证用户
- show collections 查看所有集合
- db.system.users.find({}) 查询所有数据库
- db.system.users.deleteOne({}) 查询所有数据库
- db.createUser() 创建用户
- use user 使用数据库 ，如果没有就会创建
- db.student.insert() 插入数据
- 创建用户并赋予权限

默认可以在admin中创建用户， 创建其他数据库， 在针对于某个数据库中创建用户，赋予当前权限，下次链接这个数据库时可以登录这个账号

> Objectid 构成
是一个
