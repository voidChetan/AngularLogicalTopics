import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent {

  movieList: any[] = [
    {
      movieName: 'Rocketry: The Nambi Effect',
      ticketRate: '250',
      description: 'Based on the life of Indian Space Research Org scientist Nambi Narayanan, who was framed for being a spy ',
      shows: ['09.00 AM - 12.00 AM', '12.30 PM - 1.30 PM', ' 1.30 PM - 3.30']
    },
    {
      movieName: '3 Idiots',
      ticketRate: '300',
      description: 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories.',
      shows: ['10.00 AM - 12.00 PM', '03.00 PM - 6.00 PM']
    },
    {
      movieName: 'Dangal',
      ticketRate: '200',
      description: 'wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games.',
      shows: ['04.00 PM - 07.00 PM']
    },
    {
      movieName: 'Drishyam 2',
      ticketRate: '240',
      description: 'an investigation and a family which is threatened by it. Will Georgekutty be able to protect his family this time?',
      shows: ['11.00 AM - 02.00 PM', '02.00 PM - 05.00 PM']
    }
  ];

  selectedMovie: any = {};
  selectedShow: string = '';
  noOfTicket: number = 0;
  totalAmount: number = 0;

  onSelectMovie(item:any) {
    this.selectedMovie = item;
    this.selectedShow = '';
    if(this.selectedMovie.shows.length ===1) {
      this.selectedShow = this.selectedMovie.shows[0]
    }
  }

  onSelectShow(show: string) {
    this.selectedShow =  show;
  }
  onBookTicket() {
    this.totalAmount =  this.selectedMovie.ticketRate * this.noOfTicket;

  }


}
