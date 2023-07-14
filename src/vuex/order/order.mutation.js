const mutation = {
  async GET_ORDER(state) {
    let data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("Thanh cong");
      }, 2000);
    });
    state.productName = data;
  },

  UPDATE_ORDER(state, productName) {
    // Sử dụng dữ liệu productName
    state.data[0].productName = productName;
  },
  UPDATE_PRODUCT_NAME(state, { productName, id }) {
    const indexOrder = state.data.findIndex((item) => item.id === id);

    state.data.splice(indexOrder, 1, {
      ...state.data[indexOrder],
      productName: productName,
    });
  },
};

export default mutation;
