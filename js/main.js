const football_legends = {
    'Argentina': {
        players: [
            {
                name:'Mario Kempes',
                position:'forward',
                nickname:'El Toro and El Matador'
            },
            {
                name:'Alfredo Di Stéfano',
                position:'center-forward',
                nickname:'Blond Arrow'
            },
            {
                name:'Daniel Passarella',
                position:'centre-back',
                nickname:'El Kaiser'
            },
            {
                name:'Gabriel Batistuta',
                position:'forward',
                nickname:'Batigol'
            },
            {
                name:'Diego Maradona',
                position:'midfielder',
                nickname:'The Golden Boy'
            },
            {
                name:'Ángel Labruna',
                position:'center-forward',
                nickname:'The Machine'
            },
            {
                name:'Lionel Messi',
                position:'center-forward',
                nickname:'La Pulga'
            },
            {
                name:'Javier Zanetti',
                position:'defender',
                nickname:'El Tractor'
            },
            {
                name:'Emiliano Martinez',
                position:'goalkeeper',
                nickname:'Dibu'
            },
        ],
        'worldcuptitles': 3,
        'background': './photos/argentina.jpg',
        'alltimescorer': 'Lionel Messi',
        'backgroundColor': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 14%, rgba(0,212,255,1) 100%)'
    },
    'Brazil': {
        players: [
            {
                name:'Romario',
                position:'center-forward',
                nickname:'Baixinho'
            },
            {
                name:'Pelé',
                position:'striker',
                nickname:'The King'
            },
            {
                name:'Zico',
                position:'midfielder',
                nickname:'The Little Rooster'
            },
            {
                name:'Jairzinho',
                position:'winger',
                nickname:'The Hurricane'
            },
            {
                name:'Ronaldinho',
                position:'midfielder',
                nickname:'Ronnie'
            },
            {
                name:'Socrates',
                position:'midfielder',
                nickname:'Doctor Socrates'
            },
            {
                name:'Garrincha',
                position:'winger',
                nickname:'Little Bird'
            },
            {
                name:'Rivaldo',
                position:'midfielder',
                nickname: "The Complete Package"
            },
            {
                name:'Cafu',
                position:'winger',
                nickname: "The Express Train"
            },
            {
                name:'Roberto Carlos',
                position:'defender',
                nickname: "The Bullet Man"
            },
            {
                name:'Falcão',
                position:'forward',
                nickname: "The Tiger"
            },
        ],
        'worldcuptitles': 5,
        'background': './photos/brazil.jpg',
        'alltimescorer': 'Neymar da Silva Santos Júnior',
        'backgroundColor': 'linear-gradient(0deg, rgba(43,195,34,1) 0%, rgba(253,187,45,1) 73%)'
    },
    'Germany': {
        players: [
            {
                name:'Gerd Müller',
                position:'striker',
                nickname:'Bomber der Nation'
            },
            {
                name:'Franz Beckenbauer',
                position:'defender',
                nickname:'Der Kaiser'
            },
            {
                name:'Lothar Matthaus',
                position:'midfielder',
                nickname:'Der Terminator'
            },
            {
                name:'Miroslav Klose',
                position:'striker',
                nickname:'Salto-Klose'
            },
            {
                name:'karl heinz rummenigge',
                position:'forward',
                nickname:'Kalle'
            },
            {
                name:'Bastian Schweinsteiger',
                position:'central midfield',
                nickname:'Fußballgott'
            },
            {
                name:'Paul Breitner',
                position:'defender',
                nickname:'Der Afro'
            },
            {
                name:'Sepp Maier',
                position:'goalkeeper',
                nickname:'Die Katze Von Anzing'
            },
            {
                name:'Manuel Neuer',
                position:'goalkeeper',
                nickname:'Neuer the Wall'
            },
            {
                name:'Philipp Lahm',
                position:'defender',
                nickname:'Magic Dwarf'
            },
        ],
        'worldcuptitles': 4,
        'background': './photos/germany.jpg',
        'alltimescorer': 'Miroslav Klose',
        'backgroundColor': 'linear-gradient(0deg, rgba(0,0,0,1) 23%, rgba(253,45,45,1) 73%)'
    },
    'Italy': {
        players: [
            {
                name:'Franco Baresi',
                position:'sweeper',
                nickname:'Piscinin'
            },
            {
                name:'Alessandro Del Piero',
                position:'striker',
                nickname:'Pinturicchio'
            },
            {
                name:'Francesco Totti',
                position:'winger',
                nickname:'Er Pupone'
            },
            {
                name:'Gianluigi Buffon',
                position:'goalkeeper',
                nickname:'Superman'
            },
            {
                name:'Roberto Baggio',
                position:'striker',
                nickname:'The Divine Ponytail'
            },
            {
                name:'Fabio Cannavaro',
                position:'defender',
                nickname:'Wall of Berlin"'
            },
            {
                name:'Giuseppe Meazza',
                position:'forward',
                nickname:'il Balilla"'
            },
            {
                name:'Paolo Maldini',
                position:'defender',
                nickname:'Il Capitano"'
            },
            {
                name:'Andrea Pirlo',
                position:'midfielder',
                nickname:'The Metronome"'
            },
            {
                name:'Alessandro Nesta',
                position:'defender',
                nickname:'Tempesta perfetta"'
            },
            {
                name:'Paolo Rossi',
                position:'forward',
                nickname:'Pablito"'
            },
        ],
        'worldcuptitles': 4,
        'background': './photos/italy.jpg',
        'alltimescorer': 'Luigi Riva',
        'backgroundColor': 'linear-gradient(0deg, rgba(250,5,5,1) 14%, rgba(90,240,1,1) 73%)'
    },
};
const mainContainer = document.querySelector("#mainContainer");
let selectedCountry = '';

