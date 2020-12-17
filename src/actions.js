export const PUT_DATA = "PUT_DATA";

export const putData = (dataFormServer) => {
  return {
    type: PUT_DATA,
    payload: dataFormServer,
  };
};
