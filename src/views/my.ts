export default {
  async foo2() {
    setTimeout(() => {
      eval("myfunc();");
    }, 1000);
    await fetch("https://www.googleeeeeeeee.com");
  }
};
