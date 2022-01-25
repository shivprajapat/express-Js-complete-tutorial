const express =require('express');

const PORT = 3000;
app =express();
app.get('/',function(req,res){
    res.send('hello express js');
})

app.listen(PORT,()=>{
    console.log(`server is rouning http://localhost:${PORT}`);
})