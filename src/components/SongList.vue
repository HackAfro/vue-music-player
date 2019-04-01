<template>
  <div class="song-list">
    <div>
      <h3>Current Album</h3>
      <hr>
      <div class="album-info">
        <div class="album-info__image">
          <img :src="albumCover.url" :alt="currentAlbum.name">
        </div>
        <div class="album-info__name">
          <h4>{{currentAlbum.name}}</h4>
          <p>{{albumArtiste.name}}</p>
        </div>
      </div>
    </div>
    <Song v-for="track of tracks" :key="track.id" :track="track"/>
  </div>
</template>

<script>
import Song from "./Song";

export default {
  name: "SongList",
  props: ["tracks", "currentAlbum"],
  components: {
    Song
  },
  computed: {
    albumCover() {
      const { images } = this.currentAlbum;
      if (images && images.length) {
        const [image] = images;
        return image;
      }
      return {};
    },

    albumArtiste() {
      const { artists } = this.currentAlbum;
      if (artists && artists.length) {
        const [artist] = artists;
        return artist;
      }
      return {};
    }
  }
};
</script>


<style lang="scss" scoped>
.song-list {
  padding: 30px 50px;

  h3 {
    font-size: 14px;
    font-weight: 600;
    opacity: 0.7;
    text-transform: uppercase;
    font-family: "Montserrat", sans-serif;
    margin: 0 0 15px;
  }

  hr {
    border-color: rgba(0, 0, 0, 0.07);
    margin-bottom: 15px;
  }

  .album-info {
    display: flex;
    align-items: flex-end;

    &__image {
      img {
        width: 50px;
        height: 50px;
        border-radius: 6px;
      }
    }

    &__name {
      h4 {
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        font-size: 14px;
        color: #7b84ff;
        font-weight: 600;
        opacity: 0.8;
        margin: 0 0 0 10px;
      }

      p {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 500;
        opacity: 0.6;
        margin: 0 0 5px 10px;
      }
    }
  }
}
</style>
