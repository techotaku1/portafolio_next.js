import Image from "next/image";
import Link from "next/link";

const PortfolioSection = ({ portfolio }) => (
  <div className="card card-body bg-dark">
    <div className="row ">
      <div className="col-md-12">
        <h1 className="text-center text-light ">Portfolio</h1>
      </div>

      {portfolio.map((project, index) => (
        <div className="col-md-4 p-2" key={index}>
          <div className="card h-100 ">
            <div className="overflow">
              <Image
                src={project.image}
                alt={project.title}
                width={180}
                height={180}
                className="card-img-top"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <h3 className="text-title">{project.title}</h3>
              <p className="text-description">{project.description}</p>
              <Link href="#" className="btn btn-outline-secondary">
                Know More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="col-md-12 ">
      <Link href="/portfolio" className="btn btn-outline-light mt-2 ">
        Mas Proyectos
      </Link>
    </div>
  </div>
);
export default PortfolioSection;
