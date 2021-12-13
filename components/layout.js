import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <div className="Layout ">
      <Head>
        <title> </title> <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Head>
      <div className=" ml-auto mr-auto"> {children} </div>
    </div>
  );
};
export default Layout;
