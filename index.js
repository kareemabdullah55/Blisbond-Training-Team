const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});
const pdfData = [
    //Egypt//
      { name: '02', url: 'https://reginasalesbuzz.github.io/salesbuzz/Sales%20man.html' },
  
      ////ــــــــــــــــ///////////////ــــــــــــــــــــــــ
   
    ];
      function generateTableRows() {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ''; // Clear any existing rows
        pdfData.forEach(pdf => {
          const row = document.createElement('tr');
          row.classList.add('data-row');
          row.innerHTML = `
            <td>${pdf.name}</td>
            <td><a href="${pdf.url}" target="_blank">enter</a></td>
          `;
          tableBody.appendChild(row);
        });
      }
  
      function searchTable() {
        const searchBar = document.getElementById('search-bar');
        const searchTerm = searchBar.value.toLowerCase();
        const table = document.getElementById('data-table');
        const rows = document.querySelectorAll('.data-row');
        const noResult = document.getElementById('no-result');
        let recordFound = false;
  
        rows.forEach(row => {
          const cell = row.getElementsByTagName('td')[0];
          if (cell.textContent.toLowerCase() === searchTerm) {
            row.classList.remove('hidden');
            recordFound = true;
          } else {
            row.classList.add('hidden');
          }
        });
  // here we check on value user enter if it empty condition will show if not result will show
        if(searchTerm === ''){
          table.style.display = 'none';
          noResult.style.display = 'block';
          noResult.textContent = '  Please contact technical support  '}
  // recordFound mean user already enter value so table will show and <p> tag still hidden 
  // note: recordFound => recordFound==true ----- same are true write this or this same result
        else if (recordFound) {
          table.style.display = 'table';
          noResult.style.display = 'none';
        } 
     // here we said to compiler if any above code not exist show message and keep table hidden   
        else {
          table.style.display = 'none';
          noResult.style.display = 'block';
          noResult.textContent = "Please verify the password"
        }
      }
  // try now reload page first
  //Go
      // Generate table rows on page load
      window.onload = generateTableRows;