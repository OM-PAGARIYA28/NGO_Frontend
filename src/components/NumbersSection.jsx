import React, { useEffect, useState, useRef } from 'react';

const NumbersSection = () => {
  const [stats, setStats] = useState({
    visitors: 0,
    customers: 0,
    awards: 0,
    listings: 0
  });

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        startAnimation();
        setHasAnimated(true);
      }
    }, {
      threshold: 0.5
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startAnimation = () => {
    const duration = 1000;
    const updateInterval = 25;

    const targetStats = {
      visitors: 15,
      customers: 2000,
      awards: 4000,
      listings: 25
    };

    Object.keys(targetStats).forEach((key) => {
      const increment = targetStats[key] / (duration / updateInterval);
      let currentStat = 0;

      const timer = setInterval(() => {
        currentStat += increment;

        if (currentStat >= targetStats[key]) {
          setStats(prev => ({ ...prev, [key]: targetStats[key] }));
          clearInterval(timer);
        } else {
          setStats(prev => ({ ...prev, [key]: Math.round(currentStat) }));
        }
      }, updateInterval);
    });
  };

  return (
    <div className="container mx-auto py-8 mt-12 px-4 md:px-8">
      {/* Title section above the blue box */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-black">Our Work</h1> {/* Title */}
        <div className="w-full h-1 bg-orange-500 mx-auto mt-2"></div> {/* Orange underline */}
      </div>

      {/* Statistics section inside the blue box */}
      <div ref={sectionRef} className="bg-gradient-to-r from-blue-100 to-blue-300 py-12 rounded-lg shadow-lg">
        <div className="flex flex-wrap justify-center items-center mx-4 md:mx-8">
          {Object.entries(stats).map(([key, value], index) => (
            <div className="text-center flex-1 p-4 max-w-xs md:max-w-none" key={index}>
              <div className="font-extrabold text-4xl md:text-5xl text-blue-900 transition-transform duration-500 hover:scale-105">
                {value}
              </div>
              <div className="text-lg text-blue-800 capitalize mt-2">{getLabel(key)}</div>
              <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getLabel = (key) => {
  switch (key) {
    case 'visitors':
      return 'LAC CHILDREN IMPACTED';
    case 'customers':
      return 'VILLAGES REACHED OUT';
    case 'awards':
      return 'PROJECTS';
    case 'listings':
      return 'STATES';
    default:
      return '';
  }
};

export default NumbersSection;
