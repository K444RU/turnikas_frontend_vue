<template>
  <div class="background-image2">
    <Header/>
    <div class="row">
      <div class="col-lg-4">
        <nav id="navbar-example3" class="h-100 flex-column1 align-items-stretch pe-4 border-end">
          <nav class="nav1 nav-pills flex-column">
            <a class="nav-link nav-link-column" href="#item-1">Item 1</a>
            <nav class="nav1 nav-pills flex-column">
              <a class="nav-link nav-link-column" href="#item-1-1">Item 1-1</a>
              <a class="nav-link nav-link-column" href="#item-1-2">Item 1-2</a>
            </nav>
            <a class="nav-link nav-link-column" href="#item-2">Item 2</a>
            <a class="nav-link nav-link-column" href="#item-3">Item 3</a>
            <nav class="nav1 nav-pills flex-column">
              <a class="nav-link nav-link-column" href="#item-3-1">Item 3-1</a>
              <a class="nav-link nav-link-column" href="#item-3-2">Item 3-2</a>
            </nav>
          </nav>
        </nav>
      </div>

      <div class="col-8 about-background-column">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true"
             class="scrollspy-example-2" tabindex="0">
          <div id="item-1">
            <h4>Item 1</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding
              some more example copy here to emphasize the scrolling and highlighting.</p>
          </div>
          <div id="item-1-1">
            <h5>Item 1-1</h5>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding
              some more example copy here to emphasize the scrolling and highlighting.

              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.</p>
          </div>
          <div id="item-1-2">
            <h5>Item 1-2</h5>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding
              some more example copy here to emphasize the scrolling and highlighting.

              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.</p>
          </div>
          <div id="item-2">
            <h4>Item 2</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding
              some more example copy here to emphasize the scrolling and highlighting.

              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.</p>
          </div>
          <div id="item-3">
            <h4>Item 3</h4>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding
              some more example copy here to emphasize the scrolling and highlighting.

              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.</p>
          </div>
          <div id="item-3-1">
            <h5>Item 3-1</h5>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding
              some more example copy here to emphasize the scrolling and highlighting.

              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.</p>
          </div>
          <div id="item-3-2">
            <h5>Item 3-2</h5>
            <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the
              appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding
              some more example copy here to emphasize the scrolling and highlighting.

              Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible.
              Multiple visible scrollspy targets at the same time may cause some issues.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

.about-background-column{
  background-color: #1d2127;
  border-radius: 20px;
  margin-top: 20px;
  padding: 40px;
}
.flex-column1{
  background-color: #1d2127;
  border-radius: 20px;
  margin: 20px;
}
.background-image2 {
  background-color: black;
  background-size: cover;
  min-height: 200vh;
  height: available;
  width: auto;
}


.text-container h1 {
  font-size: 36px;
  font-family: 'Permanent Marker', cursive;
}

.text-container p {
  font-size: 18px;
}
</style>
