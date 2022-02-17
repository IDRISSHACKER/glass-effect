const GAMES = [
    {
        id: 1,
        title: "Tokyo Ghoul",
        img: "ghoul.jpg",
        progression: 80,
        ctg: "PS5 version"
    },
    {
        id: 2,
        title: "Spider Man Milles Moralex",
        img: "spider.jpg",
        progression: 30,
        ctg: "PS5 version"
    },
    {
        id: 3,
        title: "Ghost of thushima",
        img: "ghost.jpg",
        progression: 50,
        ctg: "PS5 version"
    },
    {
        id: 4,
        title: "God of war",
        img: "gow.jpg",
        progression: 50,
        ctg: "PS5 version"
    }
]

const search = document.querySelector(".searchbar")
const searchCont = document.querySelector(".search")
const resultCont = document.querySelector(".result")
const menu = document.querySelector(".menu")
const showMenu = document.querySelector(".showMenu")

const findInGames = (research) => {
    const gamesFound = GAMES.filter((data) => {
        return data.title.toLocaleLowerCase().indexOf(research.toLocaleLowerCase(), -1) != -1
    })
    return gamesFound
}
const setResults = (data = [], container) => {
    data.forEach((result) => {

        const li = document.createElement("li")
        const div = document.createElement("div")
        const img = document.createElement("img")
        const h2 = document.createElement("h2")

        img.src = `images/games/${result.img}`
        h2.textContent = result.title

        div.classList.add("card-s")
        div.appendChild(img)
        div.appendChild(h2)
        li.appendChild(div)

        container.appendChild(li)
    })
}

const showBar = (state = true) => {
    if (state) {
        searchCont.classList.add("fleche")
        resultCont.classList.add("search-visible")
    } else {
        searchCont.classList.remove("fleche")
        resultCont.classList.remove("search-visible")
    }
}
const searchGames = () => {
    search.addEventListener("keyup", (e) => {
        const resultSearch = document.querySelector(".result-list")
        const currentText = e.target.value
        resultSearch.innerHTML = ""

        let searchResult = []

        if (currentText != "") {
            searchResult = findInGames(currentText)
        }

        if (searchResult.length > 0) {
            showBar()
            setResults(searchResult, resultSearch)
        } else {
            showBar(false)
        }

        if (currentText == "") {
            resultSearch.innerHTML = ""
        }
    })

    search.addEventListener("blur", () => {
        const resultSearch = document.querySelector(".result-list")
        resultSearch.innerHTML = ""
        showBar(false)
        search.value = ""
    })
}

const manageMenu = () => {
    showMenu.addEventListener("click", (e) => {
        e.preventDefault()
        if (menu.classList.contains("menu-visible")) {
            menu.classList.remove("menu-visible")
        } else {
            menu.classList.add("menu-visible")
        }
    })
}

searchGames()
manageMenu()
