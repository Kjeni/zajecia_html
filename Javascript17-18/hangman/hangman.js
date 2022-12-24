const game = {
    currentSentence : null, //aktualnie pobrane hasło
    currentSentenceLetters : null,
    attempts : 10, //ile prób zostało dla aktualnej gry
    elemSentence : document.querySelector(".game-sentence"), //element z hasłem do zgadnięcia
    elemAttempts : document.querySelector(".game-attempts"), //element z liczba prob
    elemLetters : document.querySelector(".game-letters"), //lista z literkami do klikania
    sentences : [ //hasła z których losujemy
        "Fantomas",
        "Super Szamson",
        "Hasło",
        "Myszka",
        "Super pies",
        "Przyjaciel",
        "Kurs JavaScript",
        "Terminator",
        "Superman",
        "Herkules",
        "Batman",
        "Spiderman",
        "Kapitan Ameryka",
        "Chleb",
        "Pensja",
        "Wino",
        "Kawał",
        "Zakonnica",
        "Gothic",
        "Diablo",
        "Wakacje",
        "Bratan",
        "Tętnica głęboka uda"
    ],

    generateLetterButtons : function() {
        const alphabet = ["a","ą","b","c","ć","d","e","ę","f","g","h","i","j","k","l","ł","m","n","ń","o","ó","p","q","r","s","ś","t","u","v","w","x","y","z","ź","ż"];

        alphabet.forEach(letter => {
            const button = document.createElement("button");
            button.classList.add("game-letter");
            button.type = "button";
            button.dataset.letter = letter;
            button.innerText = letter;
            this.elemLetters.appendChild(button);
        });
    },

    showAttempts : function() {
        this.elemAttempts.innerText = this.attempts;
    },

    enableLetters : function() {
        const letters  = this.elemLetters.querySelectorAll(".game-letter");
        letters.forEach(el => el.disabled = false);
    },

    disableLetters : function() {
        const letters  = this.elemLetters.querySelectorAll(".game-letter");
        letters.forEach(el => el.disabled = true);
    },

    gameOver : function() {
        alert("Niestety nie udało ci się odgadnąć hasła. Ps: brzmi ono: \n\n" + this.currentSentence);
        this.disableLetters();
    },

    gameComplete : function() {
        alert("Udało ci się zgadnąć hasło :)");
        this.disableLetters();
    },

    checkLettersInSentention : function(letter) {
        if (this.currentSentence.includes(letter)) {   //jeżeli litera istnieje w haśle
            for (let i=0; i<this.currentSentence.length; i++) {
                if (this.currentSentence[i] === letter) {
                    this.elemSentence.querySelectorAll(".game-sentence-box")[i].innerText = letter; //wstawiamy w odpowiednie LI wybraną literę
                }
            }

            this.currentSentenceLetters = this.currentSentenceLetters.replace(new RegExp(letter, "g"), "");

            if (!this.isLetterExists()) { //jeżeli nie ma już nieodgadniętych liter...
                this.gameComplete();
            }
        } else {    //nie ma takiej litery
            this.attempts--;
            this.showAttempts();

            if (this.attempts <= 0) { //jeżeli nie ma już prób...
                this.gameOver();
            }
        }
    },

    isLetterExists : function() {
        return this.currentSentenceLetters.length;
    },

    randomSentence : function() {
        const max = this.sentences.length-1;
        const min = 0;
        const rand = Math.floor(Math.random()*(max-min+1)+min);

        this.currentSentence = this.sentences[rand].toUpperCase();
        this.currentSentenceLetters = this.currentSentence.replace(/ /g, "");
        this.elemSentence.innerText = ""; //czyścimy listę

        const letters = this.currentSentence.split("");
        for (let i=0; i<letters.length; i++) {
            const div = document.createElement("div");
            div.classList.add("game-sentence-box");
            if (letters[i] === " ") {
                div.classList.add("game-sentence-box-space");
            }
            this.elemSentence.appendChild(div);
        }
    },

    bindEvents : function() {
        this.elemLetters.addEventListener("click", e => {
            if (e.target.nodeName.toUpperCase() === "BUTTON" && e.target.classList.contains("game-letter")) {
                const letter = e.target.dataset.letter;
                this.checkLettersInSentention(letter.toUpperCase());
                e.target.disabled = true;
            }
        });
    },

    startGame : function() {
        this.attempts = 10; //ile prób zostało dla aktualnej gry
        this.randomSentence(); //losujemy hasło do zgadnięcia
        this.showAttempts(); //pokazuje liczbę prób
        this.enableLetters(); //włączamy litery
    },

    initBoard : function() {
        this.generateLetterButtons();
        this.bindEvents();
        this.disableLetters();
    }
};

game.initBoard();

document.querySelector(".game-start").addEventListener("click", function() {
    game.startGame();
});