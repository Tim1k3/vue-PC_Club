import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    featuredGames: [],
    topDownloaded: []
  }),
  actions: {
    setFeaturedGames(games) {
      this.featuredGames = games;
    },
    setTopDownloaded(games) {
      this.topDownloaded = games;
    }
  }
});
