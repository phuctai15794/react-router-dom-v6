import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaData = (props) => {
    const { title, keywords, description, image } = props;

    return (
        <Helmet prioritizeSeoTags>
            <title>{title}</title>
            <meta name="robots" content="index,follow" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta itemprop="name" content="React Todos App" />
            <meta itemprop="description" content={description} />
            <meta itemprop="image" content={image} />
            <meta property="og:url" content="https://phuctai-todos.vercel.app" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="React Todos App" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}

export { MetaData };