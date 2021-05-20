const initialState = {
  dataList: [],
  loading: false,
  errorMsg: "",
  keyword: "",
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "REQUEST_START":
      state.loading = true;
      break;

    case "REQUEST_SUCCESS":
      state.dataList = payload;
      state.loading = false;
      break;

    case "REQUEST_FAIL":
      state.loading = false;
      state.errorMsg = payload;
      break;
    case "SET_KEYWORD":
      state.keyword = payload;
      break;
  }
  return { ...state };
};

export default reducer;
