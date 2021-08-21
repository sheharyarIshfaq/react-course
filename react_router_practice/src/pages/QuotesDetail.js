import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuotesDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;

  const {sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  useEffect(()=>{
    sendRequest(quoteId);
  }, [sendRequest, quoteId])

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={match.url} exact>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuotesDetail;
