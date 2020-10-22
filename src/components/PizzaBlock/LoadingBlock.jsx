import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="143" cy="123" r="113" width="260" height="260" />
            <rect x="0" y="250" rx="6" ry="6" width="280" height="26" />
            <rect x="0" y="286" rx="6" ry="6" width="280" height="84" />
            <rect x="5" y="390" rx="6" ry="6" width="91" height="31" />
            <rect x="129" y="380" rx="20" ry="20" width="150" height="44" />
        </ContentLoader>
    );
}

export default LoadingBlock;