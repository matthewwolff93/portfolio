import {Route, useLocation} from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';

import Home from './home';
import Skills from './skills';
import Employment from './employment';
import Education from './education';
import Community from './community';

export default function Routes() {
  const location = useLocation();
  return (
    <SlideRoutes location={location} duration={400} pathList={['/', '/skills', '/employment', '/education', '/community']}>
      <Route path='/skills' component={Skills} />
      <Route path='/employment' component={Employment} />
      <Route path='/education' component={Education} />
      <Route path='/community' component={Community} />
      <Route exact path='/' component={Home} />
    </SlideRoutes>
  );
}
