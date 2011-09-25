// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * unescapedURISet containing one instance of each character valid in uriReserved
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.3_encodeURI/S15.1.3.3_A3.1_T1.js
 * @description Complex tests
 */

uriReserved = [";", "/", "?", ":", "@", "&", "=", "+", "$", ","];
for (indexC = 0; indexC < uriReserved.length; indexC++) {
  var str = uriReserved[indexC];    
  if (encodeURI(str) !== str) {
    $ERROR('#' + (indexC + 1) + ': unescapedURISet containing' + str);
  }  
}
