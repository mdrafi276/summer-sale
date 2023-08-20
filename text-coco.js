MD Rafi
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github Revision</title>
</head>

<body>
    <h2 id="secret-info">My secret Information</h2>
    <input id="delete-confirm" type="text" placeholder="Input delete">
    <button id="delete-btn" disabled>Submit</button>


    <script>
        document.getElementById('delete-confirm').addEventListener('keyup', function () {
            const text = event.target.value
            const deleteButton = document.getElementById('delete-btn')
            if (text === 'delete') {
                deleteButton.removeAttribute('disabled')
            } else {
                deleteButton.setAttribute('disabled', true)
            }
        })

        document.getElementById('delete-btn').addEventListener('click', function () {
            const secret = document.getElementById('secret-info')
            secret.style.display = 'none'
        })
    </script>
</body>

</html>