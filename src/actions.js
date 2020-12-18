export const PUT_DATA = "PUT_DATA";
export const LOAD_DATA = "LOAD_DATA";

export const putData = (dataFormServer) => {
  return {
    type: PUT_DATA,
    payload: dataFormServer,
  };
};

export const loadData = () => {
  return { type: LOAD_DATA };
};
