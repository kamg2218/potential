import request from ".";

//사용 예제 - get
export const getInfo = (param: any) =>
  request({ url: `/info/${param.target}` });

//사용 예제 - post
export const saveInfo = (param: any) =>
  request({
    method: "post",
    url: `/info/${param.target}`,
    data: {
      ...param,
    },
  });
