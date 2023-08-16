import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // You can create a CSS file for styling
import { ArrowUpOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Tooltip color="#87d068" placement="left" title={"Go To Top"}>
        <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        >
        <span className="icon-containerScroll">
            <ArrowUpOutlined />
        </span>
        </button>
    </Tooltip>
  );
};

export default ScrollToTopButton;
