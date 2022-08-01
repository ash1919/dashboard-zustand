import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <div className="bg-inBlack-600 text-white">
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
