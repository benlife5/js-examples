import "./App.css";

const promise = fetch("https://opentdb.com/api.php?amount=10");
console.log("first-promise", promise);
promise.then((res) => {
  console.log("first-results", res);
  const nextPromise = res.json();
  console.log("next-promise", nextPromise);
  nextPromise.then((json) => console.log("json-results", json.results));
});

fetch("https://opentdb.com/api.php?amount=10").then((res) =>
  res.json().then((json) => console.log("streamlined-line-results", json.results))
);

const failedPromise = fetch("https://brokenurl.com");
console.log("failed-promise", failedPromise);
failedPromise.catch((err) => console.log("failed-promise-error", err));

fetch("https://opentdb.com/api.php?amount=10")
  .then((res) => {
    res
      .json()
      .then((json) => {
        console.log("properly-spaced-results", json.results);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

const asyncFunction = async () => {
  const apiResults = await fetch("https://opentdb.com/api.php?amount=10");
  const apiJSON = await apiResults.json();
  console.log("async-results", apiJSON.results);
  return apiJSON.results; // add later
};
asyncFunction();

const safeAsyncFunction = async () => {
  try {
    const apiResults = await fetch("https://brokenurl.com");
    const apiJSON = await apiResults.json();
    console.log("async-results", apiJSON.results);
  } catch (err) {
    console.log("async-error", err);
  }
};
safeAsyncFunction();

const myPromise = asyncFunction();
console.log("my-promise", myPromise);
myPromise.then((res) => console.log("myPromise-result", res[0]));

const promise1 = fetch("https://opentdb.com/api.php?amount=10");
const promise2 = fetch("https://opentdb.com/api.php?amount=10");
const promise3 = fetch("https://brokenurl.com");

Promise.all([promise1, promise2, promise3])
  .then((allRes) => console.log("promise-chain-results", allRes))
  .catch((err) => console.log("promise-chain-error", err));

function App() {
  return <div className="App"></div>;
}

export default App;
