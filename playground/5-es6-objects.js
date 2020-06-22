//Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object destructuring

const product = {
    label:'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel,stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) =>{
    console.log(type, label, stock)
}

transaction('order', product)

// Suppose you have one object will multiple keys, and if you want to access some of the available keys.

// Example:

// const userData = { name: "Andrew" , email: "andrew@mead.io", address: "philadelphia", courses: [ "nodejs", "js" ], websiteLink: "andrewmead.io"}



// Now suppose you want a name, courses, and email.

// Option-1

// const name = userData.name

// const email = userData.email

// const courses = userData.courses

// Option-2

// const { name, email, courses } = userData