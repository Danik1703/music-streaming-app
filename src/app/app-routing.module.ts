import { NgModule, Injectable } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

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

import { AuthService } from './services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/auth/register']);
      return false;
    }
    return true;
  }
}

@Injectable({ providedIn: 'root' })
export class NoAuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['/home/recommendations']);
      return false;
    }
    return true;
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'auth/register', pathMatch: 'full' },

  { path: 'auth/register', component: RegisterFormComponent, canActivate: [NoAuthGuard] },
  { path: 'auth/login', component: LoginFormComponent, canActivate: [NoAuthGuard] },

  { path: 'home/recommendations', component: RecommendationsComponent, canActivate: [AuthGuard] },
  { path: 'home/new-releases', component: NewReleasesComponent, canActivate: [AuthGuard] },
  { path: 'home/top-charts', component: TopChartsComponent, canActivate: [AuthGuard] },

  { path: 'search/results', component: SearchResultsComponent, canActivate: [AuthGuard] },
  { path: 'search/filters', component: SearchFiltersComponent, canActivate: [AuthGuard] },

  { path: 'playlists', component: PlaylistListComponent, canActivate: [AuthGuard] },
  { path: 'playlists/:id', component: PlaylistDetailComponent, canActivate: [AuthGuard] },
  { path: 'playlists/:id/edit', component: PlaylistEditorComponent, canActivate: [AuthGuard] },

  { path: 'favorites/tracks', component: FavoriteTracksComponent, canActivate: [AuthGuard] },
  { path: 'favorites/playlists', component: FavoritePlaylistsComponent, canActivate: [AuthGuard] },

  { path: 'profile/settings', component: UserSettingsComponent, canActivate: [AuthGuard] },
  { path: 'profile/history', component: ListeningHistoryComponent, canActivate: [AuthGuard] },

  { path: 'player/fullscreen', component: PlayerFullscreenComponent, canActivate: [AuthGuard] },
  { path: 'player/volume', component: VolumeControlComponent, canActivate: [AuthGuard] },

  { path: '**', redirectTo: 'auth/register' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
