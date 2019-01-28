import React from 'react'
import Typography from '@material-ui/core/Typography';

const ContentHeader = props => {
  return <Typography variant="h4" gutterBottom component="h2">
      {props.title}
    </Typography>;
}

export default ContentHeader
