import React, { useEffect,useRef } from 'react'
import Header from '../components/Header'
import './home.css'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import ride1 from '../assets/images/ride1.png'
import ride2 from '../assets/images/ride2.png'
import ride3 from '../assets/images/ride3.png'
import ride4 from '../assets/images/ride4.png'
import ride5 from '../assets/images/ride5.png'
import ride6 from '../assets/images/ride6.png'

// Register plugin
gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);


const Home = () => {
  const subref = useRef(null);
  const subref1 = useRef(null);
  const subref2 = useRef(null);
  const ride1Ref = useRef(null);
  const ride2Ref = useRef(null);
  const ride3Ref = useRef(null);
  const ride4Ref = useRef(null);
  const ride5Ref = useRef(null);
  const ride6Ref = useRef(null);
  const headRef = useRef(null);
    useEffect(
    () => {
      console.log('booking page loaded');
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 0.2,
        ease: "none"
      });
    }
    , [Infinity])

  useEffect(() => {

    gsap.fromTo("h1", { y: '100%', opacity: '0' }, { opacity: '1', y: '0%', duration: 1, delay: 1, ease: 'power2.out', stagger: 0.3 });
    const element = subref.current;
    const element1 = subref1.current;
    const element2 = subref2.current;


    gsap.fromTo(element, { y: '100%', opacity: '0' }, {
      opacity: '1', y: '0%', duration: 1, delay: 2, ease: 'power2.out', scrollTrigger: {
        trigger: element,
        start: "-110% 20%",
        end: "10% 80%",
        scrub: true,
        // markers: true,
      }
    });
    gsap.fromTo(element1, { x: '-100%', opacity: '0' }, {
      opacity: '1', x: '0%', duration: 1, delay: 2, ease: 'power2.out', scrollTrigger: {
        trigger: element1,
        start: "-70% 30%",
        end: "60% 80%",
        scrub: true,
        // markers: true,
      }
    });
    gsap.fromTo(element2, { x: '100%', opacity: '0' }, {
      opacity: '1', x: '0%', duration: 1, delay: 2, ease: 'power2.out', scrollTrigger: {
        trigger: element2,
        start: "-70% 30%",
        end: "50% 80%",
        scrub: true,
        // markers: true,
      }
    });
    gsap.from(ride1Ref.current, {
      y: '6vh', opacity: 0, scale: 0.95, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: ride1Ref.current, start: '20% 75%', end: '50% 40%',  }
    });

    gsap.from(ride2Ref.current, {
      y: '6vh', opacity: 0, scale: 0.95, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: ride2Ref.current, start: '20% 75%', end: '50% 40%',  }
    });

    gsap.from(ride3Ref.current, {
      y: '6vh', opacity: 0, scale: 0.95, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: ride3Ref.current, start: '20% 75%', end: '50% 40%',  }
    });

    gsap.from(ride4Ref.current, {
      y: '6vh', opacity: 0, scale: 0.95, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: ride4Ref.current, start: '20% 75%', end: '50% 40%',  }
    });

    gsap.from(ride5Ref.current, {
      y: '6vh', opacity: 0, scale: 0.95, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: ride5Ref.current, start: '20% 75%', end: '50% 40%',  }
    });

    gsap.from(ride6Ref.current, {
      y: '6vh', opacity: 0, scale: 0.95, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: ride6Ref.current, start: '20% 75%', end: '50% 40%',  }
    });
    gsap.from(headRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 5.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: headRef.current,
        start: '50% 60%',
        end: '100% 35%',
        scrub: true,
      }
    });


  });

  return (
    <div>
      <Header />
      <div id="page">
        <div id="main">
          <div className="title">
            <h1>YOUR ADVENTURE<br /></h1>
            <h1 className='masked-text tracking-wider'><span className='sp'>STARTS HERE...</span></h1>
            {/* <div id="sub">
              <h5>
                  <ul style="list-style:square;">
                      <li>Discover & Book Unforgettable Trips The World's Best Amusement Parks & Adventure
                          Parks...
                      </li>
                  </ul>
              </h5>
          </div> */}
          </div>
        </div>
      </div>
      <div className="page" id="page2">
        <div id="sub" ref={subref}>
          <h4>Discover and Book unforgettable trips to the worlds best Amusement and Adventure parks — all in one
            place...</h4>
        </div>
      </div>
      <div>
        <div>
          <div className="page" id="page3">
            <div id="sub" ref={subref1}>
              <h4 style={{ "fontFamily": "'rpf'" }}>Go Global With Your Fun — Discover Parks That Spark Joy Everywhere...</h4>
            </div>
          </div>
          <div className="page" id="page4">
            <div id="sub" ref={subref2}>
              <h4 style={{ "fontFamily": "'rpf'" }}>Unlock the best prices on tickets, packages, and food only through trusted, official partners...</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="page1" id="page5">

        <div id="head" ref={headRef}><h3>Our Best Rides...</h3></div>
        <div className="rides">
          <div className="ride 1" ref={ride1Ref}>
            <img src={ride1} alt="ride1" className="ride-image" loading="lazy" />
            <div className="ride-text">
              <h6>Roller Coaster</h6>
              <p>Experience the thrill.</p>
            </div>
          </div>
          <div className="ride 2" ref={ride2Ref}>
            <img src={ride2} alt="ride2" className="ride-image" loading="lazy" />
            <div className="ride-text">
              <h6>Ferris Wheel</h6>
              <p>Enjoy the view.</p>
            </div>
          </div>
          <div className="ride 3" ref={ride3Ref}>
            <img src={ride3} alt="ride3" className="ride-image" loading="lazy" />
            <div className="ride-text">
              <h6>Log Flume</h6>
              <p>Get wet and wild.</p>
            </div>
          </div>
          <div className="ride 4" ref={ride4Ref}>
            <img src={ride4} alt="ride4" className="ride-image" loading="lazy" />
            <div className="ride-text">
              <h6>Carousel</h6>
              <p>Classic fun for all ages.</p>
            </div>
          </div>
          <div className="ride 5" ref={ride5Ref}>
            <img src={ride5} alt="ride5" className="ride-image" loading="lazy" />
            <div className="ride-text">
              <h6>Drop Tower</h6>
              <p>Feel the adrenaline rush.</p>
            </div>
          </div>
          <div className="ride 6" ref={ride6Ref}>
            <img src={ride6} alt="ride6" className="ride-image" loading="lazy" />
            <div className="ride-text">
              <h6>Bumper Cars</h6>
              <p>Fun collisions for everyone.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
