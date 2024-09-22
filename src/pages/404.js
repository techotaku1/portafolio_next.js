import Link from "next/link";

const custom404 = () => (
  <>
    <h1>404</h1>
    <p>
      this page does not exist. Please return to.
      <Link href="/">Home</Link>
    </p>
  </>
);

export default custom404;
