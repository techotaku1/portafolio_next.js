const SkillsSection = ({ skills }) => (
    <div className="col-md-4 d-flex">
      <div className="card bg-light mb-3 w-100 flex-fill">
        <div className="card-body d-flex flex-column">
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
  