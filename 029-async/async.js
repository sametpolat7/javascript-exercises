// JS Asynchronous Operations
// Asenkron (Eşzamansız) işlemlerde, görevler eşzamanlı (sıralı) olarak yürütülebilir ve görevler işlenirken programın çalışmaya devam etmesine olanak tanır. Asenkron işlemler programın yürütme akışını engellemez. Bu, özellikle görevlerin bir sunucudan veri alma veya dosya okuma/yazma gibi G/Ç işlemlerini beklemeyi içerdiği senaryolarda daha iyi yanıt verme ve verimlilik sağlar. Eşzamansız işlemler callbacks, promises ve async/await gibi çeşitli teknikler kullanılarak uygulanabilir.

// Callbacks
// Geri aramalar, başka bir fonksiyona argüman olarak aktarılan ve işlem tamamlandığında çağrılan fonksiyonlardır. Promises ve async/await kullanılmaya başlamadan önce JavaScript'te asenkron işlemleri gerçekleştirmenin yaygın bir yolu olmuştur.

function fetchData(callback) {
    setTimeout(() => {
        const data = {
            name: "Samet",
            surName: "Polat",
            id: 21254
        };
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Data : ", data);
}

fetchData(displayData);
console.log("Fetching data...");


// Promises
// Promise'ler, callback'lere kıyasla asenkron işlemleri ele almak için daha temiz bir yol sağlar. Bir promise, asenkron bir işlemin nihai olarak tamamlanmasını veya başarısız olmasını temsil eder ve birden fazla asenkron işlemin zincirleme olarak gerçekleştirilmesine olanak tanır.

function fetchDataforPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                name: "Özlem",
                surName: "Özcan",
                id: 58954
            };
            resolve(data);
        }, 3000)
    });
}

fetchDataforPromise()
.then((data) => {
    console.log("Data : ", data);
})
.catch(() => {
    console.log("Error. Data is not found.")
})


// async and await
// Async/await, promise'lerin üzerine inşa edilmiştir ve eşzamansız kodun eşzamanlı görünmesini sağlayarak okunmasının ve anlaşılmasının daha kolay olmasını sağlar.

function fetchDataforAsync() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = {
            name: "Guest",
            surName: "",
            id: null
        };
        resolve(data);
    }, 4000)
})
}

async function fetchDataForAwait() {
    try {
        const data = await fetchDataforAsync();
        console.log("Data : ", data);
    }catch(error) {
        console.log("Something wrong", error);
    }
}

fetchDataForAwait();