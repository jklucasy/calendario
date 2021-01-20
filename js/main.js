// Select form
let años = document.querySelector('#form-datos');

for (let index = 1; index < 23; index++) {
    let inicio=1999;
    let resul=parseInt(inicio+index);
    let form = '<option class="form-option">'+resul+'</option>';
    años.innerHTML += form;
}

fetch("https://calendarific.com/api/v2/holidays?&api_key=fb80ba07b82c6f80e20db08cb26a01df1fed231e&country=${pais}&year=${ano}")