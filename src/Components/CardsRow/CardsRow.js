import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../constants/constants";
function CardsRow() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((response) => {
        setMovies(response.data.results[1]);
      })
      .catch((err) => {
        alert("network error");
      });
  }, []);

  return (
    <div className="row">
      <h2></h2>
      <div className="posters">
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
        <img
          className="poster"
          src="https://occ-0-6501-3662.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABY2ExtP1qHVx2JYxGNlRJj-zIEg-Wcay8IAygnTrWyvmegQYTGaStwmbSZHYV_lsGX3qaQtQUYZteL6CJ8s40TovfDvcQZlZ6xIVsjbrLifJMOjzmpsqbgT8JC1U4rkQ9UgTitj6y6hZpnt2Xj43cDwBXwv_HE-3FbPuD_tnDFRhub3ao2ITbZrEJstBQCGzvHOPAqMS8DGWp_X3aRvqUfC5h2F7DkB8c1gcUpi1KqABADcqzmeEaQAK06Lv69qFzdNZQtE-R4d3AW81etA5KtBqk9uk3vuRSl5Qh2GRa8Tqz5nGjVYNPRdzag.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default CardsRow;
