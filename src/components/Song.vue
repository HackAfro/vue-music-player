<template>
  <div class="track">
    <div class="track-info">
      <div class="track-info__name">
        <h4>{{track.name}}</h4>
      </div>
      <div class="track-info__meta">
        <span class="track-info__meta-duration">{{songDuration}}</span>
        <div class="track-info__meta-tags">
          <span v-if="track.explicit" class>Explicit</span>
        </div>
      </div>
    </div>
    <div class="track-playing__indicator">
      <img src="../assets/images/short-waves.png" class="bland" alt>
      <img src="../assets/images/player-waves-colored.png" class="colored">
    </div>
    <div class="track-actions">
      <button class="track-actions__play">
        <span class="k-icon k-i-video-external"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Song",
  props: ["track"],
  computed: {
    songDuration() {
      const { duration_ms } = this.track;
      const songInSeconds = Math.ceil(duration_ms / 1000);
      const getMinutes = Math.floor(songInSeconds / 60);
      const getSecondsRemainder = songInSeconds % 60;

      return `${getMinutes}:${getSecondsRemainder}`;
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/_variables.scss";

.track {
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  background: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin: 10px 0;

  &:hover {
    background: white;
    transform: scale(1.06);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09);

    .track {
      &-playing__indicator {
        .colored {
          display: block;
        }

        .bland {
          display: none;
        }
      }

      &-actions {
        &__play {
          background: $accent;

          .k-icon {
            color: white;
          }
        }
      }
    }
  }

  &-info {
    flex-grow: 1;
    flex-basis: 0;

    &__name {
      margin-bottom: 8px;

      h4 {
        font-family: "Montserrat", sans-serif;
        opacity: 0.8;
        font-size: 14px;
        font-weight: 400;
        margin: 5px 0;
      }
    }

    &__meta {
      display: flex;
      align-items: center;

      &-duration {
        font-size: 13px;
        font-weight: 600;
        opacity: 0.7;
      }

      &-tags {
        margin-left: 7px;

        span {
          background: #ffdde2;
          color: indianred;
          border-radius: 4px;
          font-size: 10px;
          text-transform: uppercase;
          font-weight: 600;
          padding: 5px 6px;
          letter-spacing: 0.6px;
        }
      }
    }
  }

  &-playing__indicator {
    flex-grow: 1;
    flex-basis: 0;

    .colored {
      display: none;
    }
  }

  &-actions {
    &__play {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: none;
      background: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.09);
      cursor: pointer;

      .k-icon {
        font-size: 22px;
        color: #d4d4d4;
      }
    }
  }
}
</style>
