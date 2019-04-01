<template>
  <main>
    <Header/>
    <section>
      <kendo-splitter
        style="width: 100%; height: 100%; padding: 40px 0"
        :orientation="'horizontal'"
      >
        <div style="width: 60%" class="albumPane">
          <AlbumList :albums="albums" @albumselected="onAlbumChange($event)"/>
        </div>
        <div style="width: 40%" class="songPane">
          <SongList :tracks="tracks" :currentAlbum="currentAlbum"/>
        </div>
      </kendo-splitter>
    </section>
  </main>
</template>

<script>
import { Splitter } from "@progress/kendo-layout-vue-wrapper";
import { getAlbumTracks, getAlbums } from "./utils.js";
import AlbumList from "./components/AlbumList";
import SongList from "./components/SongList";
import Header from "./components/Header";

export default {
  name: "app",
  data() {
    return {
      albums: [],
      currentAlbum: {},
      tracks: []
    };
  },
  components: {
    AlbumList,
    SongList,
    Header,
  },
  methods: {
    async currentAlbumTracks(id) {
      const res = await getAlbumTracks(id);
      const { items } = await res.json();

      this.tracks = items;
    },

    onAlbumChange(album) {
      const { id } = album;
      this.currentAlbum = album;
      this.currentAlbumTracks(id);
    }
  },

  async mounted() {
    const response = await getAlbums();
    const { albums } = await response.json();
    const { items } = albums;
    this.currentAlbum = items[0];
    this.albums = items;
    this.currentAlbumTracks(this.currentAlbum.id);
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.k-pane {
  height: unset !important;
}
.albumPane {
  width: 60% !important;
}
.songPane{
  width: 40% !important
}
</style>
