const themeToggleBtn = document.querySelector('.theme-toggle');

// function call on button "click" event
document.addEventListener('DOMContentLoaded', function () {    
    switchMode();
    const modeSwitcher = document.getElementById('themetoggle');
    modeSwitcher.addEventListener('click', function () {
        if (modeSwitcher.innerHTML === "Light Mode"){
            localStorage.setItem("darkMode","disabled");
        }
        else{
            localStorage.setItem("darkMode","enabled");
        }
        switchMode();
        });
    });

// Switch mode function that changes the css style as per the selected colour theme (light/dark)
function switchMode (){
    let theme = localStorage.getItem('darkMode');
    const modeSwitcher = document.getElementById('themetoggle');
    var linkElement = document.getElementById('theme-style');
    if ( theme === 'enabled') {
        linkElement.href = 'styles_dark.css';
        modeSwitcher.innerHTML = 'Light Mode'
        localStorage.setItem("darkMode","enabled");
        document.body.style.background = 'linear-gradient(to right,  #1b1b1b, #a3a7a6, #adacad, #1b1b1b)'; 
        //changing all paragraph tag's colour 
        const Allparagraphs = document.querySelectorAll('p');
        for (i = 0; i < Allparagraphs.length; ++i){
            Allparagraphs[i].style.color = 'white';
        }
        //changing colour for href tags
        const AllAs = document.querySelectorAll('a');
        for (i = 0; i < AllAs.length; ++i){
            AllAs[i].style.color = 'white';
        }
        //changing colour for div tags
        const AllDivs = document.querySelectorAll('div');
        for (i = 0; i < AllDivs.length; ++i){
            AllDivs[i].style.color = 'white';
        }
        //changing colour for h1 tags
        const AllH1s = document.querySelectorAll('h1');
        for (i = 0; i < AllH1s.length; ++i){
            AllH1s[i].style.color = 'white';
        }
        //changing colour for h2 tags
        const AllH2s = document.querySelectorAll('h2');
        for (i = 0; i < AllH2s.length; ++i){
            AllH2s[i].style.color = 'white';
        }
        //changing colour for ul tags
        const AllULs = document.querySelectorAll('ul');
        for (i = 0; i < AllULs.length; ++i){
            AllULs[i].style.color = 'white';
        }
        //changing colour for all button items
        const AllButtons = document.querySelectorAll('Button');
        for (i = 0; i < AllButtons.length; ++i){
            AllButtons[i].style.color = 'white';
            AllButtons[i].style.background = 'linear-gradient(to right,  #1b1b1b, #a3a7a6, #adacad, #1b1b1b)';
        }
        //changing colour for table items
        const AllTables = document.querySelectorAll('table');
        for (i = 0; i < AllTables.length; ++i){
            const cells = AllTables[i].querySelectorAll('th, td');
            AllTables[i].style.borderColor ='white';
            AllTables[i].style.color = 'white';
            cells.forEach(function(cell) {
                cell.style.borderColor = 'white';
            });
        }
    } 
    // same applies for dark mode
    else {
            linkElement.href = 'styles.css';
            modeSwitcher.innerHTML = 'Dark Mode'
            localStorage.setItem("darkMode","disabled");
            document.body.style.background = 'linear-gradient(to right,  #47edf3, #cbfffc, #ffb8d6, #f775ab)';
            const AllPs = document.querySelectorAll('p');
            for (i = 0; i < AllPs.length; ++i){
                AllPs[i].style.color = 'black';
            }
            const AllAs = document.querySelectorAll('a');

            for (i = 0; i < AllAs.length; ++i){
                AllAs[i].style.color = 'black';
            }
            const AllDivs = document.querySelectorAll('div');
            for (i = 0; i < AllDivs.length; ++i){
                AllDivs[i].style.color = 'black';
            }
            const AllHs = document.querySelectorAll('h1');
            for (i = 0; i < AllHs.length; ++i){
                AllHs[i].style.color = 'black';
            }
            const AllH2s = document.querySelectorAll('h2');
            for (i = 0; i < AllH2s.length; ++i){
                AllH2s[i].style.color = 'black';
            }
            const AllULs = document.querySelectorAll('ul');
            for (i = 0; i < AllULs.length; ++i){
                AllULs[i].style.color = 'black';
            }
            const AllButtons = document.querySelectorAll('Button');
            for (i = 0; i < AllButtons.length; ++i){
                AllButtons[i].style.color = 'black';
                AllButtons[i].style.background = 'linear-gradient(to right,  #47edf3, #cbfffc, #ffb8d6, #f775ab)';
            }
            const AllTables = document.querySelectorAll('table');
            for (i = 0; i < AllTables.length; ++i){
                const cells = AllTables[i].querySelectorAll('th, td');
                AllTables[i].style.borderColor ='black';
                AllTables[i].style.color = 'black';
                cells.forEach(function(cell) {
                    cell.style.borderColor = 'black';
                });
            }
    }

}