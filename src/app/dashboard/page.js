'use client';
import Link from "next/link";

const Dashboard = () => {
    return (
      <div className="container mt-4">
        <h1>Dashboard</h1>
        <nav>
          <ul>
            <li>
              <Link href="/dashboard/blog">Ir al Blog</Link>
            </li>
            <li>
              <Link href="/dashboard/github">Ir a GitHub</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Dashboard;
  