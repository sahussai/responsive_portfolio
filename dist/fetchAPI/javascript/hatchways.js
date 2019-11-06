function average (numbers) {
    sum = numbers.reduce((previous, current) => current += previous);
    avg = sum / numbers.length;
    return avg;
}


function filterSearchName(){
    var input, filter, table, name, card, txtValue;
    input = document.getElementById("searchBarName");
    filter = input.value.toUpperCase();
    data = document.getElementById("contentID");
    name = data.getElementsByClassName("title");
    card = data.getElementsByClassName("card");
    for (let i = 0; i < name.length; i++) {
        txtValue = name[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                card[i].style.display = "";
            } else {
                card[i].style.display = "none";
            }
        }       
}

function showGrades(id) {
    console.log(id);
    let sign = document.getElementById("sign"+id);
    let gradeList = document.getElementById("gradeList"+id);
    gradeList.classList.toggle("grade-list");
    sign.classList.toggle("card-content-minus");
    
}