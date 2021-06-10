import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'
// import Users from "./Users";
export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        {/*<Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />*/}
        <Route exact path={`${APP_PREFIX_PATH}/appeals`} component={lazy(() => import(`./Users`))} />
        <Route exact path={`${APP_PREFIX_PATH}/appeals/:id`} component={lazy(() => import(`./UserDetails`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/appeals`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);