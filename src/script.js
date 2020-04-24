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
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount;
  }

  print(text) { 
    if (this.inkAmount > 0) {
      document.write(`<p style= "color:${this.color}">${text}</p>`);
    } else {
      document.write(`<p></p>`);
    }
  
   let textcharactors = text.replace(/ /g,'').length;
   this.inkAmount = this.inkAmount - textcharactors * 0.5;
  
  }
}

let marker = new RegularMarker ('Blue', 100);

marker.print('Hello Spring!');
marker.print('Spring is beautiful! There are so many things that deserve your attention.');
marker.print('At this time of year later. This time of year, we also can grow plants on our balcony.');
marker.print('1.some your favourite herbs and flowers will bring  nice scent!');
marker.print('2.some your favourite herbs and flowers will bring  nice scent!');
marker.print('3.some your favourite herbs and flowers will bring  nice scent!');

class RefillableMarker extends RegularMarker {
  constructor(color, inkAmount) {
    super(color, inkAmount);
  }

  refill(text) {
    this.inkAmount = 100;
    document.write(`<p style= "color:${this.color}">${text}</p>`); 
  }
}

let refilledMarker = new RefillableMarker('blue', 100);

refilledMarker.refill('Hello Again!');
refilledMarker.refill('Hello Again!Spring is beautiful! There are so many things that deserve your attention.');
refilledMarker.refill('Hello Again!At this time of year later. This time of year, we also can grow plants on our balcony.');
refilledMarker.refill('Hello Again!At this time of year later. This time of year, we also can grow plants on our balcony.');
refilledMarker.refill('Hello Again!At this time of year later. This time of year, we also can grow plants on our balcony.');
refilledMarker.refill('Hello Again!At this time of year later. This time of year, we also can grow plants on our balcony.');

