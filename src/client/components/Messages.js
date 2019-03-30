const Messages = messages => {
  const { data } = messages;
  let msg = '';

  if (data.error !== undefined) {
    return data.error.message;
  }

  data.map(item => {
    const { message } = item;
    msg += message + ';';
  });
  return msg;
};

export default Messages;

export const MessageError = e => {
  console.log('kadasdjkljasd');
  if (e.response == undefined) {
    console.log(e);
    return 'Network error';
  }
  const { data } = e.response;
  let msg = '';

  data.map(item => {
    const { message } = item;
    msg += message + ';';
  });
  return msg;
};

export const MessageErrorArray = e => {
  if (e.response == undefined) {
    return ['Network error'];
  }
  const { data } = e.response;
  return data;
};

export const FieldMessage = (messages, field) => {
  const fieldMessage = messages.filter(item => item.field === field);
  let msg = '';
  fieldMessage.map(item => {
    const { message } = item;
    msg += message + ';';
  });
  return msg;
};

export const FieldHasError = (messages, field) => {
  let fieldMessage = messages.filter(item => item.field === field);
  return fieldMessage.length ? true : false;
};
