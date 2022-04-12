(() => {
  let myDynamicVar: any;
  myDynamicVar = 232;
  myDynamicVar = '232';
  myDynamicVar = {};

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string)
  const rts = (<number>myDynamicVar)

})();
