import React from 'react';
import ContentLoader from 'react-content-loader';

/*
  COMPONENTE FUNCIONAL SIMPLE
  ---------------------------
  En este caso no es necesario especificar el tipo de retorno de la función,
  ya que TypeScript es capaz de inferir que devolveremos un tipo ReactNode
  solo por el hecho de que que definimos la variable como un componente funcional.
*/
const PlaceholderThumb: React.FC = () => {
  return (
    <ContentLoader
      height={100}
      width={250}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="70" y="15" rx="4" ry="4" width="117" height="12" />
      <rect x="70" y="35" rx="3" ry="3" width="85" height="8" />
      <circle cx="30" cy="30" r="25" />
    </ContentLoader>
  );
};

export default PlaceholderThumb;
