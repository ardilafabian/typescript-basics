(() => {
  // Alias type
  type UserId = number | string | boolean;
  let myUserId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      userId.toLowerCase();
    }
  }
})();
