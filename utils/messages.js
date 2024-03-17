const responseStatusCode = require("./responseCode");
const {
  RESPONSE_CODE,
} = require("../config/constants/responseCodeConstant");

exports.successResponse = (data, res) => {
  return res.status(responseStatusCode.success).json({
    code: RESPONSE_CODE.DEFAULT,
    message: res.message,
    data: data,
  });
};
exports.failureResponse = (data, res) => {
  res.message = data.message ? data.message : data;
  return res.status(responseStatusCode.validationError).json({
    code: RESPONSE_CODE.ERROR,
    message: res.message,
  });
};