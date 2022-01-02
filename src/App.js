import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FileSearch from "./component/FileSearch";
function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="row">
          <div className="col-3 bg-light left-panel">
            <FileSearch title="我的云文档" onFileSearch={() => {}}></FileSearch>
          </div>
          <div className="col-9 bg-primary right-panel">
            <h1>this is the right</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
