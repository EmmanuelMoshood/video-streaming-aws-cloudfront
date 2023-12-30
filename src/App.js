import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Video Streaming Service</h2>
        <video width="700px" height="400px" controls>
          <source
            src="https://d37z0ea0bvm13w.cloudfront.net/Formula%201.mp4"
            type="video/mp4"
          />
        </video>
        <p>
          <a
            className="App-link"
            href="https://medium.com/@moshoodemmanuel27/investigating-the-architecture-of-video-streaming-giants-619772641851"
          >
            Read article here
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
