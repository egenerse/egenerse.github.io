import "./GirlWithABalloon.css";
import Draggable from "react-draggable"; // The default

export function GirlWithABalloon() {
  return (
    <Draggable>
      <article
        role="img"
        aria-label="cartoon of a little girl holding a balloon"
      >
        <section class="items">
          <div class="balloon"></div>
        </section>
        <section class="body">
          <div class="arm"></div>
          <div class="arm"></div>
          <div class="leg"></div>
          <div class="leg"></div>
          <div class="dress"></div>
        </section>
        <section class="head">
          <div class="hair"></div>
          <div class="ear"></div>
          <div class="ear"></div>
          <div class="face">
            <div class="bangs"></div>
            <div class="eye"></div>
            <div class="eye"></div>
            <div class="mouth"></div>
            <div class="nose"></div>
            <div class="bun"></div>
            <div class="ribbon"></div>
          </div>
        </section>
      </article>

      {/* <a href="https://youtu.be/lbyM7h1KGHg" id="youtube" target="_blank">
        <span>See how this drawing was coded</span>
      </a> */}
    </Draggable>
  );
}
