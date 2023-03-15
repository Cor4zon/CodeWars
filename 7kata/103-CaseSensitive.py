def case_sensitive(s):
    upper_case_letters = [];
    for i in range(len(s)):
        if (s[i] != s[i].lower()):
            upper_case_letters.append(s[i])
    if (s == s.lower()):
        return [True, []]
    return [False, upper_case_letters]
