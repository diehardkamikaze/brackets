module.exports = function check(str, bracketsConfig) {
  var brackets;
  var i;
  var accordance;
  var elem;
  
  if (str.length % 2 != 0)
	return (false);
  i = 0;
  brackets = {};
  accordance = new Array(Math.floor(bracketsConfig.length / 2) + 1);
  while (i < bracketsConfig.length)
	  brackets[bracketsConfig[i][0]] = [bracketsConfig[i][0], bracketsConfig[i++][1]];
  i = 0;
  elem = 0;
  while (i < str.length) 
  {

	  if (brackets[str[i]] && !(accordance[elem] == brackets[str[i]][1] && brackets[str[i]][0] == brackets[str[i]][1]))
	  {
			elem++;
			accordance[elem] = brackets[str[i]][1]; 
	  }
	  else if(accordance[elem] == str[i])
	  {
		  accordance[elem] = undefined;
		  elem--;
	  }
	  else 
		  return (false);
	  i++;
  }
  if (elem == 0)
	return (true);
  return (false);
}
