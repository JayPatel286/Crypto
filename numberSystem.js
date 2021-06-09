function binToDec (num) {
    let dec = 0
    let i = 0
    while (num != 0) {
        dec += (num%10) * Math.pow(2, i)
        i++
        num = Math.floor(num/10)
    }
    return dec
}

function octToDec (number) {
    let base = 1
    let dec = 0
    while (number) {
        let last_digit = number % 10
        number = Math.floor(number / 10)
        dec += last_digit * base
        base *= 8
    }
    return dec
}

function hexaToDec (hexVal) {
    hexVal = hexVal.toUpperCase()
    var len = hexVal.length;
 
    var base = 1;
 
    var dec_val = 0;
    for (var i = len - 1; i >= 0; i--) {
        if (hexVal.charAt(i) >= '0'
            && hexVal.charAt(i) <= '9') {
            dec_val += (hexVal.charAt(i).charCodeAt(0) - 48) * base;
            base = base * 16;
        }
        else if (hexVal.charAt(i) >= 'A'
                 && hexVal.charAt(i) <= 'F') {
            dec_val += (hexVal.charAt(i).charCodeAt(0) - 55) * base;
 
            // incrementing base by power
            base = base * 16;
        }
    }
    return dec_val;
}

function value(r) {
    if (r == 'I')
        return 1;
    if (r == 'V')
        return 5;
    if (r == 'X')
        return 10;
    if (r == 'L')
        return 50;
    if (r == 'C')
        return 100;
    if (r == 'D')
        return 500;
    if (r == 'M')
        return 1000;
    return -1;
}

function romanToDec( str) {
    str = str.toUpperCase()
    var res = 0;

    for (i = 0; i < str.length; i++) {
        var s1 = value(str.charAt(i));

        if (i + 1 < str.length) {
            var s2 = value(str.charAt(i + 1));
            if (s1 >= s2) {
                res = res + s1;
            } else {
                res = res + s2 - s1;
                i++;
            }
        } else {
            res = res + s1;
        }
    }
    return res;
}

function decToAll (num, option) {
    switch (option) {
        // Decimal To Binary
        case 1: 
            let bin = ""
            while (num > 0) {
                bin += num % 2
                num = Math.floor(num / 2)
            }
            return bin.split("").reverse().join("")
            break
        // Decimal To Octal
        case 2:
            let oct = ""
            while (num > 0) {
                oct += num % 8
                num = Math.floor(num / 8)
            }
            return oct.split("").reverse().join("")
            break
        // Decimal To Hexadecimal
        case 3:
            let hexa = ""
            let rem = 0
            while (num != 0) {
                rem = num % 16
                if (rem < 10) {
                    hexa += String.fromCharCode(48 + rem) 
                }
                else {
                    hexa += String.fromCharCode(55 + rem) 
                }
                num = parseInt(num / 16)
            }
            return hexa.split("").reverse().join("")
            break
        // Decimal To Roman Numerals
        case 4:
            let number = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
            let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
            let i=12;
            let roman = ""
            while(decTemp>0)
            {
                let div = Math.floor(decTemp/number[i]);
                decTemp = decTemp%number[i];
                while(div--)
                {
                    roman += sym[i]
                }
                i--;
            }
            return roman
    }
}

