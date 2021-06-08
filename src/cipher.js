const cipher = {
  // ...
  encode(offset, string) {
    if (string === undefined || typeof offset !== 'number' || string === 0 || string === null) {
      throw new TypeError('bad arguments');
    }
    let result = '';
    for(let i=0; i<string.length; i++){
      const Str2Asc = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
      const Asc2Str = String.fromCharCode(Str2Asc);
      result = result.concat(Asc2Str);
    }
    return result;
  },

  decode(offset, string) {
    if (string === undefined || typeof offset !== 'number' || string === 0 || string === null) {
      throw new TypeError('bad arguments');
    }
    let result = '';
    offset = offset > 26 ? 26 - (offset - 26) : 26 - offset;

    for(let i=0; i<string.length; i++){
      const Str2Asc = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
      const Asc2Str = String.fromCharCode(Str2Asc);
      result = result.concat(Asc2Str);
    }
    return result;
  }
};

export default cipher;
