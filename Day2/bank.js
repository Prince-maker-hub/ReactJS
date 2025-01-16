function createAccount(accname){
    const account ={
        name: accname,
        bal: intbal
    };

}
function withdraw(account,amount){
    let bal = Account.bal;
    if(amount<= bal){
        bal = bal - amount;
        account.bal = bal;
        console.log("withdraw amuont is $$amount");
    }
    else{
        console.log("insufficent balance");
    }


}
function deposite(account, amount){
    let bal = account.bal;
    bal = bal+amount;
    account.bal = bal;
}
const Acc1 = createAccount("prince" , 500);
deposite(Acc1,500);
withdraw(Acc1,800);