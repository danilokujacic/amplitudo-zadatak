const debounceValue = (func: () => void, timeout = 300) => {
  let timer: NodeJS.Timeout;

  timer = setTimeout(() => {
    func();
    clearTimeout(timer);
  }, timeout);
};

export default debounceValue;
