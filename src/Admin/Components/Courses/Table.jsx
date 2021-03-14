import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableHead from "@material-ui/core/TableHead";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(1.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
const GradesComp = (
  <div className="Table__Grades">
    <h4>View Work</h4>
    <div>
      <input type="number" />
      /100
    </div>
    <div>
      <div />
      <div />
    </div>
  </div>
);

const coment = (
  <form className="Table__comment">
    <input type="text"/>
    <div className="Table__comment--Btn BG"/>
  </form>
);

const Img = (stilimi) => {
  const arr = [0, 1, 2, 3, 4];
  return (
    <div className={`${stilimi} Table__submited`}>
      {arr.map((index) => (
        <div key={index + 1} className={`Table__submited__img${index + 1} BG`}>
        </div>
      ))}
    </div>
  );
};

const icons = (
  <div className="Table__icons">
    <div /><div /><div />
  </div>
)

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(id, title, DueDate, Submitted, Grades, Comment, btns) {
  return { id, title, DueDate, Submitted, Grades, Comment, btns };
}

const rows = [
  createData(
    "01",
    "Design Something Similar",
    "06 Dec 2020",
    Img("aaa"),
    GradesComp,
    coment,
    icons
  ),
  createData(
    "02",
    "Basic Shape Combination",
    "10 Dec 2020",
    Img("sStyle1"),
    GradesComp,
    coment,
    icons
  ),
  createData(
    "03",
    "Simple User Interface",
    "14 Dec 2020",
    Img("sStyle2"),
    GradesComp,
    coment,
    icons
  ),
  createData(
    "04",
    "Research About the Client",
    "18 Dec 2020",
    Img("sStyle3"),
    GradesComp,
    coment,
    icons
  ),
  createData(
    "05",
    "Basic Shape Combination",
    "23 Dec 2020",
    Img("sStyle4"),
    GradesComp,
    coment,
    icons
  ),
  createData(
    "06",
    "Design Something Similar",
    "28 Dec 2020",
    Img("sStyle5"),
    GradesComp,
    coment,
    icons
  ),
];
//   nese don sort
//   ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
    "& .MuiTableCell-root": {
      padding: "8px",
    },
  },
  IDcol: {
    color: "#EB8341",
    fontWeight: "bold",
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableHead>
          <TableRow className="Table__head">
            <TableCell>Task</TableCell>
            <TableCell></TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Submitted</TableCell>
            <TableCell>Grades</TableCell>
            <TableCell /* align="right" */>Leave a Comment</TableCell>
            <TableCell ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.id} hover={true}>
              <TableCell component="th" scope="row" className={classes.IDcol}>
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row" align="left">
                {row.title}
              </TableCell>
              <TableCell component="th" /* align="center" */>
                {row.DueDate}
              </TableCell>
              <TableCell component="th" align="center">
                {row.Submitted}
              </TableCell>
              <TableCell component="th" align="center">
                {row.Grades}
              </TableCell>
              <TableCell /* style={{ width: 120 }} */>
                {row.Comment}
              </TableCell>
              <TableCell /* style={{ width: 120 }} */ >
                {row.btns}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow align="right">
            <TablePagination
              rowsPerPageOptions={[4, 8, 16, { label: "All", value: -1 }]}
              colSpan={7}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { "aria-label": "rows per page" },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
