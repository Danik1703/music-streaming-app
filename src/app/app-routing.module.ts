import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecommendationsComponent } from './app/home/components/recommendations/recommendations.component';
import { NewReleasesComponent } from './app/home/components/new-releases/new-releases.component';
import { TopChartsComponent } from './app/home/components/top-charts/top-charts.component';

import { SearchResultsComponent } from './app/search/components/search-results/search-results.component';
import { SearchFiltersComponent } from './app/search/components/search-filters/search-filters.component';

import { PlaylistListComponent } from './app/playlists/components/playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './app/playlists/components/playlist-detail/playlist-detail.component';
import { PlaylistEditorComponent } from './app/playlists/components/playlist-editor/playlist-editor.component';

import { FavoriteTracksComponent } from './app/favorites/components/favorite-tracks/favorite-tracks.component';
import { FavoritePlaylistsComponent } from './app/favorites/components/favorite-playlists/favorite-playlists.component';

import { UserSettingsComponent } from './app/profile/components/user-settings/user-settings.component';
import { ListeningHistoryComponent } from './app/profile/components/listening-history/listening-history.component';

import { PlayerFullscreenComponent } from './app/player/components/player-fullscreen/player-fullscreen.component';
import { VolumeControlComponent } from './app/player/components/volume-control/volume-control.component';

import { LoginFormComponent } from './app/auth/components/login-form/login-form.component';
import { RegisterFormComponent } from './app/auth/components/register-form/register-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/recommendations', pathMatch: 'full' },

  { path: 'home/recommendations', component: RecommendationsComponent },
  { path: 'home/new-releases', component: NewReleasesComponent },
  { path: 'home/top-charts', component: TopChartsComponent },

  { path: 'search/results', component: SearchResultsComponent },
  { path: 'search/filters', component: SearchFiltersComponent },

  { path: 'playlists', component: PlaylistListComponent },
  { path: 'playlists/detail', component: PlaylistDetailComponent },
  { path: 'playlists/editor', component: PlaylistEditorComponent },

  { path: 'favorites/tracks', component: FavoriteTracksComponent },
  { path: 'favorites/playlists', component: FavoritePlaylistsComponent },

  { path: 'profile/settings', component: UserSettingsComponent },
  { path: 'profile/history', component: ListeningHistoryComponent },

  { path: 'player/fullscreen', component: PlayerFullscreenComponent },
  { path: 'player/volume', component: VolumeControlComponent },

  { path: 'auth/login', component: LoginFormComponent },
  { path: 'auth/register', component: RegisterFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
