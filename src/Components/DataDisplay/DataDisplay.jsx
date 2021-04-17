import React from "react";

const DataDisplay = () => {
  return (
    <div>
      <div class="row funds-data">
        <div class="col balance">
          <div className="center-content">
            <div class="d-flex flex-column bd-highlight">
              <div class="bd-highlight">
                <span class="badge bg-light affya">AFYA</span>
              </div>
              <div class=" bd-highlight price">143.00</div>
              <div class=" bd-highlight bill">Balance</div>
            </div>
          </div>
        </div>
        <div class="col eqivalent">
          <div className="center-content">
            <div class="d-flex flex-column bd-highlight">
              <div class=" bd-highlight">
                <span class="badge bg-light text-primary zar">ZAR</span>
              </div>
              <div class=" bd-highlight price">R21.00</div>
              <div class=" bd-highlight bill">Equivalent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDisplay;
