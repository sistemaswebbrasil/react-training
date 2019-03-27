const Messages = messages => {
  const { data } = messages;
  let msg = '';
  data.map(item => {
    const { message } = item;
    msg += message + ';';
  });
  return msg;
};

export default Messages;
