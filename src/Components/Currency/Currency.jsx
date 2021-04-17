import React from "react";

const Currency = () => {
  return (
    <div>
      <div className="currency">
        <h3 className="currency-text">select currency:</h3>
      </div>

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          AFYA
        </button>
        <span className="numbers">0.00000001</span>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button class="dropdown-item" type="button">
              Action
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Another action
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </li>
        </ul>
      </div>
      <div className="send-recieve">
        <button type="button" class="btn btn-primary btn-lg">
          SEND
        </button>
        <button type="button" class="btn btn-primary btn-lg">
          RECIEVE
        </button>
      </div>
    </div>
  );
};

export default Currency;
