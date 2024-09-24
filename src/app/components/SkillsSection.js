// src/app/components/SkillsSection.js
const SkillsSection = ({ skills }) => (
  <div className="col-md-6">
    <div
      className="card bg-light mb-3 w-100 d-flex align-items-stretch"
      style={{ minHeight: "300px" }}
    >
      <div className="card-body">
        <h1 className="card-title fw-bold">Skills</h1>
        {skills.map((item, index) => (
          <div key={index} className="mb-4">
            <h6>{item.skill}</h6>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${item.percentage}%` }}
                aria-valuenow={item.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {item.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
