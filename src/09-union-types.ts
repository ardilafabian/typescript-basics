(() => {
  let myUserId: number | string;
  myUserId = 112;
  myUserId = 'salvhjbea'

  function greeting(mytext: string | number) {
    if (typeof mytext === 'string') {
      mytext.toLowerCase();
    } else {
      mytext.toFixed();
    }
  }
  greeting('qwd')
  greeting(12334)

})();
