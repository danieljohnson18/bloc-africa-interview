import React from "react";

const TestList = ({ Blood, Lungs, Arm }) => {
  return (
    <div>
      <h4 className="activity">Recent Activity</h4>
      <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <span>
            <img src={Blood} className="test" />
          </span>
          <div class="ms-2 me-auto">
            <div class="fw-bold">HIV Blood Draw Test</div>
          </div>
          <span>A100</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <span>
            <img src={Lungs} className="test" />
          </span>
          <div class="ms-2 me-auto">
            <div class="fw-bold">TB Radiology XRay</div>
          </div>
          <span>A31</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <span>
            <img src={Arm} className="test" />
          </span>
          <div class="ms-2 me-auto">
            <div class="fw-bold">Blood Pressure Check</div>
          </div>
          <span>A10</span>
        </li>
      </ol>
      <h4 className="activity"></h4>
    </div>
  );
};

export default TestList;
