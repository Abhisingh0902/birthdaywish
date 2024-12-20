class BirthdayCelebration {
    constructor() {
        this.codeText = `/**
 * @developer Rohit Sir
 * @event Birthday Celebration
 */

class BirthdayWishes {
    constructor() {
        this.developer = "Rohit Sir";
        this.wishes = [
            "Master of Code 👨‍💻",
            "Debugging Expert 🔍",
            "Inspiration to Many ⭐",
            "Amazing Mentor 🎯",
            "Tech Guru 🚀"
        ];
    }

    async celebrateBirthday() {
        try {
            await this.loadCelebration();
            this.spreadHappiness();
            return "Happy Birthday! 🎂";
        } catch (error) {
            console.log("No errors on your birthday! 😊");
        }
    }
}

// Initializing celebration...
new BirthdayWishes().celebrateBirthday();`;

        this.currentChar = 0;
        this.codeElement = document.querySelector('.code-section code');
        this.init();
    }

    init() {
        this.typeCode();
    }

    typeCode() {
        if (this.currentChar < this.codeText.length) {
            this.codeElement.textContent += this.codeText.charAt(this.currentChar);
            this.currentChar++;
            Prism.highlightElement(this.codeElement);
            setTimeout(() => this.typeCode(), 50);
        } else {
            setTimeout(() => this.showCelebration(), 1000);
        }
    }

    showCelebration() {
        document.querySelector('.birthday-wish').style.display = 'flex';
        
        // बर्थडे सॉन्ग प्ले करें
        const audio = new Audio('https://www.soundhelix.com/examples/mp3/HappyBirthday.mp3');
        audio.play();
        
        this.createConfetti();
        this.createFireworks();

        // 10 सेकंड बाद ऑडियो स्टॉप
        setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 10000);
    }

    createConfetti() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = this.getRandomColor();
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                document.querySelector('.celebration-container').appendChild(confetti);
                confetti.addEventListener('animationend', () => confetti.remove());
            }, i * 50);
        }
    }

    createFireworks() {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = Math.random() * 100 + 'vw';
                firework.style.top = Math.random() * 50 + 'vh';
                document.querySelector('.celebration-container').appendChild(firework);
                setTimeout(() => firework.remove(), 1000);
            }, i * 800);
        }
    }

    getRandomColor() {
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
}

window.onload = () => new BirthdayCelebration(); 