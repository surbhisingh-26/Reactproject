function AppName() {
  return (
    <div className="row new-row">
      <div className="col-6">
        <input type="text" placeholder="Enter Todo here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success my-button">
          Add
        </button>
      </div>
    </div>
  );
}

export default AppName;
