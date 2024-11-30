const Orders = [
    {
        productName: 'JavaScript Tutorial',
        productNumber: '85743',
        paymentStatus: 'Due',
        status: 'Pending'
    },
    {
        productName: 'CSS Full Course',
        productNumber: '97245',
        paymentStatus: 'Refunded',
        status: 'Declined'
    },
    {
        productName: 'Flex-Box Tutorial',
        productNumber: '36452',
        paymentStatus: 'Paid',
        status: 'Active'
    },]
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
        { name: 'B20', url: 'https://drive.google.com/file/d/160foVMAyJFBOFlb-0PsJ8fv-fLNcba96/view?usp=sharing' },
        { name: 'bs', url: 'https://drive.google.com/file/d/1Fa6QejvivnWxBlRBpUPHBU8Om_vRyAYS/view?usp=sharing' },
        { name: 'GTR1', url: 'https://drive.google.com/file/d/1rcJqRSAI1j8lgtz9yMMuLDAuj3bH-5Pu/view?usp=sharing' },
        { name: 'MP1', url: 'https://drive.google.com/file/d/1IjihiT4sUoXrand7xIo-gBlG-9CKohhV/view?usp=sharing' },
        { name: 'NEW1', url: 'https://drive.google.com/file/d/1ChvaFACcK2lBtYkmB917VfWVjzGb1pGl/view?usp=sharing' },
        { name: 'Robin', url: 'https://drive.google.com/file/d/19blkk7odsk0utlUOew7KfKdCENiZRNs4/view?usp=sharing' },
        { name: 'S1', url: 'https://drive.google.com/file/d/1V6uEPYo_CwB5nkeMZ8ot5vw2P9jHCsEq/view?usp=sharing' },
        { name: 'SP1', url: 'https://drive.google.com/file/d/120dWLwUgysCG50VXASnHeTk59ZG6jCoT/view?usp=sharing' },

    ];
    
    function generateTableRows() {
        const tableBody = document.getElementById('table-body');
        tableBody.innerHTML = ''; // Clear any existing rows
        pdfData.forEach(pdf => {
            const row = document.createElement('tr');
            row.classList.add('data-row');
            row.innerHTML = `
                <td>${pdf.name}</td>
                <td><a href="${pdf.url}" target="_blank">GO</a></td>
            `;
            tableBody.appendChild(row);
        });
    }
    
    function searchTable() {
        const searchBar = document.getElementById('search-bar');
        const searchTerm = searchBar.value.toLowerCase().trim(); // Remove spaces and make lowercase
        const table = document.getElementById('data-table');
        const rows = document.querySelectorAll('.data-row');
        const noResult = document.getElementById('no-result');
        let recordFound = false;
    
        rows.forEach(row => {
            const cell = row.getElementsByTagName('td')[0];
            const cellText = cell.textContent.toLowerCase().trim(); // Remove spaces and make lowercase
    
            // Use includes for partial matching
            if (cellText.includes(searchTerm)) {
                row.classList.remove('hidden');
                recordFound = true;
            } else {
                row.classList.add('hidden');
            }
        });
    
        if (searchTerm === '') {
            table.style.display = 'none';
            noResult.style.display = 'block';
            noResult.textContent = 'Please contact technical support';
        } else if (recordFound) {
            table.style.display = 'table';
            noResult.style.display = 'none';
        } else {
            table.style.display = 'none';
            noResult.style.display = 'block';
            noResult.textContent = "No matching records found";
        }
    }
    
    // Generate table rows on page load
    window.onload = generateTableRows;
    