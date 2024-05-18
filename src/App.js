
import "./App.css";
import { useState } from "react";

function App() {
  const [isLatestOpen, setISLatestOpen] = useState(false);
  const [isWatchOpen, setWatchOpen] = useState(false);
  const [isMensOpen, setMensOpen] = useState(false);
  const [isWomensOpen, setWomensOpen] = useState(false);
  const [isTicketsOpen, setTicketsOpen] = useState(false);

  const toggleDropdownLatest = () => {
    setISLatestOpen(!isLatestOpen);
  };
  const toggleWatchDropdown = () => {
    setWatchOpen(!isWatchOpen);
  };
  const toggleMensDropdown = () => {
    setMensOpen(!isMensOpen);
  };
  const toggleWomensDropdown = () => {
    setWomensOpen(!isWomensOpen);
  };
  const toggleTicketsDropdown = () => {
    setTicketsOpen(!isTicketsOpen);
  };

  return (
    <>
      <div className="app">
        <nav className="navbar">
          <ul className="menu">
            <li className="menu-item">
              <img className="logo" src="https://img.chelseafc.com/image/upload/f_auto,c_pad,w_230,h_230,ar_1,q_auto:best/Site%20Chelsea%20Badges/Main_Website_Badge_-_Colour.png" alt=""/>
            </li>
            <li className="menu-item" onClick={toggleDropdownLatest}>
              <a className="menu-link">Lates</a>
            </li>

            <li className="menu-item" onClick={toggleWatchDropdown}>
              <a className="menu-link">Watch</a>
              
            </li>
            <li className="menu-item" onClick={toggleMensDropdown}>
              <a className="menu-link">Men's Team</a>
              
            </li>
            <li className="menu-item" onClick={toggleWomensDropdown}>
              <a className="menu-link">Women's Team</a>
              
            </li>
            <li className="menu-item" onClick={toggleTicketsDropdown}>
              <a className="menu-link">Tickets and Hospitality</a>
              
            </li>
            <li className="menu-item" onClick={toggleWatchDropdown}>
              <a className="menu-link">Shop</a>
              
            </li>
          </ul>
        </nav>
        {isLatestOpen && (
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-link" href="#">
                news
              </a>
            </li>
            <li>
              <a className="dropdown-link" href="#">
                Interviews and Features
              </a>
            </li>
            <li>
              <a className="dropdown-link" href="#">
                USA Tour 2024
              </a>
            </li>
            <li>
              <a className="dropdown-link" href="#">
                Win LJ's Signed Boots
              </a>
            </li>
          </ul>
        )}
        {isWatchOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-link" href="#">
                      Discover
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Highlights & Full Matches
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Boxsets
                    </a>
                  </li>
                </ul>
              )}
              {isMensOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-link" href="#">
                    Fixtures & Results
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Players & Staff
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    League Tables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    News
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Academy
                    </a>
                  </li>
                </ul>
              )}
              {isWomensOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-link" href="#">
                    Fixtures & Results
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Buy Tickets
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Players & Staff
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    League Tables
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    News
                    </a>
                  </li>
                </ul>
              )}
              {isTicketsOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-link" href="#">
                    Buy Tickets
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Stadium Tours & Museum
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Memberships
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Season Tickets
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-link" href="#">
                    Ticket Information
                    </a>
                  </li>
                </ul>
              )}
      </div>
    </>
  );
}

export default App;
