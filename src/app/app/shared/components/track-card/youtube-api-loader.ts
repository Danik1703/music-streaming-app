export function loadYouTubeApi(): Promise<void> {
  return new Promise(resolve => {
    if ((window as any).YT && (window as any).YT.Player) {
      resolve();
    } else {
      (window as any).onYouTubeIframeAPIReady = resolve;
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  });
}
