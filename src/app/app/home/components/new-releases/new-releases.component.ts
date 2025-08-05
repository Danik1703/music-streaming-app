import { Component } from '@angular/core';
import { PlatformHelper } from  '@natec/mef-dev-platform-connector';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent {
  releases = [
    {
      title: 'Wet Leg',
      artist: 'Wet Leg',
      cover: '/assets/Wet_Leg_album_cover.jpeg',
      releaseDate: new Date(2025, 6, 11)
    },
    {
      title: 'Love, Damini',
      artist: 'Burna Boy',
      cover: '/assets/Burna_Boy_-_Love_Damini.png',
      releaseDate: new Date(2025, 6, 11)
    },
    {
      title: 'DNA',
      artist: 'Backstreet Boys',
      cover: '/assets/DNA_by_Backstreet_Boys_cover.jpg',
      releaseDate: new Date(2025, 6, 11)
    },
    {
      title: 'Give or Take',
      artist: 'Giveon',
      cover: '/assets/Giveon_-_Give_or_Take.jpg',
      releaseDate: new Date(2025, 6, 11)
    },
    {
      title: 'Gag Order',
      artist: 'Kesha',
      cover: '/assets/Kesha_-_Gag_Order.png',
      releaseDate: new Date(2025, 6, 4)
    },
    {
      title: 'Ohms',
      artist: 'Deftones',
      cover: '/assets/Deftones_-_Ohms.png',
      releaseDate: new Date(2025, 6, 10)
    },
    {
      title: 'ADHD',
      artist: 'Joyner Lucas',
      cover: '/assets/Joyner_Lucas_-_ADHD.jpg',
      releaseDate: new Date(2025, 6, 18)
    },
    {
      title: 'God Save the Animals',
      artist: 'Alex G',
      cover: '/assets/Alex_G_-_God_Save_the_Animals.jpg',
      releaseDate: new Date(2025, 6, 18)
    },
    {
      title: 'Quadeca 2',
      artist: 'Quadeca',
      cover: '/assets/Quadeca_-_From_Me_To_You_2.jpg',
      releaseDate: new Date(2025, 6, 25)
    },
    {
      title: 'The Human Demands',
      artist: 'Amy Macdonald',
      cover: '/assets/Amy_Macdonald_-_The_Human_Demands.png',
      releaseDate: new Date(2025, 6, 11)
    }
  ];


  
}
