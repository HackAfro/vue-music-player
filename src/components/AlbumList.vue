<template>
  <section class="album-section">
    <div>
      <h4>Latest Albums</h4>
    </div>
    <div class="album-list">
      <Album
        v-for="album in albums"
        :key="album.id"
        :album="album"
        @albumSelected="onAlbumSelected($event)"
      />
    </div>
  </section>
</template>

<script>
import Album from './Album';

export default {
  name: "AlbumList",
  props: ["albums"],
  components: {
    Album
  },
  methods: {
    onAlbumSelected(album) {
      this.$emit("albumselected", album);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/_variables.scss";

.album-section {
  padding: 30px 45px;

  h4 {
    font-size: 15px;
    color: $base-text;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin: 0 0 20px;
  }
}

.album-list {
  line-height: 0;
  column-count: 3;
  column-gap: 10px;
}

@media (max-width: 1200px) {
  .album-list {
    column-count: 4;
  }
}

@media (max-width: 1000px) {
  .album-list {
    column-count: 3;
  }
}

@media (max-width: 800px) {
  .album-list {
    column-count: 2;
  }
}

@media (max-width: 400px) {
  .album-list {
    column-count: 1;
  }
}
</style>
