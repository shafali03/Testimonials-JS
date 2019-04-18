
(function () {

    //customers
    let customers = [];
    let index = 0;


    //object constructor function

    function Customer(name, img, text) {
        this.name = name;
        this.img = img;
        this.text = text;
    }

    // create customer function

    function createCustomer(name, img, text) {
        // full img
        let fullImg = `img/customer-${img}.jpg`;

        // create a new customer instance
        const customer = new Customer(name, fullImg, text);
        // add to all customers
        customers.push(customer);
    }

    createCustomer('john', 1, `I just can't get enough of car . I want to get a T-Shirt with car on it so I can show it off to everyone. Best. Product. Ever!`);

    createCustomer('bob', 2, `Absolutely wonderful! Car sale is the next killer app. Car sale is the real deal!`);

    createCustomer('peter', 3, `I can't say enough about car service. Thanks for the great service. I will recommend you to my colleagues.`);

    createCustomer('tom', 4, `Buy car should be nominated for service of the year. Buy car saved my business. Thank you for making it painless, pleasant and most of all hassle free! I am so pleased with this product.`);

    // console.log(customers)



    document.querySelectorAll('.btn').forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            console.log(event.target);

            if (event.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }

            if (event.target.parentElement.classList.contains('nextBtn')) {
                //to get the last item in the array
                if (index === (customers.length - 1)) {
                    index = -1;
                }
                index++;
                document.getElementById('customer-img').src = customers[index].img;
                document.getElementById('customer-name').textContent = customers[index].name;
                document.getElementById('customer-text').textContent = customers[index].text;
            }


        })
    })





})();