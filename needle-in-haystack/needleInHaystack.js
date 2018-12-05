module.exports = function needleInHaystack(haystack) {

  const include = haystack.includes('needle');


  if (include == true) {
    return haystack.indexOf('needle')

  } else {

    return false;
  }



}



