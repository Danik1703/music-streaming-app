#!/bin/bash

echo "🚀 Генерація компонентів..."

# Shared Components
ng g c app/shared/components/track-card
ng g c app/shared/components/mini-player
ng g c app/shared/components/search-bar
ng g c app/shared/components/playlist-card
ng g c app/shared/components/audio-controls
ng g c app/shared/components/user-avatar
ng g c app/shared/components/track-progress
ng g c app/shared/components/navbar
ng g c app/shared/components/sidebar
ng g c app/shared/components/notification-popup

# Home
ng g c app/home/components/recommendations
ng g c app/home/components/new-releases
ng g c app/home/components/top-charts

# Search
ng g c app/search/components/search-results
ng g c app/search/components/search-filters

# Playlists
ng g c app/playlists/components/playlist-list
ng g c app/playlists/components/playlist-detail
ng g c app/playlists/components/playlist-editor

# Favorites
ng g c app/favorites/components/favorite-tracks
ng g c app/favorites/components/favorite-playlists

# Profile
ng g c app/profile/components/user-settings
ng g c app/profile/components/listening-history

# Player
ng g c app/player/components/player-fullscreen
ng g c app/player/components/volume-control

# Auth
ng g c app/auth/components/login-form
ng g c app/auth/components/register-form

echo "✅ Усі компоненти створено успішно!"
