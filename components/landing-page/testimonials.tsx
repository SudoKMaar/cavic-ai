const Testimonials = () => {
  return (
    <div className="flex relative items-center justify-center overflow-hidden min-h-screen">
      <div className="content">
        <div className="info">
          <p>
            Join us for a fantastic{" "}
            <span className="movie-night">movie night</span> filled with
            popcorn, laughter, and great company! Whether you&apos;re a fan of
            thrilling action, heartwarming dramas, or side-splitting comedies,
            we&apos;ve got a film lineup to cater to all tastes. Save the date
            and bring your favorite snacks to make it a memorable evening.
          </p>
          <button className="btn">Join</button>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <span>8.5</span>
              <div>
                <h2>The Queen&apos;s Gambit</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>9.5</span>
              <div>
                <h2>Breaking Bad</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>8.1</span>
              <div>
                <h2>Wednesday</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>8.7</span>
              <div>
                <h2>Stranger Things</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>8.6</span>
              <div>
                <h2>Anne with an E</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>8.9</span>
              <div>
                <h2>Friends</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>8.6</span>
              <div>
                <h2>The Crown</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>8.7</span>
              <div>
                <h2>House M.D.</h2>
              </div>
            </div>

            <div className="swiper-slide">
              <span>9.2</span>
              <div>
                <h2>Game of Thrones</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Testimonials;
