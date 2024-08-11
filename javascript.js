const themeToggleBtn = document.querySelector('.theme-toggle');
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

function switchMode (){
    let theme = localStorage.getItem('darkMode');
    const modeSwitcher = document.getElementById('themetoggle');
    var linkElement = document.getElementById('theme-style');
    if ( theme === 'enabled') {
        linkElement.href = 'styles_dark.css';
        modeSwitcher.innerHTML = 'Light Mode'
        localStorage.setItem("darkMode","enabled");
        document.body.style.background = 'linear-gradient(to right,  #1b1b1b, #a3a7a6, #adacad, #1b1b1b)';
        const Allparagraphs = document.querySelectorAll('p');
        for (i = 0; i < Allparagraphs.length; ++i){
            Allparagraphs[i].style.color = 'white';
        }
        const AllAs = document.querySelectorAll('a');
        for (i = 0; i < AllAs.length; ++i){
            console.log("here")
            AllAs[i].style.color = 'white';
        }

        const AllDivs = document.querySelectorAll('div');
        for (i = 0; i < AllDivs.length; ++i){
            console.log("there")
            AllDivs[i].style.color = 'white';
        }

        const AllH1s = document.querySelectorAll('h1');
        for (i = 0; i < AllH1s.length; ++i){
            console.log("there")
            AllH1s[i].style.color = 'white';
        }

        const AllH2s = document.querySelectorAll('h2');
        for (i = 0; i < AllH2s.length; ++i){
            console.log("there")
            AllH2s[i].style.color = 'white';
        }

        const AllULs = document.querySelectorAll('ul');
        for (i = 0; i < AllULs.length; ++i){
            console.log("there")
            AllULs[i].style.color = 'white';
        }

        const AllButtons = document.querySelectorAll('Button');
        for (i = 0; i < AllButtons.length; ++i){
            console.log("there")
            AllButtons[i].style.color = 'white';
            AllButtons[i].style.background = 'linear-gradient(to right,  #1b1b1b, #a3a7a6, #adacad, #1b1b1b)';
        }

        const AllTables = document.querySelectorAll('table');
        for (i = 0; i < AllTables.length; ++i){
            console.log("in table")
            const cells = AllTables[i].querySelectorAll('th, td');
            AllTables[i].style.borderColor ='white';
            AllTables[i].style.color = 'white';
            cells.forEach(function(cell) {
                cell.style.borderColor = 'white';
            });
        }
    } else {
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
                console.log("there")
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
                console.log("in table")
                const cells = AllTables[i].querySelectorAll('th, td');
                AllTables[i].style.borderColor ='black';
                AllTables[i].style.color = 'black';
                cells.forEach(function(cell) {
                    cell.style.borderColor = 'black';
                });
            }
    }

}