const Messages = messages => {
  const { data } = messages;
  let msg = '';

  if (data.error !== undefined){
    return data.error.message
  }

  data.map(item => {
    const { message } = item;
    msg += message + ';';
  });
  return msg;
};

export default Messages;
