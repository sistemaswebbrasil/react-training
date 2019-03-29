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

export const MessageError = e => {
  if(e.response == undefined){
    console.log(e.response);
    return "Network error"
  }
  const { data } = e.response;
  let msg = '';

  data.map(item => {
    const { message } = item;
    msg += message + ';';
  });
  return msg;
}
