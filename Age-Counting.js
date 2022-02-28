const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  let data = '';

  // parse json data here...
  resp.on('data', (result) => {
    data += [result]
  })
  // fetch('https://coderbyte.com/api/challenges/json/age-counting')
  // .then(resp => resp.json())
  // .then(data => console.log(data))
  resp.on('end', ()=> {
    // console.log(data)
    let result = data.split(",")
    .filter(data =>!data.indexOf(" age="))
    .map(data => data.replace(" age=", ""))
    .map(data => parseInt(data))
    .filter(data => (data >=50)).length
    // console.log(result)
    let challengeToken = "womldy123a"
    let str = result.toString() + challengeToken
    let final = ""
    for(let i = 1;i<str.length+1;i++){
      if(i%3 == 0 && i !== 0){
        final+= "X"
      } else {
        final += str[i-1]
      }
    } console.log(final)
  })

  // console.log(resp);

});
