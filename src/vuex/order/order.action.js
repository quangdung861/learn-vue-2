export * from "./actionType";

const action = {
  getOrderListAction(context) {
    context.commit("GET_ORDER");
  },
  updateOrderAction({ commit }, productName) {
    commit("UPDATE_ORDER", productName);
  },
  updateProductNameAction({ commit }, { productName, id }) {
    // Thực hiện các xử lý logic nếu cần
    // Gọi mutation và truyền dữ liệu
    commit("UPDATE_PRODUCT_NAME", { productName, id });
  },
};

export default action;
