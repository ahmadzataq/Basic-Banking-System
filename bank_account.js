const saldo = 100000;

function tambahSaldo() {
    let saldoUser = window.prompt("Masukkan nominal Penambahan uang");

    const tambahSaldo = saldo + +saldoUser;
    alert("Hasil Penjumlahan Saldo Adalah " + tambahSaldo);

    return tambahSaldo;
};

function kurangSaldo() {
    let saldoUser = window.prompt("Masukan nominal Pengurangan uang");

    const kurangSaldo = saldo - +saldoUser;
    alert("Hasil Pengurangan Saldo Adalah " + kurangSaldo);

    return kurangSaldo;
}

tambahSaldo();
kurangSaldo();