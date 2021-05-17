const refs ={
        days: document.querySelector('span[data-value="days"]'),
        hours: document.querySelector('span[data-value="hours"]'),
        mins:document.querySelector('span[data-value="mins"]'),
        secs: document.querySelector('span[data-value="secs"]'),
        timer:document.querySelector('.timer'),}


 class Timer {
        constructor({selector,targetDate}) {
          this.selector = selector;
          this.targetDate = targetDate;
        }
        start() {     
            setInterval(() => {
                const currentTeme =  Date.now()
                const deltaTime = this.targetDate - currentTeme;
                this.updateClockface(this.getTimeComponents(deltaTime));          
            }, 1000);
        }
    
        getTimeComponents(time) {
            const days = String(Math.floor(time / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
            const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
            return { days, hours, mins, secs };
        }
    
        pad(value) {
            return String(value).padStart(2, '0');
        }
    
        updateClockface({ days, hours, mins, secs }) {
            refs.days.textContent = days;
            refs.hours.textContent = hours;
            refs.mins.textContent = mins;
            refs.secs.textContent = secs;
        }
    };
    
    
    
    const CountdownTimer = new Timer({
        selector: '#timer-1',
        targetDate: new Date('Jul 17, 2021'),
    });
    
    CountdownTimer.start();

