/*   const XMLParser = require('react-xml-parser');
  let i = 1
  let urls = []
  for(i; i <= 80; i++) { urls.push(`http://api.sr.se/api/v2/programs/index?page=${i}`) }

  
  

  console.log(urls)
  urls.forEach(item => {
    fetch(item)
   
    .then((resp) => resp.text())
    .then(function(data) {
       let xml = new XMLParser().parseFromString(data)
       let programs = xml.getElementsByTagName('program')[0];
      
       let srPrograms = { 
         name: programs.attributes.name, 
         url: programs.children.find(element => element.name.includes("programurl")).value, 
         kanal: programs.children.find(element => element.name.includes("channel")).attributes.name
        }
       
       
       
       console.log(srPrograms)
       
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    }); 
    
  }) */