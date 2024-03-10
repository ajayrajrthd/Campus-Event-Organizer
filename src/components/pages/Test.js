import React from 'react'
import Typed from 'typed.js';

function Test() {
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['First sentence.', '&amp; a second sentence.'],
        typeSpeed: 50,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  
    return (
      <div className="App">
        <h1 ref={el} />
      </div>
    );
}

export default Test