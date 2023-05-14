import Nav from "@components/Nav";
import "@styles/globals.css";
// import { Children } from "react/cjs/react.production.min";

export const metadata = {
  title: "Promptopia",
  discription: "write and share the AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav/>
          {children}
          </main>
      </body>
    </html>
  );
};

export default RootLayout;
