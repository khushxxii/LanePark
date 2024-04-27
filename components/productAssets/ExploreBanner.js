import React from 'react';
import Link from 'next/link';

export default class ExploreBanner extends React.Component {
  constructor(props) {
    super(props);

    this.exploreContainer = React.createRef();
    this.image = React.createRef();

    this.handleScroll = this.handleScroll.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    window.requestAnimationFrame(this.animate);
  }

  animate() {
    if (!this.exploreContainer.current || !this.image.current) {
      return;
    }
    const dimensions = this.exploreContainer.current.getBoundingClientRect();
    const x = window.matchMedia('(min-width: 768px)');

    if (x.matches) {
      if (dimensions.top - window.innerHeight < 0 && dimensions.bottom > 0) {
        const scrolledRatio =
          (window.innerHeight - dimensions.top) / window.innerHeight - 1;

        this.image.current.style.transform = `translateY(${685 - scrolledRatio * 50}px) scale(0.8)`;
      }
    }
  }

  render() {
    return (
      <div className="py-5 mb-5 explore-banner" style={{backgroundColor: "#f5f5f5"}}>
        <div className="bg-light position-relative py-md-5">
          <div className="position-md-absolute left-0 bottom-0 right-0">
            <div className="custom-container px-0">
              <div className="row">
                <div className="col-md-5 offset-md-7">
                  <div className="position-relative">
                    <div className="position-md-absolute right-0 left-0 bottom-0 mx-auto">
                      <img
                        ref={this.image}
                        src="/images/lanepark-inspired-image.jpg"
                        alt="Lanepark Collection"
                        className="explore-banner--image w-100"
                        style={{transform: 'translateY(400px) scale(0.8)'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={this.exploreContainer} className="custom-container py-md-5">
            <div className="row py-5">
              <div className="col-12 col-md-6 py-5 text-center"> {/* Added text-center for Bootstrap center alignment */}
                <p
                  className="font-size-display3 font-weight-light mb-4"
                  style={{ maxWidth: '20rem', color: "#333", margin: '0 auto' }} // Centered text by setting margin auto
                >
                  Discover Minimalist Elegance
                </p>
                <div className="d-flex justify-content-center"> {/* Flex utility to center the link */}
                  <Link href="/collection">
                    <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
                      <p className="mr-3">Explore the collection</p>
                      <img src="/icon/arrow-long-right.svg" alt="Explore" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
