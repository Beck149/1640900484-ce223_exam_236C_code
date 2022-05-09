//Open Call Express
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json())

//-------- View ------------//
app.set('view engine','ejs')
//MySQL Connect phpMyAdmin
const pool = mysql.createPool({
    connectionLimit : 10,
    connectTimeout : 20,
    host : 'localhost', //www.google.com/sql or Server IP Address
    user : 'root',
    password : '',
    database : 'thotsawat_database' //Connect Database from beers.sql (Import to phpMyAdmin)
})

var obj = {} //Global Variables


app.get('/additem',(req, res) => {
    res.render('additem')
})
app.get('/profile',(req, res) => {
    res.render('profile.ejs')
})
app.use(express.static('public'))


app.get('/delete',(re1, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log("connected id : ?", connection.threadId) 
        connection.query('SELECT * FROM 16march', (err, rows) => {
            connection.release();
            if(!err){ 
                //--------Model of Data--------------//
                obj = { thh : rows, Error : err}
                //-----------Controller--------------//
                res.render('deleteitem', obj)

            } else {
                console.log(err)
            }
        })
    })
})

app.get('',(req, res) => {

    pool.getConnection((err, connection) =>{ 
        if(err) throw err
        console.log("connected id : ?", connection.threadId) //ให้ print บอกว่า Connect ได้ไหม
        //console.log(`connected id : ${connection.threadId}`)  //ต้องใช้ ` อยู่ตรงที่เปลี่ยนภาษา

        connection.query('SELECT * FROM 16march', (err, rows) => {
            connection.release();
            if(!err){ 
                //Back-End : Postman Test --> res.send(rows)
                //Front-End :
        

                //--------Model of Data--------------//
                obj = { thh : rows, Error : err}

                //-----------Controller--------------//
                res.render('index', obj)

            } else {
                console.log(err)
            }
        })
    })
})



app.get('/:id',(req, res) => {

    pool.getConnection((err, connection) =>{ 
        if(err) throw err
        console.log("connected id : ?", connection.threadId) //ให้ print บอกว่า Connect ได้ไหม
        //console.log(`connected id : ${connection.threadId}`)  //ต้องใช้ ` อยู่ตรงที่เปลี่ยนภาษา

        connection.query('SELECT * FROM 16march WHERE `id` = ?', req.params.id, (err, rows) => {
            connection.release();
            if(!err){ 
                // res.send(rows)
                obj = {thh : rows, Error, err}
                res.render('showbyid', obj)
            } else {
                console.log(err)
            }
        })
    })
})

app.get('/getname_id/:name&:id',(req, res) => {

    pool.getConnection((err, connection) =>{ //err คือ connect ไม่ได้ or connection คือ connect ได้บรรทัดที่ 13-19
        if(err) throw err
        console.log("connected id : ?", connection.threadId) //ให้ print บอกว่า Connect ได้ไหม
        //console.log(`connected id : ${connection.threadId}`)  //ต้องใช้ ` อยู่ตรงที่เปลี่ยนภาษา

        //แก้ไขคำสั่ง SQL
        connection.query('SELECT * FROM 16march WHERE `id` = ? OR `name` LIKE ?', [req.params.id, req.params.name], (err, rows) => {
            connection.release();
            if(!err){ 
                obj = {thh : rows, Error, err}
                res.render('getnameid', obj)
            } else {
                console.log(err)
            }
        })
    })
})

app.use(bodyParser.urlencoded({extended: false})) 
//สร้าง Path ของเว็บไซต์ additem
app.post('/additem',(req, res) => {
    pool.getConnection((err, connection) => { 
        if(err) throw err
            const params = req.body

                //Check 
                pool.getConnection((err, connection2) => {
                    connection2.query(`SELECT COUNT(id) AS count FROM 16march WHERE id = ${params.id}`, (err, rows) => {
                        if(!rows[0].count){
                            connection.query('INSERT INTO 16march SET ?', params, (err, rows) => {
                                connection.release()
                                if(!err){
                                    //res.send(`${params.name} is complete adding item. `)
                                    obj = {Error:err, mesg : `Success adding data ${params.name}`}
                                    res.render('additem.ejs', obj)
                                }else {
                                    console.log(err)
                                    }
                                })           
                        } else {
                            //res.send(`${params.name} do not insert data`)
                            obj = {Error:err, mesg : `Can not adding data ${params.name}`}
                            res.render('additem', obj)
                            }
                        })
                    })
                })
            })

app.post('/delete',(req, res) => {  
    var mesg
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log("connected id : ?", connection.threadId)

        const {id} = req.body
        
        connection.query('DELETE FROM `16march` WHERE `16march`.`id` = ?', [id], (err, rows) => {
            connection.release();
            if(!err){ 
                //res.send(`${[req.params.id]} is complete delete item. `) 
                mesg = `${[id]} is complete delete item.`
                //res.render('deleteitem', obj)
            } else {
                mesg = `${[id]} can not delete item.`
                //res.render('deleteitem', obj)
            }
        })
    })

    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log("connected id : ?", connection.threadId) 
        connection.query('SELECT * FROM 16march', (err, rows) => {
            connection.release();
            
            if(!err){ 
                //--------Model of Data--------------//
                obj = { thh : rows, Error : err, mesg : mesg}
                //-----------Controller--------------//
                res.render('deleteitem', obj)

            } else {
                console.log(err)
            }
        })
    })
})

app.put('/update',(req, res) => {
    pool.getConnection((err, connection) =>{
        if(err) throw err
        console.log("connected id : ?", connection.threadId)

        //สร้างตัวแปรแบบกลุ่ม
        const {id, draw, no, Category, date, prize} = req.body       

        //Update ข้อมูลต่าง ๆ ตามลำดับ โดยใช้เงื่อนไข id
        connection.query('UPDATE 16march SET draw = ?, no = ? ,Category = ?, date = ?, prize = ? WHERE id = ?', [draw, no,Category, date, prize, id], (err, rows) => {
            connection.release();
            if(!err){ 
                res.send(`${draw} is complete update item. `) 
            } else {
                console.log(err)
            }
        })
    })
})

app.listen(port, () =>
    console.log("listen on port : ?", port)    
)