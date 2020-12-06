//import express package
const express = require('express');
 
 //create application using express
const port = 8000;
 const app = express();


 let blogs =[{
 	id: 1, 
 	title: 'hello'

 },
 {
 	id: 2, 
 	title: 'world'

 }];

 app.get('/blog', (req, res)=>{
 	res.json(blogs);

 });

 app.post('/blog', (req, res)=>{
 	res.json({method : req.method});


 });

 app.put('/blog/:id', (req, res)=>{
 	res.json({method : req.method});

 });


 app.delete('/blog/:id', (req, res)=>{
 	res.json({method : req.method});


 });

 app.get('/blog/:id', (req, res)=>{
 	let data = blogs.filter((value)=> value.id === parseInt(req.params.id));
 	if(!data[0]){
 		return res.status(404).json({error: 'Data not found'});
 	}

 	res.json(data[0]);
 })

 

 //listen app

 app.listen(port, ()=>{
 	console.log(`Application running on port: ${port}`);

 })