import { Component } from '@angular/core';

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
    cover: 'https://upload.wikimedia.org/wikipedia/en/e/e9/Wet_Leg_album_cover.png',
    releaseDate: new Date(2025, 6, 11)
  },
  {
    title: 'Love, Damini',
    artist: 'Burna Boy',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Burna_Boy_-_Love_Damini.png',
    releaseDate: new Date(2025, 6, 11)
  },
  {
    title: 'DNA',
    artist: 'Backstreet Boys',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/90/DNA_by_Backstreet_Boys_cover.png',
    releaseDate: new Date(2025, 6, 11)
  },
  {
    title: 'Give or Take',
    artist: 'Giveon',
    cover: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Giveon_-_Give_or_Take.png',
    releaseDate: new Date(2025, 6, 11)
  },
  {
    title: 'Gag Order',
    artist: 'Kesha',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Kesha_-_Gag_Order.png',
    releaseDate: new Date(2025, 6, 4)
  },
  {
    title: 'Ohms',
    artist: 'Deftones',
    cover: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Deftones_-_Ohms.png',
    releaseDate: new Date(2025, 6, 10)
  },
  {
    title: 'ADHD',
    artist: 'Joyner Lucas',
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Joyner_Lucas_-_ADHD.png',
    releaseDate: new Date(2025, 6, 18)
  },
  {
    title: 'God Save the Animals',
    artist: 'Alex G',
    cover: 'https://upload.wikimedia.org/wikipedia/en/6/68/Alex_G_-_God_Save_the_Animals.png',
    releaseDate: new Date(2025, 6, 18)
  },
  {
    title: 'Quadeca 2',
    artist: 'Quadeca',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/31/Quadeca_-_From_Me_To_You_2.png',
    releaseDate: new Date(2025, 6, 25)
  },
  {
    title: 'The Human Demands',
    artist: 'Amy Macdonald',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/94/Amy_Macdonald_-_The_Human_Demands.png',
    releaseDate: new Date(2025, 6, 11)
  }
];

}