const countrySelect = () => {
    // variables
    const selectC = document.querySelector("#selectC");
    const alltimescorer = document.querySelector("#alltimescorer");
    const worldcuptitles = document.querySelector("#worldcuptitles");
    // flag for checking if dynamic fiter select has been added
    let selectInserted = false;
    // create dynamic select for filtering
    const positionSelect = `<article id="position_select">
                                <label for="selectP">Position</label>
                                <select id="selectP" class="form-select" aria-label="select country" @>
                                    <option value="any" selected>Any</option>
                                    <option value="goalkeeper">goalkeeper</option>
                                    <option value="defender">defender</option>
                                    <option value="forward">forward</option>
                                    <option value="center-forward">center-forward</option>
                                    <option value="midfielder">midfielder</option>
                                    <option value="winger">winger</option>
                                    <option value="striker">striker</option>
                                </select>
                            </article>`;
    selectC.addEventListener("change",(e) => {
        selectedCountry = e.target.value;
        // add dynamic select for filtering
        if (selectedCountry !== 'select' && !selectInserted) {
            document.querySelector("#firstarticle").insertAdjacentHTML('afterend',positionSelect);
            selectInserted = true;
        } 
        // empty container
        mainContainer.innerHTML = '';
        // show stats
        document.querySelectorAll('p').forEach((p)=> {
            p.classList.remove('d-none')
        })
        document.querySelectorAll('.ctr').forEach((p)=> {
            p.classList.add('d-none')
        })
        document.querySelector("."+selectedCountry).classList.remove("d-none");
        worldcuptitles.classList.remove("d-none");
        alltimescorer.classList.remove("d-none");
        worldcuptitles.innerHTML = football_legends[selectedCountry]?.worldcuptitles ? football_legends[selectedCountry].worldcuptitles : '-';
        alltimescorer.innerHTML = football_legends[selectedCountry]?.alltimescorer ? football_legends[selectedCountry].alltimescorer : '-';
        mainContainer.style.background = football_legends[selectedCountry]?.backgroundColor  ? football_legends[selectedCountry].backgroundColor : 'black';
        // populate container
        dynamicCards(football_legends[selectedCountry].players, football_legends[selectedCountry], selectedCountry);
        // filter position back to show all players
        document.querySelector("#selectP").value = "any";
        // filter by position
        positionSelectFunc();
    })
}

const positionSelectFunc = () => {
    const selectP = document.querySelector("#selectP");
    selectP.addEventListener("change",(e) => {
        // empty container
        mainContainer.innerHTML = '';
        // filter by position
        switch(e.target.value) {
            case 'goalkeeper':
                dynamicCards(football_legends[selectedCountry].players.filter(c => c.position === 'goalkeeper'), football_legends[selectedCountry], selectedCountry, 'goalkeeper')
                break;
            case 'defender':
                dynamicCards(football_legends[selectedCountry].players.filter(c => c.position === 'defender'), football_legends[selectedCountry], selectedCountry, 'defender')
                break;
            case 'forward':
                dynamicCards(football_legends[selectedCountry].players.filter(c => c.position === 'forward'), football_legends[selectedCountry], selectedCountry, 'forward')
                break;
            case 'center-forward':
                dynamicCards(football_legends[selectedCountry].players.filter(c => c.position === 'center-forward'), football_legends[selectedCountry], selectedCountry, 'center-forward')
                break;
            case 'midfielder':
                dynamicCards(football_legends[selectedCountry].players.filter(c => c.position === 'midfielder'), football_legends[selectedCountry], selectedCountry, 'midfielder')
                break;
            case 'winger':
                dynamicCards(football_legends[selectedCountry].players.filter(c => c.position === 'winger'), football_legends[selectedCountry], selectedCountry, 'winger')
                break;
            case 'striker':
                dynamicCards(football_legends[selectedCountry].players.filter(c => c.position === 'striker'), football_legends[selectedCountry], selectedCountry, 'striker')
                break;
            default:
                dynamicCards(football_legends[selectedCountry].players, football_legends[selectedCountry], selectedCountry)
        }
    })
}

const dynamicCards = (countryPlayers, country, selectedCountry, pos='any') => {
    mainContainer.innerHTML+= countryPlayers.map(({name, position, nickname})=> {
        return `<div class="col-lg-3 col-md-5 col-sm-5 card countryCards mx-2 my-3" style="width: 18rem;">
                    <img src="${country.background}" class="card-img-top" alt="image of ${selectedCountry}">
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                        <p class="card-text">Position: ${position}</p>
                        <p class="fst-italic">Nickname: <span class="badge bg-danger">${nickname}</span></p>
                    </div>
                </div>`
    }).join("");
    // check if there are players for the position, otherwise message
    let cardsLength = document.getElementsByClassName("countryCards").length;
    if (cardsLength <= 0) {
        mainContainer.innerHTML+= `<p class="lead fw-bolder text-center">There are no players at ${pos} position</p>`
    }
}

document.addEventListener("DOMContentLoaded", () => {
    countrySelect();
});
