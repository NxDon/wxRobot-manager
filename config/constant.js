const constant = {
  httpCode:{
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    NOT_FOUND: 404,
    BAD_REQUEST: 400
  },
  validate:{
    err: {type: 'Text', info: '输入有误,请重新输入或输入q返回'},
    no: {type: 'Null', info: ''},
    end: {type: 'Text', info: '主题讨论终止'}
  }
};
module.exports = constant;