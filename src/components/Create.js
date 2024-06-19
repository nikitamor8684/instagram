import React from "react";

function Create() {
  return (
    <>
      <div className="create-container">
        <h3 className="create-h3">Create new post</h3>
        <hr className="create-hr" />
        <div>
          <span className="create-span1">
            <i className="bi bi-image"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              class="bi bi-image"
              viewBox="0 0 16 16"
            >
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z" />
            </svg>
          </span>
          <span className="create-span2">
            <i className="bi bi-file-play"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              fill="currentColor"
              class="bi bi-file-play"
              viewBox="0 0 16 16"
            >
              <path d="M6 10.117V5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43z" />
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
            </svg>
          </span>
        </div>
        <h6 className="create-h6">Drag photos and videos here</h6>
        <label for="files" className="create-label">
          Select from Computer
        </label>
        <input type="file" id="files" />
      </div>
    </>
  );
}

export default Create;
