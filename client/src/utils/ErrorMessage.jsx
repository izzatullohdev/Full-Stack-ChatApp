export const showToast = (setToast, message, duration = 3000) => {
  setToast({ message, visible: true });

  // Xabarni belgilangan vaqtdan keyin yashirish
  setTimeout(() => {
    setToast({ message: "", visible: false });
  }, duration);
};
