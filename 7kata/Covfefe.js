function covfefe(str){
  //covfefe !
  if (!str.includes('coverage')) {
    return str + ' covfefe';
  } else {
    return str.replaceAll('coverage', 'covfefe');
  }
}
