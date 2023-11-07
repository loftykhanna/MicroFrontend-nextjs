// pages/index.tsx (or any other page)
import LeftNav from "../components/LeftNav";
import dynamic from "next/dynamic";

const Test = dynamic(() => import('Study/study'), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <div>
      <Test />
    </div>
  );
};

export default Home;
