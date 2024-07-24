import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

interface SeoProps {
  title?: string;
}

export const Seo: FC<SeoProps> = (props) => {
  const { title } = props;

  const fullTitle = title ? title + ' | SISTEMA ESTADÍSTICO ELECTORAL  CNE' : 'SISTEMA ESTADÍSTICO ELECTORAL  CNE';

  return (
    <Helmet>
      <title>{fullTitle}</title>
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string,
};
