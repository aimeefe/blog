<template>
  <div class="home">
    <div class="home-box">
      <h1>Hello!</h1>
      <p>If we have a dream, never wake up, that means: the dream is still a dream ?</p>
      <a href>Discover More</a>
    </div>
  </div>
</template>
<style lang="stylus">
.home {
  height: 100vh;
  width: 100%;
  background: url('http://demo.cssmoban.com/cssthemes5/tope_17_neuron/images/home-bg.jpg') no-repeat left top;
  background-size: cover;

  .home-box {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(0, 36, 83, 0.7) 0%, rgba(255, 43, 74, 0.5) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      color: #fff;
      font-size: 6em;
      font-weight: bold;
      font-family: 'Merriweather', serif;
      margin: 0;
      line-height: 1;
      -webkit-font-smoothing: initial;
    }

    @media (max-width: 959px) {
      h1 {
        font-size: 2em;
      }
    }

    p {
      color: #f6f6f6;
      line-height: 1;
      font-size: 1.2em;
      font-family: fantasy;
    }

    a {
      background: #ffffff;
      border: 2px solid #ffffff;
      border-radius: 100px;
      color: #444;
      font-family: 'Merriweather', serif;
      font-weight: bold;
      letter-spacing: 1px;
      padding: 13px 22px;
      margin-top: 35px;
      transition: all 0.4s ease-in-out;
      display: inline-block;
      font-size: 0.9em;
      -webkit-font-smoothing: initial;
      text-transform: uppercase;

      &:hover {
        background: none;
        color: #fff;
      }
    }
  }
}
</style>