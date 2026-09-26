const   express =   require ( "express" );

const   app =   express ();  
app . use (express. json ());  
const   PORT =   3000 ;  

app . get ( "/rota" , (request, response)=>{  
    return   response.send( "<h1>Hello World</h1>" );  
});  

app . post ( "/rota" , (request, response)=>{  
    return   response.status( 200 ).json({message:   "Hello Word" })  
})  

app . listen (PORT, ()=>{  
    console . log ( `Server running on port: ${PORT}` );  
});