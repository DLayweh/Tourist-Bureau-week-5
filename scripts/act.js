
document.addEventListener('DOMContentLoaded', ()=>{

   // document.body.innerHTML += "hello";
    //+= append/concatenate (not replace)
    for(c of categories){
       // categorySelect.innerHTML += `<option>${c}</option>`
       categorySelect.appendChild(new Option(c));
    }

    categorySelect.addEventListener("change", ()=>{
        activitySelect.innerHTML ="";
        activitySelect.appendChild(new Option("Select an Activity"));
        for (a of activities) {
            if (a.category === categorySelect.value) {
                activitySelect.appendChild(new Option(a.name));
            }
        }
        
    });

    activitySelect.addEventListener("change", () => {
        for (a of activities) {
            if (a.name === activitySelect.value){
                for(key in a){
                    detailTable.innerHTML += `
                    <tr></tr> ${key} </th><td> ${a[key]} </td></tr>
                    `;
                }
            }
        }
    });
}); //end content loaded