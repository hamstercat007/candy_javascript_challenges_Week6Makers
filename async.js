
const CANDIES_DB = ['Mars', 'Maltesers', 'Skittles', 'Fraise Tagada'];

const handleResult = (result) => {
  console.log(result);
}

const fetchCandiesFromDatabase = (handleResult) => {
  // fetch candies...

  setTimeout(function() {;
    handleResult(CANDIES_DB)
  }, 2000);
}

const result = fetchCandiesFromDatabase(handleResult)



