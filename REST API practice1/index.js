const express = require('express');
const app = express();
app.get('/',(req,res) => {
    res.send('Hello');
});

app.get('/api/numbers',(req,res)=>{
    var a = [1,2,3];
    res.send(a);
});

//ENV
const port = process.env.port || 3000;
app.listen(port,()=> console.log(`listening on port ${port}...`));