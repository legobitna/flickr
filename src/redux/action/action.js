const getData = () => async (dispatch) => {
  try {
    dispatch({ type: "REQUEST_START" });

    let url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json`;
    const response = await fetch(url);
    const data = await response.json();

    dispatch({ type: "REQUEST_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "REQUEST_FAIL", payload: err.message });
  }
};

export const actions = { getData };
