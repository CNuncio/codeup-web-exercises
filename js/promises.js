

    fetch('https://api.github.com/users/CNuncio/events', {

    headers: {'Authorization': 'promises_gitHub_ID'}})

    .then(response => response.json())
        .then(data => {
            console.log(data[1].created_at)
        })
        .catch(console.error)

