import React from 'react';
import ContentLoader from 'react-content-loader';


function Loading() {
    return (
        <ContentLoader 
        speed={2}
        width={250}
        height={280}
        viewBox="0 0 250 280"
        backgroundColor="#ffffff"
        foregroundColor="#99c8ee">
            <rect x="20" y="170" rx="8" ry="8" width="222" height="20" /> 
            <rect x="20" y="230" rx="8" ry="8" width="222" height="20" /> 
            <rect x="20" y="110" rx="8" ry="8" width="222" height="20" /> 
            <rect x="20" y="50" rx="8" ry="8" width="222" height="20" />
        </ContentLoader>
    );
  }
  
  export default Loading;