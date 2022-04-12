(() => {
  // Alias type
  type UserId = number | string | boolean;
  let myUserId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      userId.toLowerCase();
    }
  }

  // Literal types
  type Sizes = 'S' | 'M' | 'XL'
  let shirtSize: Sizes;
  shirtSize = 'M'
  shirtSize = 'S'
  shirtSize = 'XL'
})();
