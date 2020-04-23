/*Create a class that describes a regular marker. 
It should contain the following components: 
A field that stores the color of the marker;
A field that stores the amount of ink in the marker (in percentage);
A method for input. The method takes a string and displays the text in the given color on the webpage. 
The text appears as long as the marker has ink. One non-space character takes 0,5% ink from the marker.
Create a class that describes a refillable marker. The class should inherit from the regular marker. 
Also add a method that refills the marker. Demonstrate the work of these methods.
*/

class RegularMarker {
  constructor(color, inkAmount, text) {
    this.color = color;
    this.inkAmount = inkAmount;
    this.text = text;
    }

  displayColor () { 
    if (this.inkAmount > 0) {
    document.write(`<p style= "color:${this.color}">${this.text}</p>`);
    } else {
      document.write(`<p></p>`);
    }
  }
}

let marker1 = new RegularMarker ('pink', 20, 'The Marker has ink!');
marker1.displayColor();

class RefillableMarker extends RegularMarker {
  constructor(inkAmount) {
    super('pink', inkAmount);
  }

get refill () {
    if (this.inkAmount = 0 ) {
    document.write(`<p style= "color:${this,color}">${this.text}</p>`); 
    }
  }
}

let refilledMarker = new RegularMarker (30);
refilledMarker.refill;