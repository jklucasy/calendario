fetch("https://holidayapi.com/v1/holidays", {
    body: "country=PE&year=2020&pretty&key=d6d9a74a-04c3-46c6-ad32-e70b64464dfb",
    headers: {
    "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
}).then(res=>console.log(res.json()))