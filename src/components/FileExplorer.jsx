import React, { useState } from "react";
import BackToHome from "./BackToHome";

const FileExplorer = ({ explorer }) => {
  const [fileExplorer, setFileExplorer] = useState(explorer);
  const [expand, setExpand] = useState(false);
  const [createNew, setCreateNew] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewButtonsClick = (e, input) => {
    e.stopPropagation();
    setExpand(true);
    setCreateNew({
      visible: true,
      isFolder: input,
    });
  };

  //   const handleDeleteFolder = (e, id) => {
  //     e.stopPropagation();
  //     setCreateNew({ ...createNew, visible: false });
  //     console.log(id, fileExplorer);
  //     setFileExplorer({});
  //   };

  const isAddNew = (e, isFolderFlag) => {
    if (e.keyCode === 13 && e.target.value) {
      setCreateNew({ ...createNew, visible: false });
      const newExplorer = {
        id: Math.floor(Math.random() * 1000),
        name: e.target.value,
        items: [],
        isFolder: isFolderFlag,
      };
      const newItems = [...fileExplorer.items, newExplorer].sort((a, b) => {
        return !a.isFolder - !b.isFolder || a["name"].localeCompare(b["name"]);
      });
      setFileExplorer({
        ...fileExplorer,
        items: newItems,
      });
    }
  };
  if (fileExplorer.isFolder) {
    return (
      <div className="text-lg w-[400px] py-1">
        <div
          className="bg-gray-300 cursor-pointer flex justify-between"
          onClick={() => setExpand(!expand)}
        >
          <span>🗂️ {fileExplorer?.name}</span>
          <div className="text-base">
            <button
              className="px-1 border border-black mr-1"
              onClick={(e) => handleNewButtonsClick(e, true)}
            >
              Folder +
            </button>
            <button
              className="px-1 border border-black mr-1"
              onClick={(e) => handleNewButtonsClick(e, false)}
            >
              File +
            </button>
            {/* <button
              className="px-1 border border-black mr-1"
              onClick={(e) => handleDeleteFolder(e, fileExplorer?.id)}
            >
              🗑️
            </button> */}
          </div>
        </div>
        <div className="pl-7" style={{ display: expand ? "block" : "none" }}>
          {createNew.visible && (
            <div>
              <span>{createNew.isFolder ? "🗂️" : "📄"}</span>
              <input
                autoFocus
                onBlur={() => setCreateNew({ ...createNew, visible: false })}
                type="text"
                className="border border-black ml-1"
                onKeyDown={(e) => isAddNew(e, createNew.isFolder)}
              />
            </div>
          )}
          {fileExplorer?.items?.map((subExp) => {
            return <FileExplorer explorer={subExp} key={subExp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <div>📄{fileExplorer.name}</div>;
  }
};

export default FileExplorer;
