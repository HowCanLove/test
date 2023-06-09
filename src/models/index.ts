
export default {
  // 定义 model 的初始 state
  state: {
    name: '',
    id: '',
  },
  // 定义改变该模型状态的纯函数
  reducers: {
    update(prevState, payload) {
      return {
        ...prevState,
        ...payload,
      };
    },
  },
  // 定义处理该模型副作用的函数
  effects: (dispatch) => ({
    setProjectName(name) {
      dispatch.global.update({
        name,
      });
    },
  }),
};
