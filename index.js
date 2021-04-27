const num = 42
const num2 = num ** 2
console.log(num2)
const num3 = Math.ceil(Math.random() * 10)
console.log(num3)

const locale = 'ko-KR'
const options = {
  day: 'numeric',
  year: 'numeric',
  month: 'long'
}

const date = new Intl.DateTimeFormat(locale, options).format()
console.log(date)

const fibonacci = [1, 1, 2, 3, 5, 8, 13]
const nextFib = fibonacci.concat([21])
console.log(nextFib)
const next = [...nextFib, 34]
console.log(next)

console.log(next.every(n => typeof n === 'number'))

const newArr = next
                  .map(num => num **2)
                  .filter(num => num % 2 === 0)
                  .reduce((acc, n) => acc + n, 0)
console.log(newArr)

