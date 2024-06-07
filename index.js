

let name = 'Alex'
let money = 10000
let account = 7777 


const user_name = prompt("What is your name?").trim()

if(user_name.toLowerCase() === name.toLowerCase()) {
    const user_pwd = +prompt("Type your password?")

    if(user_pwd === account) {
        const withdraw = +prompt("How much u need to withdraw?")

        if(withdraw < 0 || withdraw > money) {
            alert('У вас не достаточно средств либо не верный ввод!')
        } else {
            money = money - withdraw
            alert(`
                Dear customer!
                Your balance: ${money.toLocaleString('uz')}
                You just withdraft: ${withdraw.toLocaleString('uz')}
                Your balance was: ${(money + withdraw).toLocaleString('uz')}
            `)

        }

    } else {
        alert('Wrong password!')
    }

} else {
    alert('Wrong name!')
}
_