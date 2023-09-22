class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    // this.timerElement = container.querySelector('.timer'); 
    this.reset();
    this.registerEvents();
  }

    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    registerEvents() {
        document.addEventListener('keydown', (event) => {
            const enteredChar = event.key.toLowerCase();
            const currentChar = this.currentSymbol.textContent.toLowerCase();
            if (enteredChar === currentChar) {
                this.success();
            } else {
                this.fail();
            }
        });
    }

    success() {
        if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;

        if (this.currentSymbol !== null) {
            this.currentSymbol.classList.add('symbol_current');
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
    }

    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
    }

    setNewWord() {
        const word = this.getWord();
        this.renderWord(word);
        // this.startTimer(word.length);
    }
    
    // startTimer(count) {
    //     this.timer = count * 1000; 
    //     this.timerElement.textContent = (this.timer / 1000).toString(); 
    //     this.timerInterval = setInterval(() => {
    //         this.timer -= 1000; 
    //         this.timerElement.textContent = (this.timer / 1000).toString(); 
    //         if (this.timer === 0) {
    //             (this.timerInterval);
    //             tclearIntervalhis.fail();
    //           }
    //     }, 1000);
    // }

    getWord() {
        const words = [
            'bob',
            'awesome',
            'netology',
            'hello',
            'kitty',
            'rock',
            'youtube',
            'popcorn',
            'cinema',
            'love',
            'javascript'
          ],
          index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
              (s, i) =>
                `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;

        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
}

new Game(document.getElementById('game'))

