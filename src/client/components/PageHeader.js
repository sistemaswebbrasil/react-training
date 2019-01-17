import React from 'react';
import Typography from '@material-ui/core/Typography';

const PageHeader = props => {
  return (
    <Typography variant="h3" gutterBottom>
      {props.title}
    </Typography>
  );
};

export default PageHeader;
