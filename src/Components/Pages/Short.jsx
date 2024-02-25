import React,{useState} from 'react'

const Short = () => {

    const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace "YOUR_APP_ID" with your Wolfram Alpha app ID
    const appId = "YOUR_APP_ID";
    const apiUrl = `http://api.wolframalpha.com/v1/result?appid=${appId}&i=${encodeURIComponent(query)}`;

    fetch(apiUrl)
      .then((response) => response.text())
      .then((data) => setAnswer(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <section className="hero__section">
        <Container>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Wolfram Alpha Q&A</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="query" className="form-label">
                    Question
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="query"
                    placeholder="Ask a question"
                    value={query}
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Get Answer
                </button>
              </form>
              {answer && (
                <div className="mt-4">
                  <h5 className="text-center">Answer:</h5>
                  <p className="text-center">{answer}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
        </Container>
    </section>
  )
}

export default Short