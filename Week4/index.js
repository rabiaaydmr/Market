const express =require ('express')
const customerService = require('./services/customer-service')
const bodyParder = require('body-parser')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.set('view engine','pug')
app.get('/' ,(req, res)=>{     // Implementation for express framework, first parametre is the name of the path that we are gone respond to
                       // and the second parametre is the callback function to tell our web server about how to respond to that :)
//res.send('Hello')   // Now, my server knows that whenever it see ('/') then it reply this with ('Hello')

//res.sendFile(__dirname +'/index.html')  
res.render('index')
})

app.get('/customer/all' ,async (req, res)=>{     

    const person = await customerService.findAll()
    // res.send(customer)  //almost like console.log(), it is sending to the browser
    res.render('person',{customer :person})  //it render person.pug  customer->array person->eachone
})

app.get('/customer/:id' ,async (req, res)=>{     
    const id = req.params.id
    const person = await customerService.find(id) 
    res.send(person)
})
app.post('/customer', async(req,res)=>{
console.log(req.body)
const person =await customerService.add(req.body)
res.send(person)
})

app.listen(3000, () => {
    console.log('Server listening')
})
