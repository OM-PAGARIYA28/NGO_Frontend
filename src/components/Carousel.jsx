import React from 'react';
import '../Carousel.scss';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE_PARTS = 4;
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={`slider ${sliderReady ? 's--ready' : ''}`}>
        <div className="slider__slides">
          {this.props.slides.map((slide, index) => (
            <div
              className={`slider__slide ${activeSlide === index ? 's--active' : ''} ${prevSlide === index ? 's--prev' : ''}`}
              key={slide.Field}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{slide.Description}</h3>
                <h2 className="slider__slide-heading">
                  {slide.Field.split('').map((l, i) =>
                    <span key={i} style={{ whiteSpace: l === ' ' ? 'pre' : 'normal' }}>{l}</span>
                  )}
                </h2>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS)].map((_, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}

const slides = [
  {
    Field: 'Education',
    Description: 'Help children access quality education through our "Shiksha Na Ruke" initiative.',
    img: 'https://images.pexels.com/photos/6713534/pexels-photo-6713534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    Field: 'Healthcare',
    Description: 'Our "Health Cannot Wait" program ensures accessible healthcare services for rural communities.',
    img: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    Field: 'Women Empowerment',
    Description: 'Empower girls through "She Can Fly" by providing education, health, and vocational training.',
    img: 'https://images.pexels.com/photos/1181609/pexels-photo-1181609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export { slides };
export default function App() {
  return <Carousel slides={slides} />;
}
