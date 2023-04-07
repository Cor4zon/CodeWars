function isSubstring(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        let flag = true;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[i]) {
                 continue;
            }
            flag = false;
        }
        if (flag) {
          return true;
        }
    }
}
