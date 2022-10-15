let aktywna_liczba = ''
let nieaktywna_liczba = ''
let wynik = 0
let pole4 = '7'
let pole5 = '8'
let pole6 = '9'
let pole8 = '4'
let pole9 = '5'
let pole10 = '6'
let pole12 = '1'
let pole13 = '2'
let pole14 = '3'
let pole17 = '0'
let operacja = ''

/* Przycisk % - Oblicza procent z liczby [nieaktywne]
function zpole0() {
	nieaktywna_liczba = aktywna_liczba
	aktywna_liczba = ''
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
	document.getElementById('nieaktywna_div').innerHTML = nieaktywna_liczba
	wynik %= parseFloat(nieaktywna_liczba)
	operacja = 'procentowanie'
}
*/

/*Przycisk C - Funkcja czyszcząca po klkinięciu przycisku */
function zpole1() {
	nieaktywna_liczba = ''
	aktywna_liczba = ''
	wynik = ''
	operacja = ''
	document.getElementById('wynik_div').innerHTML = ''
	document.getElementById('nieaktywna_div').innerHTML = ''
}
/*Przycisk <- - Funkcja Backspace usuwająca ostatni element tablicy aktywnej_liczby*/
function zpole2() {
	let tablica = []
	let wynik1 = ''
	for (i = 0; i < aktywna_liczba.length; i++) {
		tablica.push(aktywna_liczba[i])
	}
	tablica.pop()
	for (i = 0; i < tablica.length; i++) {
		wynik1 += tablica[i]
	}
	aktywna_liczba = wynik1

	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk / - Funkcja po wynonaniu dzielenia*/
function zpole3() {
	nieaktywna_liczba = aktywna_liczba
	aktywna_liczba = ''
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
	document.getElementById('nieaktywna_div').innerHTML = nieaktywna_liczba
	wynik /= parseFloat(nieaktywna_liczba)
	operacja = 'dzielenie'
}
/*Przycisk 7 - Przypisanie aktywnej liczby*/
function zpole4() {
	aktywna_liczba += pole4
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk 8 - Przypisanie aktywnej liczby*/
function zpole5() {
	aktywna_liczba += pole5
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk 9 - Przypisanie aktywnej liczby*/
function zpole6() {
	aktywna_liczba += pole6
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}

/*Przycisk * - Funkcja po wykonaniu mnożenia*/
function zpole7() {
	nieaktywna_liczba = aktywna_liczba
	aktywna_liczba = ''
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
	document.getElementById('nieaktywna_div').innerHTML = nieaktywna_liczba
	wynik *= parseFloat(nieaktywna_liczba)
	operacja = 'mnozenie'
}

/*Przycisk 4 - Przypisanie aktywnej liczby*/
function zpole8() {
	aktywna_liczba += pole8
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk 5 - Przypisanie aktywnej liczby*/
function zpole9() {
	aktywna_liczba += pole9
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk 6 - Przypisanie aktywnej liczby*/
function zpole10() {
	aktywna_liczba += pole10
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}

/*Przycisk - - Funkcja po wykonaniu odejmowania*/
function zpole11() {
	nieaktywna_liczba = aktywna_liczba
	aktywna_liczba = ''
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
	document.getElementById('nieaktywna_div').innerHTML = nieaktywna_liczba
	wynik -= parseFloat(nieaktywna_liczba)
	operacja = 'odejmowanie'
}

/*Przycisk 1 - Przypisanie aktywnej liczby*/
function zpole12() {
	aktywna_liczba += pole12
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk 2 - Przypisanie aktywnej liczby*/
function zpole13() {
	aktywna_liczba += pole13
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk 3 - Przypisanie aktywnej liczby*/
function zpole14() {
	aktywna_liczba += pole14
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}

/*Przycisk + - Funkcja po wykonaniu dodawania*/
function zpole15() {
	nieaktywna_liczba = aktywna_liczba
	aktywna_liczba = ''
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
	document.getElementById('nieaktywna_div').innerHTML = nieaktywna_liczba
	wynik += parseFloat(nieaktywna_liczba)
	operacja = 'dodawanie'
}
function zpole17() {
	aktywna_liczba += pole17
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycisk , - Funkcja dodaje , w aktywnej_liczbie*/
function zpole18() {
	aktywna_liczba = aktywna_liczba + '.'
	document.getElementById('wynik_div').innerHTML = aktywna_liczba
}
/*Przycik = - Funkcja po kliknięciu równa się*/
function zpole19() {
	if (operacja == 'dodawanie') {
		wynik = parseFloat(nieaktywna_liczba) + parseFloat(aktywna_liczba)
		document.getElementById('wynik_div').innerHTML = wynik
		aktywna_liczba = wynik
	} else if (operacja == 'mnozenie') {
		wynik = parseFloat(nieaktywna_liczba) * parseFloat(aktywna_liczba)
		document.getElementById('wynik_div').innerHTML = wynik
		aktywna_liczba = wynik
	} else if (operacja == 'odejmowanie') {
		wynik = parseFloat(nieaktywna_liczba) - parseFloat(aktywna_liczba)
		document.getElementById('wynik_div').innerHTML = wynik
		aktywna_liczba = wynik
	} else if (operacja == 'dzielenie') {
		wynik = parseFloat(nieaktywna_liczba) / parseFloat(aktywna_liczba)
		document.getElementById('wynik_div').innerHTML = wynik
		aktywna_liczba = wynik
	} /*else if (operacja == 'procentowanie') {
		wynik = parseFloat(nieaktywna_liczba) % parseFloat(aktywna_liczba)
		document.getElementById('wynik_div').innerHTML = wynik
		aktywna_liczba = wynik
	}*/
}