function NumberSystem () {
    const string = inputArea.value;
    const in_binary = document.getElementById('binary')
    const in_octal = document.getElementById('octal')
    const in_decimal = document.getElementById('decimal')
    const in_hexadecimal = document.getElementById('hexadecimal')
    const in_roman = document.getElementById('roman')
    const out_binary = document.getElementById('out_binary')
    const out_octal = document.getElementById('out_octal')
    const out_decimal = document.getElementById('out_decimal')
    const out_hexadecimal = document.getElementById('out_hexadecimal')
    const out_roman = document.getElementById('out_roman')
    let newString = Number(string)

    if (in_binary.checked && out_binary.checked) {
        outputArea.value = string
    } 
    else if (in_binary.checked && out_decimal.checked) {
        if (inputArea.value != "")
            outputArea.value = binToDec(newString)
    }
    else if (in_binary.checked && out_octal.checked) {
        let decTemp = binToDec(newString)
        if (inputArea.value != "")
            outputArea.value = decToAll(decTemp, 2)
        else 
            outputArea.value = ""
    }
    else if (in_binary.checked && out_hexadecimal.checked) {
        decTemp = binToDec(newString)
        outputArea.value = decToAll(decTemp, 3)
    }
    else if (in_binary.checked && out_roman.checked) {
        decTemp = binToDec(newString)
        outputArea.value = decToAll(decTemp, 4)
    }
    else if (in_octal.checked && out_octal.checked) {
        if (inputArea.value != "")
            outputArea.value = newString
        else {
            outputArea.value = ""
        }
    }
    else if (in_octal.checked && out_binary.checked) {
        decTemp = octToDec(newString)
        console.log(decTemp)
        if (inputArea.value != "")
            outputArea.value = decToAll(decTemp, 1)
        else {
            outputArea.value = ""
        }
    }
    else if (in_octal.checked && out_decimal.checked) {
        if (inputArea.value != "")
            outputArea.value = octToDec(newString)
        else {
            outputArea.value = ""
        }
    }
    else if (in_octal.checked && out_hexadecimal.checked) {
        decTemp = octToDec(newString)
        if (inputArea.value != "")
            outputArea.value = decToAll(decTemp, 3)
        else {
            outputArea.value = ""
        }
    }
    else if (in_octal.checked && out_roman.checked) {
        decTemp = octToDec(newString)
        if (inputArea.value != "")
            outputArea.value = decToAll(decTemp, 4)
        else {
            outputArea.value = ""
        }       
    }
    else if (in_hexadecimal.checked && out_decimal.checked) {
        if (inputArea.value != "") 
            outputArea.value = hexaToDec(string)
        else
            outputArea.value = ""   
    }
    else if (in_hexadecimal.checked && out_binary.checked) {
        decTemp = hexaToDec(string)
        if (inputArea.value != "") 
            outputArea.value = decToAll(decTemp, 1)
        else
            outputArea.value = ""   
    }
    else if (in_hexadecimal.checked && out_octal.checked) {
        decTemp = hexaToDec(string)
        if (inputArea.value != "") 
            outputArea.value = decToAll(decTemp, 2)
        else
            outputArea.value = ""   
    }
    else if (in_hexadecimal.checked && out_hexadecimal.checked) {
        if (inputArea.value != "") 
            outputArea.value = string
        else
            outputArea.value = ""   
    }
    else if (in_hexadecimal.checked && out_roman.checked) {
        decTemp = hexaToDec(string)
        if (inputArea.value != "") 
            outputArea.value = decToAll(decTemp, 4)
        else
            outputArea.value = ""   
    }
    else if (in_decimal.checked && out_binary.checked) {
        if (inputArea.value != "") 
            outputArea.value = decToAll(newString, 1)
        else
            outputArea.value = ""   
    }
    else if (in_decimal.checked && out_octal.checked) {
        if (inputArea.value != "") 
            outputArea.value = decToAll(newString, 2)
        else
            outputArea.value = ""   
    }
    else if (in_decimal.checked && out_hexadecimal.checked) {
        if (inputArea.value != "") 
            outputArea.value = decToAll(newString, 3)
        else
            outputArea.value = ""   
    }
    else if (in_decimal.checked && out_roman.checked) {
        decTemp = newString
        if (inputArea.value != "") 
            outputArea.value = decToAll(decTemp, 4)
        else
            outputArea.value = ""   
    }
    else if (in_decimal.checked && out_decimal.checked) {
        if (inputArea.value != "") 
            outputArea.value = string
        else
            outputArea.value = ""   
    }
    else if (in_roman.checked &&  out_decimal.checked) {
        if (inputArea.value != "") 
            outputArea.value = romanToDec(string)
        else
            outputArea.value = "" 
    }
    else if (in_roman.checked &&  out_octal.checked) {
        decTemp = romanToDec(string)
        if (inputArea.value != "") 
            outputArea.value = decToAll(decTemp, 2)
        else
            outputArea.value = "" 
    }
    else if (in_roman.checked &&  out_hexadecimal.checked) {
        decTemp = romanToDec(string)
        if (inputArea.value != "") 
            outputArea.value = decToAll(decTemp, 3)
        else
            outputArea.value = "" 
    }
    else if (in_roman.checked &&  out_binary.checked) {
        decTemp = romanToDec(string)
        if (inputArea.value != "") 
            outputArea.value = decToAll(decTemp, 1)
        else
            outputArea.value = "" 
    }
    else if (in_roman.checked &&  out_roman.checked) {
        if (inputArea.value != "") 
            outputArea.value = string
        else
            outputArea.value = "" 
    }
}