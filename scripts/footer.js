document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("main-footer");
  element.insertAdjacentHTML(
    "afterbegin",
    `
      <div id="logo-light-ray"></div>
      <p>
        <a href="https://neocities.org/site/lankarta-project"
          ><img src="/assets/neocities.png" alt="Hosted by neocities.org" /></a
        ><br />
        Have a nice day! <span class="last-updated"></span>
      </p>
      <p>
        <a href="https://bsky.app/profile/lankarta-project.neocities.org">Bluesky</a> |
        <a href="mailto:unitedvolicafoundation@gmail.com" target="_blank">E-Mail</a> |
        <a href="https://neocities.org/site/lankarta-project">Neocities</a> |
        <a href="#">Mastodon</a> |
        <a href="#">GitHub</a>
      </p>
      <p>
        <img src="/assets/lankartabuttongif.gif" alt="Lankarta Animated Button" />
        <img src="/assets/lankartabuttonstatic.png" alt="Lankarta Static Button" />
      </p>
      <p>
        <a href="/links.html#buttons">Buttons of Fellow Websites</a> | <a href="/links.html#webrings">Webrings</a>             
      </p>
      <a href="#">Where did the button go?</a>
    `
  );
  const footer = document.getElementById("main-footer");
  footer.insertAdjacentHTML(
    "beforebegin",
    `<div id="tube-for-the-button"></div>`
  );
});
