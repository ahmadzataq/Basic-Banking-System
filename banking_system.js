class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
    alert(`Saldo Anda Rp.${this.saldo}.`);
  }

  deposit(amount) {
    this.saldo += amount;
    alert(`Deposit sukses. Saldo terbaru Rp.${this.saldo}.`);
    this.promptTransaction(); 
  }

  withdraw(amount) {
    if (amount <= this.saldo) {
      this.saldo -= amount;
      alert(`Withdraw sukses. Saldo terbaru Rp.${this.saldo}.`);
    } else {
      alert("Dana tidak mencukupi untuk penarikan ini.");
    }
    this.promptTransaction(); 
  }

  promptTransaction() {
    let transactionType = prompt("Apakah Anda ingin deposit, withdraw, atau keluar? (ketik 'deposit', 'withdraw', atau 'keluar')");
    
    const isValidAmount = (amount) => !isNaN(amount) && amount > 0;
    
    if (transactionType === 'keluar') {
      alert(`Sisa saldo Rp.${this.saldo}. Terima kasih telah bertransaksi dengan kami!`);
      return; // Menghentikan loop jika pengguna memilih exit
    }
    
    let amount;
    switch (transactionType) {
      case 'deposit':
        amount = parseFloat(prompt("Berapa nominal uang yang ingin Anda setorkan?"));
        if (isValidAmount(amount)) {
          this.deposit(amount);
        } else {
          alert("Jumlah tidak valid.");
          this.promptTransaction(); 
        }
        break;
      case 'withdraw':
        amount = parseFloat(prompt("Berapa nominal uang yang ingin Anda tarik?"));
        if (isValidAmount(amount)) {
          this.withdraw(amount);
        } else {
          alert("Jumlah tidak valid.");
          this.promptTransaction(); 
        }
        break;
      default:
        alert("Jenis transaksi tidak valid.");
        this.promptTransaction();
        break;
    }
  }
}

let account = new BankAccount(0);
account.promptTransaction();
