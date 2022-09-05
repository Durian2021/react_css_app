// import logo from './logo.svg';
import './App.css';

function App() {

  let slideIndex = 1;

  function plusSlides(n) {
    console.log("aaaaa:::" + n)
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  return (
    <div className="App">
      <div className='aaaannn'>
        <div id='flex_left'>
          aaaa
        </div>
        <div id='flex_right'>
          {/* <!-- Slideshow container --> */}
          <div className="slideshow-container">

            {/* <!-- Full-width images with number and caption text --> */}
            <div className="mySlides fade  start">
              <div className="numbertext">1 / 3</div>
              <img src="Animation2.gif" className='witdh100' alt="gif_image" ></img>
              {/* <div className="text">Caption Text</div> */}
            </div>

            <div className="mySlides fade notStart">
              <div className="numbertext ">2 / 3</div>
              <img src="Animation3.gif" className='witdh100' alt="gif_image" ></img>
              {/* <div className="text">Caption Two</div> */}
            </div>

            <div className="mySlides fade notStart">
              <div className="numbertext">3 / 3</div>
              <img src="Animation4.gif" className='witdh100' alt="gif_image" ></img>
              {/* <div className="text">Caption Three</div> */}
            </div>

            {/* <!-- Next and previous buttons --> */}

            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
          </div>
          <br />

          {/* <!-- The dots/circles --> */}
          <div className='button_center'>
            <span className="dot active" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
