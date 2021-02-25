const mongoose=require('mongoose');
const app=require('./app.js');

mongoose.connect("mongodb://localhost:27017/userDB")
.then(console.log("DB connected"))
.catch
{
    (e)=>{console.log(e)}
}


app.listen(3000);