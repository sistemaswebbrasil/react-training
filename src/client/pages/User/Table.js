import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Edit from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

function List(props) {
  const { classes, items } = props;

  const action = id => (
    <Fragment>
      <IconButton aria-label="Edit">
        <Link to={`users/${id}/edit`}>
          <Edit color="secondary" />
        </Link>
      </IconButton>
      <IconButton aria-label="Delete" onClick={() => props.handleDialog(id)}>
        <DeleteIcon color="error" />
      </IconButton>
    </Fragment>
  );

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {action(row.id)}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(List);
