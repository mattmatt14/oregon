class Traveler {

    constructor(name) {
        this.name = name;
        this.food = 1;
        this.isHealthy = true;

    }


    hunt() {
        if (this.food > 0) {
            this.food += 2;
        }

    }

    eat() {
        if (this.food > 0) {
            this.food -= 1;
        }

        if (this.food == 0) {
            this.isHealthy = false;
        }
    }

}






class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.passengers = [];
    }

    getAvailableSeatCount() {
        return this.capacity - this.passengers.length;
        
     } 
  
    join(traveler) {
        if (this.passengers.length < this.capacity) {
        this.passengers.push(traveler);
        }

    }

    shouldQuarantine() {
        for(let i = 0; i < this.passengers.length; i++) {
          if(this.passengers[i].isHealthy === false) {
           return true;
          }
        }
        


        return false;

    }

    totalFood() {
        let total = 0;
      for(let i = 0; i < this.passengers.length; i++) {
        total += this.passengers[i].food;
      }  

      return total;
    }


}

