import { Fragment } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const match = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  sortQuotes(props.quotes, isSortingAscending);

  const sortingHanlder = () => {
    history.push({
      pathname: match.path,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
    // history.push(`${match.path}?sort=${isSortingAscending ? 'desc' : 'asc'}`);
  };

  return (
    <Fragment>
      <div onClick={sortingHanlder} className={classes.sorting}>
        <button>Sort {isSortingAscending ? "Descending" : "Ascending"}</button>
      </div>
      <ul className={classes.list}>
        {props.quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
