import React from 'react';

const SkipLink = () => {
  return (
    <>
      <a href="#maincontent" className="skip-link">
        Skip to the main content
      </a>
      <div className="navigation">
        <h2>Navigation Content</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div id="maincontent" tabindex="-1">
        <h2>Main Content</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic,
          print, and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
    </>
  );
};

export default SkipLink;
