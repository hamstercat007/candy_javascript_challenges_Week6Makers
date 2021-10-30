
const CANDIES_DB = ['Mars', 'Maltesers', 'Skittles', 'Fraise Tagada'];

const handleResult = (result) => {
  console.log(result);
}

const addCandy = (newCandy, onAddCandyCompleted) => {
  setTimeout(function() {
    CANDIES_DB.push(newCandy)
    onAddCandyCompleted()
  }, 3000);
}

const onAddCandyCompleted = () => {
  console.log('candy added');
  console.log(CANDIES_DB)
}

const fetchCandiesFromDatabase = (handleResult) => {
  // fetch candies...

  setTimeout(function() {;
    handleResult(CANDIES_DB)
  }, 2000);
}

const addCandyThenFetchCandies = (addCandy, fetchCandiesFromDatabase) => {
  addCandy("Snickers", onAddCandyCompleted);
  fetchCandiesFromDatabase(handleResult);
}


// const result = fetchCandiesFromDatabase(handleResult)

// addCandy('Raffaello', onAddCandyCompleted);

addCandyThenFetchCandies(addCandy, fetchCandiesFromDatabase);

