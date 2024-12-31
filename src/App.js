import React, { useState, useEffect } from "react";
import "./App.css";

const Device_Icons = {
  Windows: "https://img.icons8.com/color/48/windows-10.png",
  Android: "https://img.icons8.com/color/48/android-os.png",
  IOS: "https://img.icons8.com/color/48/mac-os.png",
  Mac: "https://img.icons8.com/color/48/mac-logo.png",
};

const App = () => {
  const [executors, setExecutors] = useState([]);
  const [filters, setFilters] = useState({
    device: "All Device",
    status: "All Status",
    detection: "All Detections Type",
    key: "All Key Types",
    type: "All Price Type",
  });

  useEffect(() => {
    fetch("/executors.json")
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map((executor) => ({
          ...executor,
          pros: executor.pros || [],
          neutral: executor.neutral || [],
          cons: executor.cons || [],
          buylink: executor.buylink || "",
          Developer: executor.Developer?.map((collaborator) => ({
            ...collaborator,
            isActive: false,
          })) || [],
        }));
        setExecutors(updatedData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);


  const Filter_Change = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  const DD_Executors = executors.filter((executor) => {
    const matchesDevice =
      filters.device === "All Device" || executor.device.includes(filters.device);
    const matchesStatus =
      filters.status === "All Status" || executor.status === filters.status;
    const matchesDetection =
      filters.detection === "All Detections Type" || executor.Detection === filters.detection;
    const matchesKey =
      filters.key === "All Key Types" ||
      (filters.key === "Has Key" && executor.Key) ||
      (filters.key === "No Key" && !executor.Key);
    const matchesType =
      filters.type === "All Price Type" || executor.Type === filters.type;

    return matchesDevice && matchesStatus && matchesDetection && matchesKey && matchesType;
  });

  return (
    <div className="App">
      <h1>Executor List</h1>
      <div className="filters">
        <select onChange={(e) => Filter_Change("device", e.target.value)} value={filters.device}>
          <option>All Device</option>
          <option>Windows</option>
          <option>Android</option>
          <option>IOS</option>
          <option>Mac</option>
        </select>
        <select onChange={(e) => Filter_Change("status", e.target.value)} value={filters.status}>
          <option>All Status</option>
          <option>Working</option>
          <option>Partial Working</option>
          <option>Patched</option>
        </select>
        <select onChange={(e) => Filter_Change("detection", e.target.value)} value={filters.detection}>
          <option>All Detections Type</option>
          <option>Undetected</option>
          <option>Detected</option>
          <option>Partial Detected</option>
        </select>
        <select onChange={(e) => Filter_Change("key", e.target.value)} value={filters.key}>
          <option>All Key Types</option>
          <option>Has Key</option>
          <option>No Key</option>
        </select>
        <select onChange={(e) => Filter_Change("type", e.target.value)} value={filters.type}>
          <option>All Price Type</option>
          <option>Free</option>
          <option>Freemium</option>
          <option>Paid</option>
        </select>
      </div>
      <div className="executor-grid">
        {DD_Executors.map((executor, executorIndex) => (
          <div key={executorIndex} className="executor-card">
            <div className="executor-header">
              {executor.logo ? (
                <img src={executor.logo} alt="Executor Logo" className="executor-logo" />
              ) : (
                <div className="executor-placeholder"></div>
              )}
              <hr />
              <div className="executor-title">
                <h2>{executor.name}</h2>
                <div className="device-icons">
                  {executor.device.map((device, i) => (
                    <img key={i} src={Device_Icons[device]} alt={device} title={device} />
                  ))}
                </div>
              </div>
            </div>

            <div className="executor-details">
              <div className={`tag badge status ${executor.status.toLowerCase().replace(" ", "-")}`}>
                <span>Status:</span> <strong>{executor.status}</strong>
              </div>
              <div
                className={`tag badge detection ${executor.Detection.toLowerCase().replace(" ", "-")}`}
              >
                <span>Detection:</span> <strong>{executor.Detection}</strong>
              </div>
              <div className="tag badge type">
                <span>Type:</span> <strong>{executor.Type}</strong>
              </div>
              <div className="tag badge key">
                <span>Key:</span> <strong>{executor.Key ? "Yes" : "No"}</strong>
              </div>
            </div>

            <div className="executor-descriptions">
              <h3 className="pros">Pros:</h3>
              <ul>
                {executor.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
              <h3 className="neutral">Neutral:</h3>
              <ul>
                {executor.neutral.map((neutral, i) => (
                  <li key={i}>{neutral}</li>
                ))}
              </ul>
              <h3 className="cons">Cons:</h3>
              <ul>
                {executor.cons.map((con, i) => (
                  <li key={i}>{con}</li>
                ))}
              </ul>
            </div>
            <div className="button-container">
              {executor.discord && (
                <a href={executor.discord} target="_blank" rel="noopener noreferrer">
                  <button className="discord-button">
                    <img src="https://img.icons8.com/color/48/discord-logo.png" alt="Discord" />
                    Discord
                  </button>
                </a>
              )}
              {executor.website && (
                <a href={executor.website} target="_blank" rel="noopener noreferrer">
                  <button>Website</button>
                </a>
              )}
              {executor.buylink && (
                <a href={executor.buylink} target="_blank" rel="noopener noreferrer">
                  <button>Buy</button>
                </a>
              )}
            </div>
            <div className="collaborators">
              {executor.Developer.slice(0, 3).map((collaborator, collaboratorIndex) => (
                <div key={collaboratorIndex}>
                  <div className="collaborator">
                    <img
                      className="collaborator-pfp"
                      src={collaborator.pfp}
                      alt={collaborator.name}
                      title={collaborator.name}
                    />
                    <span className="collaborator-name">{collaborator.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
