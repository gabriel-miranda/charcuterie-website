import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';
import { withRouter } from 'next/router';
import { BASE_URL } from 'config';

const DEFAULT_METADATA = {
  title: 'Las 4 B - Distribuidora de fiambres y embutidos',
  description: 'Desde Esperanza, cuna del trabajo nuestros productos respetan una receta con más de 60 años de perfeccionamiento, elaborando Fiambres que se destacan por su noble sabor y genuina calidad',
  robots: 'all',
  hrefLang: 'es',
  image: '/static/image',
};

const Head = ({
  metadata,
  router,
}) => {
  const {
    title,
    description,
    image,
  } = metadata;
  const url = `${BASE_URL}${router.asPath.split('?')[0]}`;
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
      <meta name="description" content={description} />
      <meta property="og:locale" content="es" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Las 4B" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:width" content="1024" />
      <meta name="twitter:image:height" content="512" />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="es" href={url} />
    </NextHead>
  );
};

Head.propTypes = {
  metadata: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  router: PropTypes.shape({
    asPath: PropTypes.string,
  }).isRequired,
};

Head.defaultProps = {
  metadata: DEFAULT_METADATA,
};

export default withRouter(Head);
