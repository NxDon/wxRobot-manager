const constant = {
  httpCode:{
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400
  },
  validate:{
    err: {type: 'Text', info: '输入有误'},
  }
};
module.exports = constant;