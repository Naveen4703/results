
const $submitButton = document.querySelector(".custom-btn")

$submitButton.addEventListener('click',async(e)=>{
e.preventDefault()
const number = document.getElementById("searchTerm").value;
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
        },3000
    )
}
}
else{
    alert("Pleamse enter 10 digit roll number");
}
})


