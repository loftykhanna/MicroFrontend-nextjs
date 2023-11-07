// pages/index.tsx (or any other page)
import LeftNav from "../components/LeftNav";
import dynamic from "next/dynamic";

const Test = dynamic(() => import('Dashboard/dashboard'), {
  ssr: false,
});


const Test1 = dynamic(() => import('Dashboard/main'), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div>
      <Test />
      <p>teststststst</p>
      <Test1/>
    </div>
  );
};

export default Home;
