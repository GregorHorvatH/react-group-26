import React from 'react';

const Layout = ({ children }) => (
  <div className="todos">
    <h2 className="title">Todos</h2>
    {children}
  </div>
);

export default Layout;
