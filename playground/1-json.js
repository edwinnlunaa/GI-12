const fs =  require('fs')

const dataBuffer= fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.tostring()
const data= JSON.parse(data.JSON)


user.name= 'gunther'
user.age = 40

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json' , userJSON)  

