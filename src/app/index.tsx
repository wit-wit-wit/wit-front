import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'app/containers/App';
import '@picocss/pico';
import { Loading } from 'app/components/common-ui/Loading';
import { Theme } from 'app/components/common-ui/Theme';
import { FooterLayout } from 'app/components/layout/FooterLayout';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Loading />
    <Theme>
      <App />
      <FooterLayout />
    </Theme>
  </React.StrictMode>,
);
