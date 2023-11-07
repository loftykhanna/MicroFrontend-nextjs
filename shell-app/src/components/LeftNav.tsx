// components/LeftNav.tsx
import Link from "next/link";
import "./LeftNav.module.css"

const LeftNav: React.FC = () => {
  return (
    <nav className="left-nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/study">Study</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashbaord</Link>
        </li>
         
      </ul>
    </nav>
  );
};

export default LeftNav;
