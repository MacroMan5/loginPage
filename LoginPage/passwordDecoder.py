def get_password():
    # The resultant values after each character of the password is added to 0xCAFE
    resultant_values = [51999, 52046, 52030, 52081, 52081, 52085, 52014, 52080, 52034]

    password = ""
    for val in resultant_values:
        # Subtract 0xCAFE from each value to get the ASCII code of the character
        ascii_code = val - 0xCAFE

        # Convert the ASCII code to the character and add it to the password string
        password += chr(ascii_code)

    return password

print(get_password())
