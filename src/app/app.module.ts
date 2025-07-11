import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackCardComponent } from './app/shared/components/track-card/track-card.component';
import { MiniPlayerComponent } from './app/shared/components/mini-player/mini-player.component';
import { SearchBarComponent } from './app/shared/components/search-bar/search-bar.component';
import { PlaylistCardComponent } from './app/shared/components/playlist-card/playlist-card.component';
import { AudioControlsComponent } from './app/shared/components/audio-controls/audio-controls.component';
import { UserAvatarComponent } from './app/shared/components/user-avatar/user-avatar.component';
import { TrackProgressComponent } from './app/shared/components/track-progress/track-progress.component';
import { NavbarComponent } from './app/shared/components/navbar/navbar.component';
import { SidebarComponent } from './app/shared/components/sidebar/sidebar.component';
import { NotificationPopupComponent } from './app/shared/components/notification-popup/notification-popup.component';
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

@NgModule({
  declarations: [
    AppComponent,
    TrackCardComponent,
    MiniPlayerComponent,
    SearchBarComponent,
    PlaylistCardComponent,
    AudioControlsComponent,
    UserAvatarComponent,
    TrackProgressComponent,
    NavbarComponent,
    SidebarComponent,
    NotificationPopupComponent,
    RecommendationsComponent,
    NewReleasesComponent,
    TopChartsComponent,
    SearchResultsComponent,
    SearchFiltersComponent,
    PlaylistListComponent,
    PlaylistDetailComponent,
    PlaylistEditorComponent,
    FavoriteTracksComponent,
    FavoritePlaylistsComponent,
    UserSettingsComponent,
    ListeningHistoryComponent,
    PlayerFullscreenComponent,
    VolumeControlComponent,
    LoginFormComponent,
    RegisterFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
