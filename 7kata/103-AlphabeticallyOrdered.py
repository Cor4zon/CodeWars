def alphabetic(s):
    sorted_str = sorted(s)
    sorted_str = ''.join(sorted_str)
    if (s == sorted_str):
        return True
    return False
