<template>
  <div class="album" @click="onAlbumClick">
    <div :style="albumCover">
      <div class="details">
        <h3>{{album.name}}</h3>
        <h4>{{getArtiste(album).name}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: ["album"],
  data() {
    return {
      albumCover: {}
    };
  },
  methods: {
    getArtiste(album) {
      const { artists } = album;
      const [artist] = artists;
      return artist;
    },

    onAlbumClick(e) {
      this.$emit("albumSelected", this.album);
    }
  },
  mounted() {
    const { images } = this.album;
    const [, image] = images;
    this.albumCover = {
      background: `linear-gradient(0deg, #989494, #aba6a6), url(${
        image.url
      }), no-repeat`
    };
  }
};
</script>

<style lang="scss" scoped>
.album div {
  width: 100%;
  height: 300px;
  border-radius: 6px;
  margin: 10px 0;
  background-blend-mode: multiply, normal;
  background-size: contain;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    h3 {
      transition: 0.3s ease-in;
      transform: translateY(0);
    }

    h4 {
      transition: 0.3s ease-in;
      transform: translateY(0);
    }
  }

  .details {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    font-weight: 600;
    text-align: left;
    color: white;
    opacity: 0.9;
    margin-left: 15px;
    margin-top: 30px;
    transform: translateY(-50px);
  }

  h4 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    font-weight: 500;
    text-align: left;
    color: whitesmoke;
    opacity: 0.6;
    margin-left: 15px;
    margin-top: 6px;
    transform: translateY(-70px);
  }
}
</style>
